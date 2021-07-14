import React from 'react'
import Card from './Card.js'
import jsonData from "./CardsData.json"

class CardGrid extends React.Component{
    render(){
        /*jsonData.forEach(element => {
            console.log(element);
        });*/
        return(
            <>
                <div className="card-grid">
                    <h2>{ this.props.tittle }</h2>
                    <div className="card-grid-container">
                    {
                        jsonData.map((card) => {
                            if(card.user){
                                return <Card 
                                    color="Blue" 
                                    date={ card.date }
                                    name={ card.name }
                                    description={ card.description } 
                                    />
                            }
                            return '';
                        })
                    }
                    </div>
                </div>
            </>
        )
    }
}
export default CardGrid