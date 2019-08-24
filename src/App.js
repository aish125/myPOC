import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state={array: '',
      insertionSort: ''}
  }

  applyBubbleSort = () => {
    var arr = [2,45, 546, 66];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          let tmp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = tmp;
        }
      }
      arr = arr.join(', ');
      this.setState({array: arr});
    return arr;
  };

  insertionSort = (array) => {
    var array = [223, 45, 564, 3, 5];
    for(var i = 0; i < array.length; i++) {
      var temp = array[i];
      var j = i - 1;
      while (j >= 0 && array[j] > temp) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = temp;
    }
    console.log("Insertion", array);
    array = array.join (', ');
    this.setState({
      insertionSort: array
    });
    return array;
  }
  render() {
    return (
        <div className="App">
          <div className="b-sort">
            <h2>
              BUBBLE SORT
            </h2>
            <button onClick={this.applyBubbleSort}>Show BubbleSOrt</button>
            <h4>{this.state.array}</h4>
          </div>
          <div className="i-sort">
            <h2>
              INSERTION SORT
            </h2>
            <button onClick={this.insertionSort}>Show InsertionSort</button>
            <h4>{this.state.insertionSort}</h4>
          </div>
        </div>
    );
  }
}

export default App;
