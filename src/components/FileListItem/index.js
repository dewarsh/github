import React from "react";
import FileName from "./FileName";
import CommitMessage from "./CommitMessage";
import Time from "./Time";
import './style.css';


const FileListItem = () => {
  return (
    <tr>
      <FileName name="build"/>
      <CommitMessage message="Close #1687, Replace es3ify with Babel Es3 transforms (#1688)"/>
      <Time duration="2 months ago"/>
    </tr>
  );
};

export default FileListItem;
