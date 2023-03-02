
import Image from 'next/image'
import Link from 'next/link'

export default function CardPost(){
    return (
        <Link
        href={'/post'}
        className="w-full max-w-[352px] h-full flex flex-col items-center justify-between gap-7 hover:brightness-75 transition-all">
            <div className='flex w-full h-[234px] relative rounded-2xl overflow-hidden'>
            <Image
              src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className='flex w-full flex-1 flex-col justify-between gap-2'>
            <h1 className='font-bold text-xl text-blue-600'>Como desenvolver um blog com next.js</h1>
            <p className='text-zinc-600 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          
            <div>
            <p className='font-bold text-zinc-900'>Diego Bittencourt</p>
            <p className='text-zinc-600 font-sm'>31 de janeiro de 2023</p>
          </div>
          
          </div>
        </Link>
    )
}