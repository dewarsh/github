import React from "react";
import FolderIcon from "../../../assets/icons/folder_icon.svg";
import FileIcon from "../../../assets/icons/file_icon.svg";
import "./style.css";

const FileName = ({ name, type }) => {
  return (
    <td className="left">
      <img
        src={type === "folder" ? FolderIcon : FileIcon}
        alt="thumbnail"
        className="thumbnail"
      />
      <p className="file">{name}</p>
    </td>
  );
};

export default FileName;
