import Image from 'next/image'

export function Header(){
    return (
        <header>
            <Image 
            src={"/logo.png"}
            alt="Logo do BlogTech"
            width={229}
            height={50}
            />
        </header>
    )
}