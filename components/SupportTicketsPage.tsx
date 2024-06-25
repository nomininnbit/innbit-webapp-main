import React from 'react'

const SupportTicketsPage = () => {
  const tickets = [
    { id: 1, user: 'John Doe', status: 'Open', issue: 'Login problem' },
    { id: 2, user: 'Jane Smith', status: 'Closed', issue: 'Payment not processed' },
    { id: 3, user: 'Mike Brown', status: 'In Progress', issue: 'Page not loading' },
  ]

  return (
    <div>
      <h1>Support Tickets</h1>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            <h2>{ticket.user}</h2>
            <p>Status: {ticket.status}</p>
            <p>Issue: {ticket.issue}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SupportTicketsPage