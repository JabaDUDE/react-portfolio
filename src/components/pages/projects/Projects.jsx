import data from '../../../../src/assets/data.json';
import  Card  from './Card'

function Projects() {

  const Project = data.projects

  return (
    <div className='min-h-screen'>
    
      <h1 className='text-center text-xl'>Technologies I Use:</h1>

      <div className='flex justify-center flex-wrap'>
        {data.languages.map((item, index) => {
          return (
            <img src={item.image} alt={item.name} key={index} title={item.name} aria-label={item.name} width={40} height={40} className='m-4'/>
          )
        })}
      </div>

      <h1 className='text-center text-xl'>Projects I'm Proud Of:</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 my-3 mx-auto p-4 items-stretch'>
        {Project.map((project, index) => {
          return <Card project={project} key={index} />
        })}
      </div>

    </div>
  )
}

export default Projects

