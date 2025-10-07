import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

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
    const message = {
        from: body.email,
        to: process.env.PERSONAL_EMAIL,
        subject: `Contact de ${body.email}`,
        text: body.message,
        html: `Portfolio contact message. <br/><p>${body.message} ,<br/> sent ${perMinute} mails this minute, ${perDay} this day.</p>`,
    };

    const transporter = nodemailer.createTransport({
        host: 'smtp-relay.brevo.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER, 
            pass: process.env.SMTP_PASS, 
        },
    });
    try{
        transporter.sendMail(message);
        return NextResponse.json({status : 250})
    }
    catch(error){
        return NextResponse.json(
            {error : 'Connection refused !'},
            {status : 500}
        )
    }
}