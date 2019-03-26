import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const AddressBook = (props) => {
  const spanstyle = {cursor: 'pointer'};
  let addresses = [...props.addresses];
  let listItems = addresses.map((item) =>
    <ListGroup.Item key={item.key}>
      <Card className="bg-light border rounded">
        <span key={item.key} 
              className="text-right" 
              style={spanstyle}
              onClick={(e) => props.delete(e, item.key)}>{'\uD83D\uDDD1'}</span>
        <Card.Body className="text-left">
          <p className="text-right">{item.key}</p>
          <p>{item.firstName}</p>
          <p>{item.lastName}</p>
          <p>{item.birthday}</p>
          <p>{item.telephone}</p>
        </Card.Body>
      </Card>
    </ListGroup.Item>
  )

  return listItems;
};

export default AddressBook;