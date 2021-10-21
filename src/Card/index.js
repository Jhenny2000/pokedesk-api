import { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import './style.css'

class Card extends Component { 
    constructor(props){

        super(props);

        this.state = {

            isFlipped: false
        }

       this.modalClick = this.modalClick.bind(this);

    }

    modalClick(){
        
        this.setState({ isFlipped: !this.state.isFlipped})
    }

    abilities(){
        return this.props.pokemon.abilities.map((item) => {
            return item.ability.name
        })
    }

    types(){

        {
            return this.props.pokemon.types.map((item) => {
                return item.type.name
            })
        }
    }

    // test(){
    
        // const typesList = this.props.pokemon.types;
        // typesList.filter(types => types[0])
        // console.log(typesList);
    // }
    
        
    componentDidMount(){
        this.types();
    }

    render(){  
        
        // const classes = this.state.open ? 'basket' : 'basket hide'
        
        return(
        
            <>
                 
                 <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection='horizontal'>
                    <div className='card' onClick={this.modalClick}>
                        <div className='namePoke'>
                            <h2>{this.props.pokemon?.name}</h2>
                        </div>  
                        <img className='imgPoke' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(this.props.pokemon?.id).padStart(3,'0')}.png`} alt='Pokemon'/>
                        <div className='info'>
                            <div className='type'>
                                <p className='type1'>Type :  {this.types().join(', ')}</p>
                            </div>
                            <div className='exp'>
                                <p>EXP: {this.props.pokemon?.base_experience}</p>
                            </div>
                        </div>
                    </div>
                    <div className='card'  onClick={this.modalClick}>
                        <div className='namePoke'>
                           <h2>{this.props.pokemon?.name}</h2>
                        </div>
                        <div className='detalhes'>
                            <div className='type'>
                                <p>Abilities: {this.abilities().join(', ')}</p>
                            </div>
                            <div className='type'>
                                <p>Height: {this.props.pokemon?.height}m</p>
                            </div>
                            <div className='type'>
                                <p>Weight: {this.props.pokemon?.weight}kg</p>
                            </div>
                            <div className='type'>
                                <p>Type: {this.types().join(', ')}</p>
                            </div>
                            <div className='type'>
                                <p>EXP: {this.props.pokemon?.base_experience}</p>
                            </div>
                        </div>
                    </div>
                 </ReactCardFlip>
                 
                 
                 {/* <div className='card' onClick={this.modalClick}>
                    {this.state.isFlipped ? 
                    
                    <>
                        <div className='detalhes'>
                            <diiv className='namePoke'>
                               <h2>{this.props.pokemon?.name}</h2>
                            </diiv>
                            <div className='type'>
                                <p>Abilities: {this.abilities().join(', ')}</p>
                            </div>
                            <div className='type'>
                                <p>Height: {this.props.pokemon?.height}</p>
                            </div>
                            <div className='type'>
                                <p>Weight: {this.props.pokemon?.weight}</p>
                            </div>
                            <div className='type'>
                                <p>Type: {this.types().join(', ')}</p>
                            </div>
                            <div className='type'>
                                <p>EXP: {this.props.pokemon?.base_experience}</p>
                            </div>
                        </div>
                    </>
                    : 
                    <>
                        <div className='namePoke' >
                            <h2>{this.props.pokemon?.name}</h2>
                        </div>  
                        <img className='imgPoke' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(this.props.pokemon?.id).padStart(3,'0')}.png`} alt='Pokemon'/>
                        <div className='info'>
                            <div className='type'>
                                <p className='type1'>Type :  {this.types().join(', ')}</p>
                            </div>
                            <div className='exp'>
                                <p>EXP: {this.props.pokemon?.base_experience}</p>
                            </div>
                        </div>
                    
                    </>
                    }
                    
                </div> */}
                       
            </>
        )
    }
}

export default Card;