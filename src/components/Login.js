import React from 'react'

class Login extends React.Component {
    
    state = { 
        hasAccount: true,
        hasLoggedIn: false
    }; 

    toggleAccount = () => {
        this.setState({hasAccount: false});
    }

    render(){
        const hasAccount = this.state.hasAccount;
        let title, form, buttons;

        if(hasAccount){
            title = "WELCOME";
            form = <LoginForm/>;
            buttons = <>
                <button className="filled" onClick={ this.props.login }>LOGIN</button>
                <br/>
                <button onClick={ this.toggleAccount }>SIGNUP</button>
            </>;
        }else{
            title = "SIGN UP";
            form = <SignUpForm />;
            buttons = <button onClick={ this.props.login }>SIGNUP</button>;
        }

        return (
            <div className="Blue content">
                <h1 className="mt0">{ title }</h1>
                <div className="form">
                    { form }
                    { buttons }
                </div>
            </div>
        )
    }
}

export default Login

function LoginForm(){
    return(
        <>
            <input
                type="text"
                placeholder="Email address"
            />
            <br/>
            <input
                type="password"
                placeholder="Password"
            />
            <br/>
        </>
    );
}

function SignUpForm(){
    return(
        <>
            <input
                type="text"
                placeholder="First Name" 
            />
            <br/>
            <input
                type="text"
                placeholder="Last Name" 
            />
            <br/>
            <input
                type="text"
                placeholder="Email address"
            />
            <br/>
            <input
                type="password"
                placeholder="Password"
            />
            <br/>
            <input
                type="password"
                placeholder="Confirm Password" 
            />
            <br/>
        </>
    );
}