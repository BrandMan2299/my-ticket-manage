import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Ticket from './components/Ticket'
import NavBar from './components/NavBar';
import './App.css';
import axios from 'axios';

function App() {

  const [tickets, setTickets] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [hiddenCounter, setHiddenCounter] = useState(0);

  const onRender = async () => {
    const { data } = await axios.get(`/api/tickets?searchText=${searchText}`);
    const alterdTickets = data.map(ticket => {
      ticket.hidden = false;
      ticket.class = "ticket";
      return ticket;
    })
    setTickets(alterdTickets);
    setHiddenCounter(0);
  }

  useEffect(() => {
    onRender();
  }, [searchText])

  const onChange = (e) => {
    setSearchText(e.target.value);
  }
  const restore = () => {
    setTickets(tickets.map(ticket => {
      ticket.hidden = false;
      ticket.class = "ticket";
      return ticket;
    }));
    setHiddenCounter(0);
  }

  return (
    <main>
      <NavBar
        onChange={onChange}
        hiddenCounter={hiddenCounter}
        restore={restore}
      />
      {tickets.map((ticket, index) => {
        return (
          <Ticket
            key={index}
            ticket={ticket}
            hiddenCounter={hiddenCounter}
            setHiddenCounter={setHiddenCounter}
          />
        )
      })}
    </main>
  );
}

export default App;
