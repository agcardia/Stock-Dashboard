import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';

function Menu({onClick,ticker}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" >
        Choose a Timeframe
      </Dropdown.Toggle>

      <Dropdown.Menu onClick={onClick}>
        <Dropdown.Item id = "1" >30 Days</Dropdown.Item>
        <Dropdown.Item id = "2" >60 Days</Dropdown.Item>
        <Dropdown.Item id = "3" >1 Year</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Menu;