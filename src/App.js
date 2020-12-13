// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {CardList} from './components/card-list/card-list.component'

import {SearchBox} from "./components/search-box/searchbox.component"

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters : [],
      searchField :''

    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    // .then(users =>console.log(users))
    .then(users =>this.setState({monsters:users}))

  }

  handleChange = (e) => {
    this.setState({searchField:e.target.value});
  }

  render(){
    const {monsters,searchField}=this.state;
    const filterdMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    return( 
      <div className='App'>
        <h1>Hello Kitties</h1>
          <SearchBox 
            placeholder='search monsters here'
            handleChange = {this.handleChange}
          />

          <CardList monsters={filterdMonster} /> 
       
     
    </div>
    )
  }
}

export default App;
