
import React, {Component} from 'react';
import './App.css';
import NamesList from './components/NamesList/NamesList';
import DisplayName from './components/DisplayName/DisplayName';
import AlertUser from './components/AlertUser/AlertUser';

let name = ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        name: ''
     }

  handleSubmit = (event) => {
    event.preventDefault();
    alert('devcodecamp')
    };
  }

  render() { 
    return ( 
      <div className="App">
      <DisplayName />
      <NamesList name = {name}/>
      <AlertUser />
     </div>
     );
  }
}

export default App;
