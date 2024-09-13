
export default function Card({ project: {name, technologies, image, link, github, description} }) {
  return (
    <div className='bg-white rounded-xl w-80 flex flex-col'>
    <img src={image} alt={name} className='w-full h-48 rounded-t-xl mb-1' />
    <div className='text-black px-2'>
        <h1 className='text-gray-500 font-bold tracking-widest mb-0 uppercase'>{name}</h1>
        <h3 className='font-bold mt-0'>Made with: {technologies}</h3>
        <p>{description}</p>
        <div className='flex gap-4 justify-center mb-1'>
            <button className='bg-[#00df9a] hover:bg-green-500 text-white px-4 py-2 inline-block mt-4 rounded' href={link}>Live Site</button>
            <button className='bg-[#00df9a] hover:bg-green-500 text-white px-4 py-2 inline-block mt-4 rounded' href={github}>Github</button>
        </div>
    </div>
    </div>
  )
}

