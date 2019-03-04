import React, { Component } from 'react';
import './App.css';
import Message from './Message';

class App extends Component {

  //readonly state: State = initialState;

  componentWillMount() {
    // this runs before your component gets mounted to the dom
    //console.log('almost there');
  }

  componentDidMount() {
    // this after your component gets mounted to the dom
    //console.log('finally ... hello');
  }

  render() {
    //let firstValue: string = 'Johnson';
    //let age: number = 43;
    //let firstValue: boolean = true;
    //let secondValue = "Stevenson"; // inference
    //let firstValue: number[] = [2, 3, 4, 6];
    //let firstValue: Array<number> = [2, 3, 4, 6];
    //let stringArrayValues: Array<string> = ["Joe", "Rodney", "Mary"];
    
    // tuple 
    //let myTuple: [string, number] = ["Johnson", 43] ;

    // enum - when declaring enums the first letter has to be capitalized
    /*enum Codes {
      first = 1,
      second = 2
    };*/

    // any - this is used when you don't know what type you want to use
    // try to use this sparingly as you don't want your code to have many
    // of these or else youre just back to using plain old javascript!
    //let myName: any = true; 

    // void
    /*const warning = (): void => {
      console.log("Warning");
    }*/

    return (
      <div className="App">
        <header className="App-header">
          <Message /> 
        </header>
      </div>
    );
  }
}

export default App;
