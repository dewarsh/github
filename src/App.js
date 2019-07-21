import React from "react";
import FileListItem from "./components/FileListItem";
import Data from './data.json';
import "./App.css";

function App() {
  console.log(Data)
  return (
    <div className="App">
      <table className="table">
        <tbody>
          <FileListItem />
        </tbody>
      </table>
    </div>
  );
}

export default App;
