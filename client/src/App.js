import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Ticket from './components/Ticket'
import './App.css';
import axios from 'axios';

function App() {

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const onMount = async () => {
      const { data } = await axios.get("/api/tickets");
      setTickets(data);
    }
    onMount();
  }, [])

  return (
    <main>
      {tickets.map((ticket, index) => {
        return <Ticket key={index} ticket={ticket} />
      })}
    </main>
  );
}

export default App;
