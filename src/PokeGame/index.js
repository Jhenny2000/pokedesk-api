import React, {Component} from 'react'
import '../Pokedex/style.css'
import Pokedex from '../Pokedex'
import axios from 'axios';

class PokeGame extends Component {

    constructor(props){
        super(props);

        this.state = {

            // list:[
            //     {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            //     {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            //     {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            //     {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            //     {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            //     {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            //     {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            //     {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
            // ],

            // hand1: [],
            // hand2 :[
            //     {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            //     {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            //     {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            //     {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            //     {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            //     {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            //     {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            //     {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
            // ],

            // state vazia para colocar a soma da primeira pokedex
            sumOne : 0,
            // state vazia para colocar a soma da segunda pokedex
            sumTwo : 0,
            // state com array vazio para colocar a lisa ineteira da api
            listApi : [],
            // state com array vazio para receber a lista de pokemons
            setPokemonList : [],
            maoUm : [],
            maoDois : [],
            // state com array vazio para receber a lista de tipos pokemons
            typeList : []
        }

    }

    // metodo para pegar o id dos 897 pokemons e randomizar eles adicionando + 1 
    sortPokemon(){
        const idPokemon = Math.floor((Math.random() * 897) + 1)
    
        return idPokemon
    
    }

    async getPokemon(){

        // const quantidade para pegar o valor do prompt
        const theAmount = prompt('Coloque um valor')
        // const com o total dos pokemons na tela. Pegando a quantidade e multiplicando por 2 (2 pokedex)
        const totalPokemon = theAmount * 2
        const pokemonListId = []
            
        // estrutura de repetição, se total do pokemon por menor q 1 ele adiciona mais 1
        for(let i = 1 ; i <= totalPokemon; i++){
            // criação de variavel pokemonId que vai receber o metodo sortPokemon
            const pokemonId = this.sortPokemon()

            // pegando a varriavel de array vazio e adicionando o pokemonId
            pokemonListId.push(pokemonId)
        }

        // Estrutura de repetição, criando variavel 'id' e vai mostrar os valores q estão dentro do array
        for(const id of pokemonListId){
            // variavel response recebe o await que espera a função asincrona terminar e receber 
            // a api com axios e o id
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            // ele pega o estado listApi q é um array vazio e adiciona a variavel response com o data
            // q tras as informações da api
            this.state.listApi.push(response.data)
        }

        // Setando o setPokemonList para ser igual a ListApi
        this.setState({setPokemonList : this.state.listApi})

        // Variavel de mão um com array vazio
        const handOne = []

        // Mão dois igual a setPokemonList q dentro dele possui todo o api dos pokemons
        const handTwo = this.state.setPokemonList

        // Estrutura de repetição q compara o tamanho de cada mão, se mão2 for menor q mão1
        while (handOne.length < handTwo.length) {
            // cria variavel novoPokemon q randomiza o tamanho da mão2
            const newPokemon = Math.floor(Math.random() * handTwo.length);
            // varivel pokemon pega mão2 e usando splice(pega uma lista e adiciona 1 e remove os antigos
            // iniciando sempre do indice [0])
            const pokemon = handTwo.splice(newPokemon, 1)[0]
            
            // pegando o array vazio da mão1 e adicionando o pokemon
            handOne.push(pokemon);   
        }

        // variavel do state da soma1 sendo igual a mão1 para o reduce pegar a lista
        // reduce ele executa cada elemento do array porem nesse caso ele pega o exp do pokemon para somar
        const sum1 = handOne.reduce((exp, quantidade) =>
            exp + quantidade.base_experience, 0)

        const sum2 = handTwo.reduce((exp, quantidade) =>

            exp + quantidade.base_experience, 0)

            // Setando os estados 
            this.setState({maoUm : handOne , maoDois : handTwo, sumOne : sum1 , sumTwo : sum2})
            

    }


    // ele monta os componentes na tela
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