

function Card({ props }) {
  return (
    <>
    <div>
    <img src={props.image} alt={props.name} />
    </div>
    <div>
        <h1>{props.name}</h1>
        <h3>Made with: {props.technologies}</h3>
        <div>
            <button href={props.link}>Live Site</button>
            <button href={props.github}>Github</button>
        </div>
    </div>
    </>
  )
}

export default Card