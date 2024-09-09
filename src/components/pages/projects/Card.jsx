
export default function Card({project: {name, technologies, image, link, github}}) {
  return (
    <div className='max-w-45 max-h-64 border-2 border-white'>
    <img src={image} alt={name} className='object-contain float-left h-full' width={150} />
    <div>
        <h1>{name}</h1>
        <h3>Made with: {technologies}</h3>
        <div>
            <button href={link}>Live Site</button>
            <button href={github}>Github</button>
        </div>
    </div>
    </div>
  )
}

