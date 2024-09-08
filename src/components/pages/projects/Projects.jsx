import data from '../../../../src/assets/data.json';
import { Card } from './Card'

function Projects() {

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
    </div>
  )
}

export default Projects

