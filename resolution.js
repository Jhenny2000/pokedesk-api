import './style.css'
import React, { useEffect, useState } from "react";
import Pokedex from '../Pokedex';
import axios from 'axios';

function Pokemon () {
    const [pokemonList, setPokemonList] = useState([]);
    const [hand1, setHand1] = useState([]);
    const [hand2, setHand2] = useState([]);
    
    function sortPokemonId() {
        const idPokemon = Math.floor((Math.random() * 897) + 1);
        return idPokemon;
    }
    async function getPokemon() {
        const quantidadePokemon = 5;
        const totalPokemon = quantidadePokemon * 2;
        const pokemonListId = [];
        const lista = []


        for(let i=1; i <= totalPokemon; i++){
            let pokemonId = sortPokemonId();
            /* while(pokemonListId.includes(pokemonId)){
                pokemonId = sortPokemonId();
            } */
            pokemonListId.push(pokemonId);
        }
        for(let id of pokemonListId){
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            lista.push(response.data)
        }
        setPokemonList(lista);
    }
    function separarPokemon() {
        const primeriaMao = [];
        const segundaMao = [...pokemonList];
        while(primeriaMao.length  < segundaMao.length ){
                const novoArray = Math.floor(Math.random() * segundaMao.length);
                //está adicionando  um novo pokemon e removendo um novo pokemon e voltando na posição 0
                const pokemon = segundaMao.splice(novoArray,1)[0]
                //adiciona um novo pokemon na variavel primeiraMao
                primeriaMao.push(pokemon)
        }
        setHand1(primeriaMao);
        setHand2(segundaMao);
    }
    useEffect(() => {
        getPokemon();
    }, []);
    useEffect(() => {
        if(pokemonList && pokemonList.length > 0) separarPokemon();
    }, [pokemonList])
         const lista = [
                {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
                {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
                {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
                {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
                {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
                {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
                {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
                {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
            ]
        // const [quantidade, setQuantidade] = useState([]);
        // const [featuredData, setFeaturedData] = useState(null)
        // cria um variavel primeiraMao
        // const primeriaMao = []
            // cria um variavel segundaMao
        // const segundaMao = [...lista]
       /*  const valor = prompt('digite um valor');
         console.log(valor) */
            // enquanto a variavel primeiraMao for menor que segundaMao
                /* pokemon.forEach(element => {
                    axios.get(`https://pokeapi.co/api/v2/pokemon/${element}`)
                    .then(response => (primeriaMao.push(response.data)))
                    .catch(() => { console.log('Erro ao recuperar os dados'); });  
                    const novoArray = Math.floor(Math.random() * element);
                    console.log(novoArray);
                }); */
            const totalPrimeiraMao = hand1.reduce((resultado,quantidade)=>{
                return  (resultado + quantidade.base_experience);
            },0);
            const totalSegundaMao = hand2.reduce((resultado,quantidade)=>{
                return  (resultado + quantidade.base_experience);
            },0);
            return(
                <>
                    <h1>Pokedex</h1>
                    <div>
                        <p className="titulo">{totalPrimeiraMao}</p>
                        {/* win- verifica se é true ou falso  */}
                        <Pokedex pokemons={hand1} win={totalPrimeiraMao > totalSegundaMao} />
                    </div>
                    <div>
                        <p className="titulo">{totalSegundaMao}</p>
                        <Pokedex pokemons={hand2} win={totalSegundaMao > totalPrimeiraMao} />
                    </div>
                </>
            );
        }
export default Pokemon;