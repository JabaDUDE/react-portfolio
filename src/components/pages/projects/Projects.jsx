import data from '../../../../src/assets/data.json';
import  Card  from './Card'

function Projects() {

  const Project = data.projects

  return (
    <div>
    
      <h1 className='text-center text-xl'>Technologies I Use:</h1>

      <div className='flex justify-center flex-wrap'>
        {data.languages.map((item, index) => {
          return (
            <img src={item.image} alt={item.name} key={index} width={40} height={40} className='m-4'/>
          )
        })}
      </div>

      <h1 className='text-center text-xl'>Projects:</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {Project.map((project, index) => {
          return <Card project={project} key={index} />
        })}
      </div>

    </div>
  )
}

export default Projects

