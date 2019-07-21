import React from "react";
import FileName from "./FileName";
import CommitMessage from "./CommitMessage";
import Time from "./Time";
import './style.css';


const FileListItem = ({data}) => {
  return (
    <tr>
      <FileName name={data.name} type={data.type}/>
      <CommitMessage message={data.message}/>
      <Time time={data.time}/>
    </tr>
  );
};

export default FileListItem;
