const ConfirmActionDialog = ({ isOpen, onClose,action, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog">
      <div className="dialog-content">
        <h3>Confirm Action</h3>
        <p>Are you sure you want to {action} this ticket?</p>
        <div>
          <button className="cancel" onClick={onClose}>Cancel</button>
          <button onClick={onConfirm}>{action === 'approve' ? 'Approve' : 'Reject'}</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmActionDialog;