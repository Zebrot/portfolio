import { ChangeEvent, FormEvent, useState } from "react"

type formValues = {
    email? : string,
    message? : string
}
export default function ContactForm() {
    const [values, setValues] = useState<formValues>({email : '', message:''})
    const [sendingStatus, setSendingStatus] = useState(0) // 0 = not sent, 1 = success, -1 = error, 2 = sending...
    const [errorMessage, setErrorMessage] = useState('')
    const handleChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({
            ...values,
            [e.target.id] : e.target.value
        })
    }
    async function handleSubmit(e : FormEvent) {
        setSendingStatus(2);
        e.preventDefault();
        fetch(`/api/sendMail`,{
            method:'POST',
            body:JSON.stringify(values),
            headers : {"Content-type" : "application/json"}
        })
            .then((res)=> res.json())
            .then((value) => {
                if(value.error){
                    setSendingStatus(-1)
                    setErrorMessage(value.error)}
                else
                    setSendingStatus(1)
            })
            .catch(() => setSendingStatus(-1))
    }
    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-2 max-lg:text-[16px]">
            <h3 className="text-center">Envoyez-moi un message :</h3>
            <div className="w-full flex flex-col">
                <label htmlFor="email" className="px-2">e-mail :</label>
                <input
                    required 
                    id="email"
                    value={values?.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="nom.prenom@mail.com"
                    className="outline-none bg-white p-1 rounded-md"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="message" className="px-2">message</label>
                <textarea
                    required
                    id="message"
                    value={values?.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Une idée de projet, une suggestion ?"
                    className="w-full resize-none outline-none bg-white p-1 rounded-md"
                />                
            </div>
            <button type="submit" value='submit' disabled={sendingStatus != 0} className={`
                ${sendingStatus == 0 && 'bg-lightgrey cursor-pointer hover:translate-y-[1px] active:translate-y-[3px]'} 
                ${sendingStatus == 1 && 'bg-green'}
                ${sendingStatus == -1 && 'bg-red'}
                outline-lightgrey w-full  transition-translate duration-100
                text-white rounded-lg text-center p-1`
            }>
                {sendingStatus == 0 && 'Envoyer'}
                {sendingStatus == 1 && 'Message envoyé !'}
                {sendingStatus == -1 && errorMessage }   
                {sendingStatus == 2 && <span>Envoi{'...'}</span>}        
            </button>
        </form>
    )
}