import React,{Component} from 'react';
import {CardList,SearchBox,Scroll,} from '../Components';
import './App.css';
import 'tachyons';

class App extends Component{
  state = {
     robots : [],
     searchfield: ''

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
        <Scroll>
          <CardList  robots={filterrobots}/>
        </Scroll>
      </div>
      )
  }
}
 
  


export default App;
