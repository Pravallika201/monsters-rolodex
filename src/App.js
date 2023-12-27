//flow of react: first, constructor method runs at any cost.
//second, render method where intial rendering of UI happens.
//third, componentdidmount method runs..in this lifecycle method,
//we have to fetch API and setState calls when state changes.
import {Component} from 'react'
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state ={
      monsters: [],
      searchField: ' '
    }
    
  }

componentDidMount() {
  
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response)=>response.json())
  .then((users)=>{
    this.setState(()=>{
      return {monsters: users}
    },()=>{
      console.log(this.state)
    })
  })
}

   onSearchInput = (event)=>{
    console.log(event.target.value)
    const searchField = event.target.value.toLocaleLowerCase();
    

    this.setState(()=>{
      return {searchField}
    })
  }


  render() {
    const {monsters, searchField} = this.state;
    const {onSearchInput} = this;
    const filteredmonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
     })
    
    return (
      <div className="App">
         <h1 className='app-title'>Monster Rolodex</h1>
         
        <SearchBox onSearchHandler={onSearchInput} placeHolder="search-monsters"/>
        <CardList monsters={filteredmonsters}/>
      </div>
    );
  }
}

export default App;
