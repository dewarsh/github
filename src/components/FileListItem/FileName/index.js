import React from 'react';
import FolderIcon from '../../../assets/icons/folder_icon.svg';
import './style.css';

const FileName = props => {
    
    return (
        <div>
            <img src={FolderIcon} alt="thumbnail" className="thumbnail"/>
            <p style={{"display":"inline-block"}}>{props.name}</p>
        </div>    
    )
}

export default FileName;