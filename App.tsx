import * as React from 'react';
import './style.css';
import { useState } from 'react';

const App: React.FC = () => {
  interface myObject {
    Type: string;
    Quantity: number;
    Price: number;
  }

  const [quantity, setQuantity] = useState<number>(0);
  const [ticket, setTicket] = useState<string>('');
  const [orders, setOrders] = useState<myObject[]>([]);
  const [totals, setTotals] = useState<number[]>([]);
  const quantityAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    setQuantity(quantity + 1);
  };

  const quantitySubtract = (event: React.MouseEvent<HTMLButtonElement>) => {
    setQuantity(quantity - 1);
  };

  const ticketPress = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTicket('Test 2');
  };

  const addOrder = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOrders([...orders, { Type: ticket, Quantity: quantity, Price: 1000 }]);
    setTotals([...totals, quantity * 1000]);
  };

  const deleteOrder = (index: number) => {
    const array = [...orders];
    array.splice(index, 1);
    setOrders(array);
    const totalsarray = [...totals];
    totalsarray.splice(index, 1);
    setTotals(totalsarray);
  };

  console.log(totals);

  return (
    <div>
      <p>{quantity}</p>
      <p>{ticket}</p>
      <button onClick={quantityAdd}>+</button>
      <button onClick={quantitySubtract}>-</button>
      <button onClick={ticketPress}>Add Ticket</button>
      <button onClick={addOrder}> Add Order</button>
      <p> Cart items : {orders.length}</p>
      {orders.map((object, index) => (
        <div key={index}>
          <p>{object.Type}</p>
          <p>{object.Quantity}</p>
          <p>{object.Price * object.Quantity}</p>
          <button
            onClick={() => {
              deleteOrder(index);
            }}
          >
            Delete
          </button>
        </div>
      ))}
      <p></p>
    </div>
  );
};

export default App;
