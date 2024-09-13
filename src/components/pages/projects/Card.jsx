
export default function Card({ project: {name, technologies, image, link, github, description} }) {
  return (
    <div className='w-80 border bg-white rounded-xl'>
    <img src={image} alt={name} className='w-full rounded-xl' width={150} />
    <div className='p-4 text-black'>
        <h1 className='text-gray-500 font-bold tracking-widest mb-0 uppercase'>{name}</h1>
        <h3 className='font-bold mt-0'>Made with: {technologies}</h3>
        <p className='mt-2'>{description}</p>
        <div className='flex gap-4 justify-center place-self-end border-black border-2'>
            <button className='bg-[#00df9a] hover:bg-green-500 text-white px-4 py-2 inline-block mt-4 rounded' href={link}>Live Site</button>
            <button className='bg-[#00df9a] hover:bg-green-500 text-white px-4 py-2 inline-block mt-4 rounded' href={github}>Github</button>
        </div>
    </div>
    </div>
  )
}

