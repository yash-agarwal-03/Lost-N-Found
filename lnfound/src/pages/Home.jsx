import TicketForm from '../components/TicketForm';
import AdminControl from '../components/AdminControl';
import FoundItemsList from '../components/FoundItemsList';
import LinkButton from '../components/linkButton';
const Home = () => {
 
  const handleAddTicket = async (ticket) => {
    const id=Date.now();
    const newTicket = { _id: id, ...ticket };
    try{
      const response=await fetch("http://localhost:5000/lnf/addLostTicket", {
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(newTicket)
      }
      )
      console.log(response);
      alert(response.statusText==="OK"?`Ticket added successfully\nTicket ID : ${id}`:"Unsuccessful in adding ticket");

    }
    catch(err){
      alert("An error occurred while submitting\nPlease try again later");
      console.error("Error in adding lost ticket:", err);
    }
  };

  return (
    <div>
      <section>
        <h2>Lost & Found System</h2>
        <p>Report lost items and view found items.</p>
      </section>
      <section>
        <h2>Raise a Lost Item Ticket</h2>
        <TicketForm onAddTicket={handleAddTicket} />
      </section>
      <AdminControl />
      <LinkButton linkto="/lost-items-requests" value="View Lost Items Tickets"/>
      <FoundItemsList/>
      
    </div>
  );
};

export default Home;