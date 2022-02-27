import React, { Component } from 'react';
import './App.css';
import Square from './Components/Square.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: Array(9).fill(null),
      flag: true,
      winnerName:"",
      array:[]
      // when flag is true - X will play, else O will play
    };
  }
  handleClick = (e) => {
    let val = e;
    let arr = this.state.array;
    let Winner = "";
    const sqaureList = this.state.list;
    if (sqaureList[e] === null && this.state.winnerName==="") {
      if (this.state.flag === true) {
        sqaureList[e] = "X";
        arr.push(val);
      } else {
        sqaureList[e] = "O";
        arr.push(val)
      }
    }
    const newFlag = !this.state.flag;
    this.setState({ list: sqaureList, flag: newFlag, array:arr});
    //console.log(this.state.list[e]);
    //console.log(arr);
      
      

//check winner
    
    const lines = [
      [0, 1, 2], // indexes of this.state.list array
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      //   console.log(a, b, c);
      const s = this.state.list;
      if (s[a] !== null && s[a] === s[b] && s[a] === s[c] && this.state.winnerName === "") {
        if (this.state.flag === true) {
          Winner = "X";
          
        } else {
          Winner = "O";
          
        }
      }
    }
    
    
    if(Winner==="X" || Winner === "O"){
      this.setState({winnerName:Winner });
      
    }
      
    
    
    // console.log(this.state.list);
    
    
  };

  renderSqaure = (x) => {
    return (
      <Square
        value={this.state.list[x]}
        changeAppState={() => this.handleClick(x)}
      />
    );
  };
  traceBackFn = () => {
    let res_arr = this.state.array;
    let len = res_arr.length
    let result = res_arr[len-1]
    let res = this.state.list;
    console.log(res);
    console.log(res_arr);
    res[result]=null;
    res_arr.splice((len-1),1);
    console.log(res_arr);
    console.log(res);
    const newFlag = !this.state.flag;
    this.setState({
      list:res,
      array:res_arr,
      winnerName:"",
      flag:newFlag,
    })

  }

  
  render() {
    //console.log(this.state.flag);
    return (
      <div className="App">
        <h1>Trace Back Tic-Tac-Toe</h1>
        <div>
        <div className="row">
          {this.renderSqaure(0)}
          {this.renderSqaure(1)}
          {this.renderSqaure(2)}
        </div>
        <div className="row">
          {this.renderSqaure(3)}
          {this.renderSqaure(4)}
          {this.renderSqaure(5)}
        </div>
        <div className="row">
          {this.renderSqaure(6)}
          {this.renderSqaure(7)}
          {this.renderSqaure(8)}
        </div>
        <div>winner is: {this.state.winnerName}</div>
        <button onClick={this.traceBackFn}>Trace Back</button>
        </div>
      </div>
    );
  }
}

export default App;
