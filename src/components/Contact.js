import { FaTimes } from 'react-icons/fa'
const Contact = ({contact, onDelete}) => {
    return (
        <div className="contact">
            <h3>{contact.nom} {contact.prenom} {contact.email} <FaTimes
             style={{color: 'red', cursor:'pointer'}}
             onClick={() => onDelete(contact.id)}
             />
             </h3>
            
        </div>
    )
}

export default Contact
