const express = require('express');

const app = express();
const fs = require('fs').promises;

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static("../client/build"));

app.get('/api/tickets', async (req, res) => {
  const data = await fs.readFile('./data.json');
  const tickets = JSON.parse(data);
  const reg = new RegExp(req.query.searchText, 'i');
  const filterdTickets = tickets.filter((ticket) => reg.test(ticket.title));
  res.send(filterdTickets);
});

app.post('/api/tickets/:ticketId/done', async (req, res) => {
  const data = await fs.readFile('./data.json');
  const tickets = JSON.parse(data);
  const index = tickets.findIndex((ticket) => ticket.id === req.params.ticketId);
  tickets[index].done = true;
  fs.writeFile('./data.json', JSON.stringify(tickets));
  res.send(tickets);
});

app.post('/api/tickets/:ticketId/undone', async (req, res) => {
  const data = await fs.readFile('./data.json');
  const tickets = JSON.parse(data);
  const index = tickets.findIndex((ticket) => ticket.id === req.params.ticketId);
  tickets[index].done = false;
  fs.writeFile('./data.json', JSON.stringify(tickets));
  res.send(tickets);
});

module.exports = app;
