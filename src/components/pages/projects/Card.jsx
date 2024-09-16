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


export default function Card({ project: {name, technology, image, link, github, description} }) {
  return (
    <div className='bg-slate-200 rounded-xl w-80 flex flex-col'>
    <img src={image} alt={name} className='w-full h-48 rounded-t-xl mb-1' />
    <div className='text-black px-2'>
        <h1 className='text-gray-500 font-bold tracking-widest mb-0 uppercase'>{name}</h1>
        <h3 className='font-bold mt-0'>Made with: {technology} </h3> 
        <p>{description}</p>
        <div className='flex gap-4 my-3 justify-center'>
          <Button link={link} text='Live Site' />
          <Button link={github} text='Github' />
        </div>
    </div>
    </div>
  )
}

