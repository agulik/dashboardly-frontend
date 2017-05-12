import React from 'react';
import './AddButton.css';

export default (props) => (
  <div className="add-button" onClick={() => props._handleAddButtonClick()}>
    <i className="fa fa-plus fa-2x"/>
  </div>
);
