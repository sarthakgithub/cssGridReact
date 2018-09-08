import React from "react";
import "./styles.css";

class Row extends React.Component {
  render() {
    const {
      item: { key, value },
      handlePropertyChange
    } = this.props;

    return (
      <div>
        <h4>{key}</h4>
        {value.map((item, index) => {
          return (
            <div>
              <input
                type="radio"
                name={key}
                id={`${key}_${item}`}
                value={item}
                onChange={e => handlePropertyChange(e.target.value)}
              />
              <label for={`${key}_${item}`}> {item}</label>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Row;
