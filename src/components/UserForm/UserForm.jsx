import { useState } from "react";


const UserForm = ({onSend}) => {

    const [fields, setFields] = useState({
        name:"",
        surname:"",
        phone:"",
        email:" "
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        onSend(fields).then(() => {
            setFields({
                name:"",
                surname:"",
                phone:"",
                email:""
            })
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input 
                    name="name"
                    type="text"
                    value={fields.name}
                    onChange={e => setFields(prevState => 
                    ({...prevState, name: e.target.value}))}/>
                <label htmlFor="surname">Apellido</label>
                <input 
                    name="surname"
                    type="text"
                    value={fields.surname}
                    onChange={e => setFields(prevState => 
                    ({...prevState, surname: e.target.value}))}/>
                <label htmlFor="name">Teléfono</label>
                <input 
                    name="phone"
                    type="text"
                    value={fields.phone}
                    onChange={e => setFields(prevState => 
                    ({...prevState, phone: e.target.value}))}/>
                <label htmlFor="name">E-mail</label>
                {/* <input 
                    name="email"
                    type="email"
                    value={fields.email}
                    onChange={e => setFields(prevState => 
                    ({...prevState, email: e.target.value}))}/>
                <label htmlFor="email2">Repetir e-mail</label>
                <input 
                    name="email2"
                    type="email"
                    value={fields.email2}/> */}
            </div>
            <button type="submit">ENVIAR</button>
        </form>
    )
}

export default UserForm