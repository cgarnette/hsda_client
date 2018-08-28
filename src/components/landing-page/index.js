import React , {Component} from 'react'

import LoginForm from '../forms/login-form';

export default class LandingPage extends Component{
    constructor(props){
        super(props)
        this.state = {}
		}
		
		componentDidMount() {

		}

    onSubmit = event => {
        return;
    }

    render() {
        return(
            <div>
							<p>Landing Page</p>
							<LoginForm/>
						</div>
        );
    }
}
