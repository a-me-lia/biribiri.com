
import Image from 'next/image'



export default function Home() {
  return (
    

    
    <main className="min-h-screen w-full bg-slate-700">
      
      <div className='flex flex-col justify-end items-center min-h-screen'>

        <div className='z-50 absolute top-36 w-full  sm:flex flex-row hidden'>
          <div className='w-1/2'></div>
          <div className='flex flex-col'>
          <p className='ml-8 font-contrail uppercase text-8xl text-slate-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>misaka mikoto</p>
          <p className='ml-8 text-slate-300 text-sm'>MisakaMikotoLovesGekota@gmail.com</p>
          
          </div>

          </div>
        <p className='uppercase text-slate-300 sm:hidden text-4xl font-contrail drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>misaka mikoto</p>
        <p className='absolute z-50 bottom-4 sm:hidden text-[14px] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '>MisakaMikotoLovesGekota@gmail.com</p>

        <div className='hidden sm:block relative w-full min-h-screen'>
          <Image src='/biribiriDesktop.png' alt='biribiri' fill className='object-cover'></Image>
        </div>

        <div className='block sm:hidden relative w-full h-[480px]'>
          <Image src='/biribiriMobile.png' alt='biribiri' fill className='object-cover'></Image>
        </div>
      </div>

    </main>
    

    
  )
}
