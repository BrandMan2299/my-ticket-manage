import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Ticket from './components/Ticket'
import NavBar from './components/NavBar';
import './App.css';
import axios from 'axios';

function App() {

  const [tickets, setTickets] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const onRender = async () => {
      const { data } = await axios.get(`/api/tickets?searchText=${searchText}`);
      setTickets(data);
    }
    onRender();
  }, [searchText])

  const onChange = (e) => {
    setSearchText(e.target.value);
  }

  return (
    <main>
      <NavBar onChange={onChange} />
      {tickets.map((ticket, index) => {
        return <Ticket key={index} ticket={ticket} />
      })}
    </main>
  );
}

export default App;
