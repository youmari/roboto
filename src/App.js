import React,{Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import 'tachyons';
import './App.css';

class App extends Component{
constructor(){
  super()
  this.state = {
     robots : [],
     searchfield: ''

    }

}
  componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json())
        .then(users=> this.setState({robots: users}))
        
    }


  onsearchchange =(event)=> {
    this.setState({searchfield: event.target.value})


  }
    
  render(){
    const filterrobots = this.state.robots.filter(users => {
      return users.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });

    return(
      <div className="tc">
        <h1 className='f1'>ROBOFRIEND</h1>
        <SearchBox searchchange={this.onsearchchange} />
        <CardList  robots={filterrobots}/>
      </div>
      )
  }
}
 
  


export default App;
