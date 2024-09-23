import styled from 'styled-components'

const StyledLink = styled.a`
background-color: #00df9a;
text-color: white;
padding: 0.5rem 1rem 0.5rem;
border-radius: 0.25rem;
&:hover {
  background-color: rgb(34 197 94);
  }
`
const Button = ({ link, text }) => {
  return (
    <StyledLink href={link} aria-label={text} target="_blank" rel="noreferrer">
      {text}
    </StyledLink>
  );
}


export default function Card({ project: {name, technologies, image, link, github, description} }) {
  return (
    <div>
    <div>
      <h2 className='text-center text-[#00df9a] text-3xl'>{name}</h2>
      <div className='my-4 flex justify-center gap-4 text-black'>
        <Button link={link} text='Live Site'/>
        <Button link={github} text='Github' />
      </div>
      <div className='min-h-[30vh] flex flex-wrap'>
        <div className='w-full lg:w-1/2 p-5 bg-[#1a1a1a]'>
          <div className='min-h-full min-w-full'>
            <img src={image} alt={name} />
          </div>
        </div>
        <div className='w-full lg:w-1/2 p-5 bg-[#4c5666]'>
          <div className='text-[#fbfbfb] my-2'>
            <p>{description}</p>
          </div>
          <div className='font-bold'>Technologies:</div>
          <ul>
            {technologies.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

