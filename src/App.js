import { Component } from 'react';

import styles from './App.module.css';
import Circle from './components/Circle/Circle';
import Controls from './components/Controls/Controls';

class App extends Component {
  state = {
    circles: [],
    colors: [
      '#01BEFE',
      '#FFDD00',
      '#FF7D00',
      '#FF006D',
      '#ADFF02',
      '#8F00FF',
    ]
  }

  handleAddCircle = color => {
    const newCirclesArray = [...this.state.circles];
    newCirclesArray.push({ color: color });

    const newActiveColorIndex = this.state.activeColorIndex + 1;

    this.setState({
      circles: newCirclesArray,
      activeColorIndex: newActiveColorIndex
    })
  }

  render() {
    let circles = null

    if (this.state.circles) {
      circles = this.state.circles.map((circle, index) => <Circle key={index} color={circle.color} />)
    }

    const activeColor = this.state.colors[
      Math.floor(Math.random() * this.state.colors.length)
    ];

    return (
      <div className={styles.App}>
        <Controls color={activeColor} clicked={() => this.handleAddCircle(activeColor)} />
        {circles}
      </div>
    );
  }
}

export default App;
