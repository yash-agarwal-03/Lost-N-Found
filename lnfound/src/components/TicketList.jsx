import React, { useState } from 'react';
import EditTicketDialog from './EditTicketDialog';
import ConfirmActionDialog from './ConfirmActionDialog';

import '../styles/lists.css';

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
      <div className="lnf-list-container">
        {tickets.map(ticket => (
          <div key={ticket.id} className="lnf-list-card">
            <div className="lnf-list-title">Ticket #{ticket.id}</div>
            <div className={`lnf-list-status ${ticket.status}`}>{ticket.status}</div>
            <div>
              <div className="lnf-list-label">Description</div>
              <div className="lnf-list-value">{ticket.description}</div>
            </div>
            <div>
              <div className="lnf-list-label">Location</div>
              <div className="lnf-list-value">{ticket.location}</div>
            </div>
            {ticket.status === 'pending' && (
              <div className="lnf-list-actions">
                <button className="lnf-list-button edit" onClick={() => handleEditTicket(ticket.id)}>Edit</button>
                <button className="lnf-list-button approve" onClick={() => handleConfirmAction('approve', ticket.id)}>Approve</button>
                <button className="lnf-list-button delete" onClick={() => handleConfirmAction('decline', ticket.id)}>Decline</button>
              </div>
            )}
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