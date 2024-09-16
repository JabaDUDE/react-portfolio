import data from '../../../../src/assets/data.json';
import  Card  from './Card'

function Projects() {

  const Project = data.projects

  return (
    <div className='flex flex-col'>
    
      <h1 className='text-center text-xl'>Technologies I Use:</h1>

      <div className='flex justify-center flex-wrap'>
        {data.languages.map((item, index) => {
          return (
            <img src={item.image} alt={item.name} key={index} title={item.name} aria-label={item.name} width={40} height={40} className='m-4'/>
          )
        })}
      </div>

      <h1 className='text-center text-xl'>My Favorite Projects:</h1>

      <div className='flex flex-wrap justify-center gap-4 my-3 mx-auto p-4 items-stretch'>
        {Project.map((project, index) => {
          return <Card project={project} key={index} />
        })}
      </div>

    </div>
  )
}

export default Projects

