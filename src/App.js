import React from "react";
import FileListItem from "./components/FileListItem";
import data from './data.json';
import "./App.css";

const App = () => {
  console.log(data)
  return (
      <table className="table">
        <tbody>
          {data.map((el,index) => <FileListItem key={index} data={el} />)}
        </tbody>
      </table>
  );
}

export default App;
