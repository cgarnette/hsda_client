import React from 'react'


export default class MainPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    onSubmit = event => {
        return;
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

