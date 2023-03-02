import Image from 'next/image'

export function Header(){
    return (
        <header className='w-full h-28 flex items-center'>
            <Image 
            src={"/logo.png"}
            alt="Logo do BlogTech"
            width={229}
            height={50}
            />
        </header>
    )
}