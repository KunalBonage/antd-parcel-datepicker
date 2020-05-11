import React from "react";
import ReactDOM from "react-dom";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
const { RangePicker } = DatePicker;

class Container extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>{this.props.name}</h1>
          <RangePicker />
        </div>
      </div>
    );
  }
}

let App = document.getElementById("app");

ReactDOM.render(<Container name="DatePicker" />, App);
