import React from "react"
import { useSelector } from "react-redux"
import "../styles/Card.css"


const TeamPage =()=>{
    const team = useSelector(state => state.team.value)
 

    console.log(team)
    return (
        <>
        <h1>Equipo Seleccionado</h1>
        {team.map((pokemon,index)=>(  
              <div key={index} className="card">
                <h4>{pokemon.name}</h4> 
                 <img src={pokemon.image} alt="" />
                 </div>
            ))}
           
        </>
    )
}
export default TeamPage