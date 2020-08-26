import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Ticket from './components/Ticket';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [hiddenCounter, setHiddenCounter] = useState(0);

  useEffect(() => {
    const onRender = async () => {
      const { data } = await axios.get(`/api/tickets?searchText=${searchText}`);
      const alterdTickets = data.map((ticket) => {
        ticket.hidden = false;
        ticket.class = 'ticket';
        return ticket;
      });
      setTickets(alterdTickets);
      setHiddenCounter(0);
    };
    onRender();
  }, [searchText]);

  const onChange = (e) => {
    setSearchText(e.target.value);
  };
  const restore = () => {
    setTickets(tickets.map((ticket) => {
      ticket.hidden = false;
      ticket.class = 'ticket';
      return ticket;
    }));
    setHiddenCounter(0);
  };

  return (
    <main>
      <NavBar
        onChange={onChange}
        hiddenCounter={hiddenCounter}
        restore={restore}
      />
      <div id="ticketViewer">
        {tickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            ticket={ticket}
            hiddenCounter={hiddenCounter}
            setHiddenCounter={setHiddenCounter}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
