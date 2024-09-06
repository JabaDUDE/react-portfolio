import img from '../../assets/self/flower-king.jpg'

function About() {
  return (
    <div className='flex max-w-screen-lg'>
      <div className='md:m-10 m-5'>
        <div className='md:float-left md:mr-5'>
          <img src={img} alt='photo of myself' className='w=[150px] h-[275px] rounded-xl m-auto' />
      </div>
      <div className='p-4'>
        <p className='mb-4'>My name is Dakota and I'm a web developer! I thrive on the excitement of learning and the challenge of problem solving. WIth a passion for discovering new concepts and mastering complex skills, I am constanty seeking opportunities to epand my knowledge and apply it. My approach to challenges is grounded in curiosity and creativity.</p>
        <p>Whether tackling projects or exploring various fields, I am dedicated to growing personally and professionally through continuous learning and problem solving.</p>
          <div className='text-right mt-10'>
          <blockquote>
          <p><q>Journey Before Destination</q></p>
          </blockquote>
          <p>- Brandon Sanderson, <cite>The Stormlight Archive</cite></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About