import {useState} from 'react'

const AddContact = ({onAdd,}) => {

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    

    const onSubmit = (e) => {
        e.preventDefault()

        if(!nom) {
            alert('Veuillez rentrer un nom')
            return
        }
        
        onAdd({nom, prenom, email})
        setNom('')
        setPrenom('')
        setEmail('')
       
       
    }


    return (
       <form className='add-form' onSubmit={onSubmit}>
           <div className="form-control">
               <label>Nom</label>
               <input 
               type="text" 
               placeholder='Nom'
               value={nom}
               onChange={(e) => setNom(e.target.value)}
               />
           </div>

           <div className="form-control">
               <label>Prenom</label>
               <input 
               type="text" 
               placeholder='Prenom'
               value={prenom}
               onChange={(e) => setPrenom(e.target.value)}
               />
           </div>
           
           <div className="form-control">
               <label>Email</label>
               <input 
               type="text" 
               placeholder='Email'
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               />
           </div>
        
           <input type="submit" value="Save Contact" className="btn btn-block" />
       </form>
    )
}

export default AddContact
