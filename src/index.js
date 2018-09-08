import React from "react";
import ReactDOM from "react-dom";
import Items from "./items.jsx";
import Row from "./row.jsx";
import "./styles.css";
const properties = [
  {
    container: true,
    item: false,
    key: "display",
    value: ["block", "inline-block", "grid"]
  },
  {
    container: true,
    item: false,
    key: "gridTemplateColumns",
    value: ["auto", "50px 50px 50px", "auto auto", "auto auto auto"]
  },
  {
    container: true,
    item: false,
    key: "justifyContent",
    value: [
      "space-evenly",
      "space-around",
      "space-between",
      "center",
      "start",
      "end"
    ]
  },
  {
    container: true,
    item: false,
    key: "alignContent",
    value: [
      "space-evenly",
      "space-around",
      "space-between",
      "center",
      "start",
      "end"
    ]
  },
  {
    container: false,
    item: true,
    key: "gridColumnStart",
    value: ["1", "2", "3"]
  },
  {
    container: false,
    item: true,
    key: "gridColumnEnd",
    value: ["1", "2", "3"]
  },
  {
    container: false,
    item: true,
    key: "gridRowStart",
    value: ["1", "2", "3"]
  },
  {
    container: false,
    item: true,
    key: "gridRowEnd",
    value: ["1", "2", "3"]
  }
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      containerStyle: null,
      itemStyle: null
    };
  }
  handlePropertyChange = (container, item, key) => value => {
    if (container) {
      this.setState({
        ...this.state,
        containerStyle: {
          ...this.state.containerStyle,
          [key]: value
        }
      });
    } else {
      this.setState({
        ...this.state,
        itemStyle: {
          ...this.state.itemStyle,
          [key]: value
        }
      });
    }
  };
  render() {
    const { containerStyle, itemStyle } = this.state;
    return (
      <div className="App">
        <Items containerStyle={containerStyle} itemStyle={itemStyle} />
        {properties.map(item => {
          return (
            <Row
              item={item}
              handlePropertyChange={this.handlePropertyChange(
                item.container,
                item.item,
                item.key
              )}
            />
          );
        })}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
