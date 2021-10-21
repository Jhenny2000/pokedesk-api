import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import './style.css'

function CardF({pokemon}){

        const type = pokemon.types.map((item) => {
            return item.type.name
        })
        // console.log(type)
        const abilities = pokemon.abilities.map((item) => {
            return item.ability.name
        })

        const [isFlipped, setIsFlipped] = useState(false);
        const modalClick = () =>{
            setIsFlipped(!isFlipped)
        }
    

    return(
        
        <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
                <div className='card' key={pokemon.id} onClick={modalClick}>
                    <div className='namePoke'>
                        
                        <h2>{pokemon.name}</h2>
                    </div>
                    <img className='imgPoke' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(pokemon.id).padStart(3,'0')}.png`} alt='Pokemon'/>
                    <div className='info'>
                        <div className='type'>
                            <p className='type1'>Type: {type.join(' | ')}</p>
                        </div>
                        <div className='exp'>
                            <p>EXP: {pokemon.base_experience}</p>
                        </div>
                    </div>
                </div>
                <div className='card' key={pokemon.id} onClick={modalClick}>
                    <div className='namePoke'>
                        <h2>{pokemon.name}</h2>
                    </div>
                    <div className='detalhes'>
                        <div className='type'>
                            <p>Abilities: {abilities.join(' | ')}</p>
                        </div>
                        <div className='type'>
                            <p>Height: {pokemon.height}m</p>
                        </div>
                        <div className='type'>
                            <p>Weight: {pokemon.weight}kg</p>
                        </div>
                        <div className='type'>
                            <p>Type: {type.join(' | ')}</p>
                        </div>
                        <div className='type'>
                            <p>EXP: {pokemon.base_experience}</p>
                        </div>
                    </div>
                </div>
            </ReactCardFlip>
        </>
    )
}

export default CardF;