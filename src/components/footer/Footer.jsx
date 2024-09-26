import { CiLinkedin } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";

const style ={
    color: '#00df9a',
    cursor: 'pointer',
}


function Footer() {
  return (
    <div className='flex flex-col text-center'>
    <h2 className='text-[#00df9a]'>Get In Touch:</h2>
    <div className='flex gap-4 justify-center'>
        <a href='https://www.linkedin.com/in/dakota-keast-93a86984' target="_blank" rel="noopener noreferrer">
            <CiLinkedin style={style} size={30} />
        </a>
        <a href='https://x.com/JabasMEOW' target="_blank" rel="noopener noreferrer">
            <SlSocialTwitter style={style} size={30} />
        </a>
    </div>
    </div>
  )
}

export default Footer