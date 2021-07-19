import React from 'react'

class Announcement extends React.Component  {
    state = {
        opened: false
    }
    
    render(){
        if(this.state.opened){
            return (
                <div className="announcement opened">
                    <div className="close-announcement" onClick={ () => { this.setState({opened: false}) } }></div>
                    <h4>Announcement</h4>
                    <p>We have news!!</p>
                    <p>Lorem ipsum dolor sit amet, te duo quas scriptorem, ex duo dicam graecis. Imperdiet conceptam percipitur eu cum, sit at eirmod alterum ceteros. Aeterno democritum at eos, assum eligendi nec cu, eu quot mollis democritum vel. Mea cu civibus dolores. Mandamus iudicabit prodesset vim ne, sale disputationi no qui, mei porro error argumentum id. Quo partem aliquip pertinax at, illum honestatis ex mel.</p>
                </div>
            )
        }else{
            return (
                <div className="announcement">
                    <h4>Announcement</h4>
                    <p>Exciting news!! <a href="###" onClick={ () => { this.setState({opened : true}) } }>Click here to learn more</a></p>
                </div>
            )
        }
    }
}

export default Announcement
