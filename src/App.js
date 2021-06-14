import {useState, useEffect} from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import About from './components/About'
import AddContact from './components/AddContact'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [contacts, setContacts] = useState([])
  

   useEffect(() => {
    const getContacts = async () => {
     const contactsFromServer = await fetchContacts()
     setContacts(contactsFromServer)
    }
    getContacts()
     
   })

   const fetchContacts = async () => {
     const res = await fetch("http://localhost:8080/contacts", contacts)
     const data = await res.json()
     return data
   }



   const addContact = async (contact) => {
     const res = await fetch('http://localhost:8080/contacts', {
       method: 'POST',
       headers:{
         'Content-type' : 'application/json'
       },
       body: JSON.stringify(contact)
     })
     const data = await res.json()
     setContacts({...contacts, data})
   }

   
  
   const deleteContact = async (id) => {
     
     await fetch(`http://localhost:8080/contacts/${id}`,{
       method:'DELETE'
     })
     setContacts(contacts.filter((contact) => contact.id !== id))
   }

  return (
    <Router>
    <div className="container">
      <Header
       onAdd={() => setShowAddTask(!showAddTask)}
       showAdd={showAddTask}
      />

      
<Route 
     path="/" 
     exact
     render={(props)=> (
        <>
           { showAddTask  && <AddContact onAdd={addContact}  />}
     {
     contacts.length > 0  ? (

     <Contacts contacts={contacts} 
     onDelete={deleteContact}
     
    
     
     /> 
     ):
     ( 
       
      'No Tasks To Show'
     
     )}
        </>

     )}  />

     <Route path='/about' component={About} />
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
