import React from 'react'

class Card extends React.Component{
    render(){
        return(
            <>
                <div className={ "card " + this.props.color }>
                    <h3>{ this.props.date }</h3>
                    <h4>{ this.props.name }</h4>
                    <p>{ this.props.description }</p>
                </div>
            </>
        )
    }
}
export default Card