import TicketForm from '../components/TicketForm';
import AdminControl from '../components/AdminControl';
import FoundItemsList from '../components/FoundItemsList';
const Home = () => {
 
  const handleAddTicket = (ticket) => {
    const newTicket = { _id: Date.now(), ...ticket };
    const response=fetch("http://localhost:5000/lnf/addLostTicket", {
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newTicket)
    }
    )
  };

  return (
    <div>
      <section>
        <h2>Lost & Found System</h2>
        <p>Report lost items and view found items.</p>
      </section>
      <AdminControl />
      <section>
        <h2>Raise a Lost Item Ticket</h2>
        <TicketForm onAddTicket={handleAddTicket} />
      </section>
      <FoundItemsList/>
      
    </div>
  );
};

export default Home;