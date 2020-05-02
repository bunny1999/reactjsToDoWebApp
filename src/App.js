import React from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      newString:"",
      list:[]
    }
  }

  addTodo(value){
    if(value!=""){
      const newtodo={
        id:Date.now(),
        value:value,
        isActive:false,
      }
      const list=[...this.state.list];
      list.push(newtodo);
      this.setState({
        list,
        newString:"",
      })
    }
  }

  removeTodo(id){
    const list=[...this.state.list]
    //will grab all item other then this 
    const newList=list.filter(item=>item.id !== id)
    this.setState({
      list:newList,
    })
  }

  updateInput(value){
    this.setState({newString:value})
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo"/>
          <h1>ToDo App</h1>
          <div>
              <input 
                type="text" 
                required 
                className="input-group"
                value={this.state.newString}
                onChange={e=>this.updateInput(e.target.value)}
              />
              <button className="btn btn-primary"
                onClick={()=>this.addTodo(this.state.newString)}              
              >Add Todo</button>
          </div>
          <div className="list">
            <ul>
                {this.state.list.map(item=>{
                  return(
                    <li key={item.id}>
                      <div className="row">
                        <div className="col-2">
                          <input type="checkbox"
                            checked={item.isActive}
                          />
                        </div>
                        <div className="col-6">
                          {item.value}  
                        </div>
                        <div className="col-4">
                          <button 
                            onClick={()=>this.removeTodo(item.id)}
                            className="btn btn-danger">Remove</button>
                        </div>
                      </div>                
                    </li>      
                  );
                })}
              <li>
                <div className="row">
                  <div className="col-2">
                    <input type="checkbox"/>
                  </div>
                  <div className="col-6">
                    Write Code  
                  </div>
                  <div className="col-4">
                    <button className="btn btn-danger">Remove</button>
                  </div>
                </div>                
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
