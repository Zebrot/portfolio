import { NextRequest, NextResponse } from "next/server";

const history: Record<string, number[]> = {}

const MAX_PER_MINUTE = 1
const MAX_PER_DAY = 5
const ONE_MINUTE = 60 * 1000
const ONE_DAY = 24 * 60 * 60 * 1000

export async function POST(request : NextRequest) {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const now = Date.now()

    history[ip] = history[ip]?.filter(ts => now - ts < ONE_DAY) || []

    const perMinute = history[ip].filter(ts => now - ts < ONE_MINUTE).length
    const perDay = history[ip].length

    if (perMinute >= MAX_PER_MINUTE) {
    return NextResponse.json(
        { error: 'Trop de mails envoyés. Réessayez dans une minute' },
        { status: 429 }
    )
    }
    if (perDay >= MAX_PER_DAY) {
    return NextResponse.json(
        { error: 'Trop de mails envoyés. Attendez demain' },
        { status: 429 }
    )
    }

    history[ip].push(now)


    const body = await request.json()
    try {
        const res = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': process.env.BREVO_API_KEY!,
            },
            body: JSON.stringify({
                sender: { name: 'Portfolio', email: body.email },
                to: [{ email: process.env.PERSONAL_EMAIL }],
                subject: `Portfolio Contact: ${body.email}`,
                textContent: `From: ${body.email}\n\n${body.message}`,
            }),
        })

        if (!res.ok) {
            const text = await res.text()
            console.error('Brevo API error:', text)
            return NextResponse.json({ error: 'Email failed' }, { status: 500 })
        }
        return NextResponse.json({ success: true })

    } catch (err) {
        console.error('Fetch error:', err)
        return NextResponse.json({ error: 'Email failed' }, { status: 500 })
    }
    
}