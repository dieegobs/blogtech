import CardPost from '@/components/CardPost'
import { Header } from '@/components/Header'
import Head from 'next/head'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Tech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>


      <div className='w-full max-w-[1120px] flex flex-col mx-auto pb-12'>
        <Header />

        <Link 
        href="/post"
        className='w-full h-full flex gap-8 items-center justify-center mt-12 hover:brightness-75 transition-all'>
          <div className='flex flex-1 h-[334px] relative rounded-2xl overflow-hidden'>
            <Image
              src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className='flex flex-1 h-[334px] flex-col gap-6'>
            <h1 className='font-bold text-[40px] text-blue-600'>Como desenvolver um blog com next.js</h1>
            <p className='text-zinc-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            <div>
              <p className='font-bold text-zinc-900'>Diego Bittencourt</p>
              <p className='text-zinc-600 font-sm'>31 de janeiro de 2023</p>
            </div>
          </div>
        </Link>



        <div className='grid grid-cols-3 gap-8 mt-12'>
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </div>

      </div>

    </>
  )
}
