import React from 'react';
import FolderIcon from '../../../assets/icons/folder_icon.svg';
import './style.css';

const FileName = props => {
    
    return (
        <td className="left">
            <img src={FolderIcon} alt="thumbnail" className="thumbnail"/>
            <p className="file">{props.name}</p>
        </td>    
    )
}

export default FileName;