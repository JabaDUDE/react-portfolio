/* eslint-disable react/no-unescaped-entities */
import { Typewriter, Cursor } from "react-simple-typewriter"
function Home() {


  return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
      <div className='text-left'>
        <h1 className='text-7xl mb-2'>I'm <span className='bg-gradient-to-r from-[#3044c5] to-[#acfa70] text-transparent bg-clip-text'>Dakota</span></h1>
        <h3 className="text-lg">I am a <span className='text-[#00df9a]'><Typewriter
            words={['Developer', 'Contributor', 'Student', 'Reader']}
            loop={0}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          /></span><Cursor cursorColor='#00df9a' /></h3>
      </div>
    </div>
  )
}

export default Home