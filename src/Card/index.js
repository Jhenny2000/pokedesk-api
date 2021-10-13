import { Component } from 'react';
import './style.css'

class Card extends Component { 
    // constructor(props){

    //     super(props)

    // }

    // componentDidMount(){
    //    this.setState({
    //        hand1: 'Mao ZzZzZZz'
    //    })
    // }

    render(){       
        
        // console.log('Card'+ this.props);
        return(

            <>
                        
                 <div className='card'>
                    <div className='namePoke'>
                        <h2>{this.props.pokemon?.name}</h2>
                    </div>  
                    <img className='imgPoke' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(this.props.pokemon?.id).padStart(3,'0')}.png`} alt='Pokemon'/>
                    <div className='info'>
                        <div className='type'>
                            <p>Type: {this.props.pokemon?.type}</p>
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