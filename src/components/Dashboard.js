import React from 'react'
import CardGrid from './cards/CardGrid';
//import Login from './Login'

class Dashboard extends React.Component {

    state = {
        hasLoggedIn: false
    };

    toggleLogin = () => {
        this.setState({hasLoggedIn: true});
    }

    render(){

        //if (this.state.hasLoggedIn) {
            return (
                <>
                    <div className="m20">
                        <CardGrid  tittle="Upcoming Events"/>
                    </div>
                </>
            )
        /*}
        else {
            return (
                <Login login={ this.toggleLogin } />
            )
        }*/
    }
}

export default Dashboard
