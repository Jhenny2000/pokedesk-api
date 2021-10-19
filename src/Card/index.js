import { Component } from 'react';
import './style.css'

class Card extends Component { 
    constructor(props){

        super(props);

        this.state = {

            typesList : []
        }

    }

    types(){

        {
            return this.props.pokemon.types.map((item) => {
                return item.type.name
            })
        }
    }

   


    test(){
    
        const typesList = this.props.pokemon.types;
        typesList.filter(types => types[0])
        console.log(typesList);
    }
    
        
    componentDidMount(){
        this.test()
    }

    render(){       
        return(
        
            <>
                 <div className='card'>
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
                       
            </>
        )
    }
}

export default Card;