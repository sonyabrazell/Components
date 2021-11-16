import React from 'react';
import './App.css'
import DisplayName from './DisplayName/DisplayName';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: 'Reggie',
            lastName: 'White'
         }
    }
    render() { 
        return ( 
            <div className="container-fluid">
                <DisplayName />
            </div>
         );
    }
}
 
export default App;

