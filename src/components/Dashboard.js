import React from 'react'
import CardGrid from './cards/CardGrid';
//import Login from './Login'

class Dashboard extends React.Component {

    state = {
        hasLoggedIn: false,
        mobileLayout: true
    };

    toggleLogin = () => {
        this.setState({hasLoggedIn: true});
    }

    componentDidMount(){
        window.addEventListener("resize", this.updateLayout);
    }

    updateLayout(){
        let size = window.innerWidth;
        if(size > 1140){
            this.setState({mobileLayout: false});
        }
    }
    render(){

        //if (this.state.hasLoggedIn) {
        if(this.state.mobileLayout){
            return (
                <>
                    <div className="m20">
                        <CardGrid  tittle="Upcoming Events"/>
                        <h2>Want more events?</h2>
                        <button>SCHEDULE NEW EVENT</button>
                    </div>
                </>
            )
        }
        /*}
        else {
            return (
                <Login login={ this.toggleLogin } />
            )
        }*/
    }
}

export default Dashboard
