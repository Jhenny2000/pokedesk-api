import React from 'react';
import { Component } from 'react';
import Card from '../Card';

class Pokedex extends Component{
    // constructor(props){
    //     super(props)
       
    // }

    render(){

        return(
            <>
            {this.props.win ? <h1 className='vencedor'>Vencedor</h1> : <h1 className='perdedor'>Perdedor</h1>}
                <div className='containerCards'>
                    {
                        this.props.pokemons.map((pokemon) => {
                            return <Card key={pokemon.id}  pokemon={pokemon} />
                        })
                    }
                </div>
            </>
        )
    }
}

export default Pokedex;