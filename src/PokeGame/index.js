import React, {Component} from 'react'
import '../Pokedex/style.css'
import Pokedex from '../Pokedex'
import axios from 'axios';

class PokeGame extends Component {

    constructor(props){
        super(props);

        this.state = {

            list:[
                {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
                {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
                {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
                {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
                {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
                {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
                {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
                {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
            ],

            hand1: [],
            hand2 :[
                {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
                {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
                {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
                {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
                {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
                {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
                {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
                {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
            ],

            sumOne : 0,
            sumTwo : 0,

            // theAmount : 6,
            // total : theAmount * 2,
            // pokemonListId : [],
            listApi : [],
            setPokemonList : [],
            maoUm : [],
            maoDois : []
        }

    }

    sortPokemon(){
        const idPokemon = Math.floor((Math.random() * 897) + 1)
    
        return idPokemon
    
    }

    async getPokemon(){

        const theAmount = prompt('Coloque um valor')
        const totalPokemon = theAmount * 2
        const pokemonListId = []
            
        for(let i = 1 ; i <= totalPokemon; i++){
            const pokemonId = this.sortPokemon()

            pokemonListId.push(pokemonId)
        }

        for(const id of pokemonListId){
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            this.state.listApi.push(response.data)

        }

        this.setState({setPokemonList : this.state.listApi})

        const handOne = []
        const handTwo = this.state.setPokemonList

        while (handOne.length < handTwo.length) {
            const newPokemon = Math.floor(Math.random() * handTwo.length);
            const pokemon = handTwo.splice(newPokemon, 1)[0]
            
            handOne.push(pokemon);    
        }

        const sum1 = handOne.reduce((exp, quantidade) =>
            exp + quantidade.base_experience, 0)

        const sum2 = handTwo.reduce((exp, quantidade) =>

            exp + quantidade.base_experience, 0)

            this.setState({maoUm : handOne , maoDois : handTwo, sumOne : sum1 , sumTwo : sum2})

    }


    
    componentDidMount(){
        this.getPokemon();
    }

    render() {
        return (
            <>
                <h1 className='total'>{this.state.sumOne}</h1>
                <Pokedex pokemons={this.state.maoUm} win={this.state.sumOne > this.state.sumTwo}/>
                

                <h1 className='total'>{this.state.sumTwo}</h1>
                <Pokedex pokemons={this.state.maoDois} win={this.state.sumTwo > this.state.sumOne}/>
                

            </>
            
        );
    }
}

export default PokeGame;


// {/* <>
               
//                { this.state.sumOne > this.state.sumTwo ?
               
//                    <>
//                     <h1 className='v'>Vencedor</h1>
//                     <h1 className='total'>{this.state.sumOne}</h1>
//                    </>
//                :  
//                     <>
//                     <h1 className='p'>Perdedor</h1>
//                     <h1 className='total'>{this.state.sumOne}</h1>
                    
//                     </>
//                }
//                     <Pokedex pokemons={this.state.hand1}/>


                    
                    
                    
//                     { this.state.sumTwo > this.state.sumOne ?
               
//                <>
//                 <h1 className='v'>Vencedor</h1>
//                 <h1 className='total'>{this.state.sumTwo}</h1>
//                </>
//            :  
//                 <>
//                 <h1 className='p'>Perdedor</h1>
//                 <h1 className='total'>{this.state.sumTwo}</h1>
                
//                 </>
//            }
//            <Pokedex pokemons={this.state.hand2}/>
//             </> */}