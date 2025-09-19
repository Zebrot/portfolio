import Scrolldown from "../Scrolldown";
import Image from "next/image";

export default function Contact() {
    return (
        <div className="my-20 p-20 pb-80 rounded-xl bg-ultraLightGrey w-full">
            <div className="w-40 h-40 rounded-full overflow-hidden relative">
                <div className="w-100 h-100 absolute top-[50%] left-[50%] translate-[-50%,-50%]">
                    <Image src='/photo.jpg' alt="photo de pierre terrancle" width={800} height={800}/>
                </div>
            </div>
            <Scrolldown title="infos">
                <ul>
                    <li>Téléphone : 06345235425</li>
                    <li>mail : pi.terrancle@gmail.com</li>
                    <li>adresse : 06345235425</li>
                </ul>
            </Scrolldown>
            <Scrolldown title="socials">
                <ul>
                    <li className="flex gap-2 justify-between"><p>Téléphone : </p>06345235425</li>
                    <li className="flex gap-2 justify-between"><p>mail : </p>pi.terrancle@gmail.com</li>
                    <li className="flex gap-2 justify-between"><p>Téléphone : </p>06345235425</li>
                </ul>
            </Scrolldown>
        </div>
    )
}