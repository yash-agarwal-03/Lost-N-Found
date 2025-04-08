import React, { useState } from 'react';
import EditTicketDialog from './EditTicketDialog';
import ConfirmActionDialog from './ConfirmActionDialog';

const TicketList = ({ tickets, onEditTicket, onApproveTicket, onDeclineTicket }) => {
  const [editingTicketId, setEditingTicketId] = useState(null);
  const [editingTicket, setEditingTicket] = useState({ description: '', location: '' });
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [confirmTicketId, setConfirmTicketId] = useState(null);

  const handleEditTicket = (id) => {
    const ticket = tickets.find(ticket => ticket.id === id);
    if (ticket) {
      setEditingTicketId(id);
      setEditingTicket({ description: ticket.description, location: ticket.location });
      setIsEditDialogOpen(true);
    }
  };

  const handleUpdateTicket = () => {
    if (editingTicketId !== null) {
      onEditTicket(editingTicketId, editingTicket);
      setEditingTicketId(null);
      setIsEditDialogOpen(false);
    }
  };

  const handleConfirmAction = (action, id) => {
    setConfirmAction(action);
    setConfirmTicketId(id);
    setIsConfirmDialogOpen(true);
  };

  const handleApproveOrDecline = () => {
    if (confirmAction && confirmTicketId !== null) {
      if (confirmAction === 'approve') {
        onApproveTicket(confirmTicketId);
      } else if (confirmAction === 'decline') {
        onDeclineTicket(confirmTicketId);
      }
      setConfirmAction(null);
      setConfirmTicketId(null);
      setIsConfirmDialogOpen(false);
    }
  };

  return (
    <>
      <div>
        {tickets.map(ticket => (
          <div key={ticket.id} className="card">
            <h3>Ticket #{ticket.id}</h3>
            <p>Status: {ticket.status}</p>
            <p>Description: {ticket.description}</p>
            <p>Location: {ticket.location}</p>
            <div>
              {ticket.status === 'pending' && (
                <>
                  <button onClick={() => handleEditTicket(ticket.id)}>Edit</button>
                  <button onClick={() => handleConfirmAction('approve', ticket.id)}>Approve</button>
                  <button onClick={() => handleConfirmAction('decline', ticket.id)}>Decline</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <EditTicketDialog
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        ticket={editingTicket}
        onUpdateTicket={handleUpdateTicket}
        setEditingTicket={setEditingTicket}
      />
      <ConfirmActionDialog
        isOpen={isConfirmDialogOpen}
        onClose={() => setIsConfirmDialogOpen(false)}
        action={confirmAction}
        onConfirm={handleApproveOrDecline}
      />
    </>
  );
};

export default TicketList;