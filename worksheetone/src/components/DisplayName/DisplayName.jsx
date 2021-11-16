import React, {Component} from 'react';

class DisplayName extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: 'Reggie',
            lastName: 'White'
         }
    }

    render() { 
        return ( 
            <div>
                <h1>{this.state.firstName + " " + this.state.lastName}</h1>
            </div>
        );
    }
}
 
export default DisplayName;