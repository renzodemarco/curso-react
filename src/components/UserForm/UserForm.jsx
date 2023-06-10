import { useState } from "react";
import './UserForm.css'

const UserForm = ({ onSend }) => {

    const [fields, setFields] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        confirmEmail: ""
    })

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [validateError, setValidateError] = useState("")

    const handleError = () => {
        if (fields.name.length < 1 || fields.surname.length < 1 || fields.phone.length < 1 || fields.email.length < 1 || fields.confirmEmail.length < 1) {
            setButtonDisabled(true)
            setValidateError("Complete todos los campos del formulario")
        } else if (fields.email !== fields.confirmEmail) {
            setButtonDisabled(true)
            setValidateError("Los emails no coinciden")
        } else {
            setButtonDisabled(false)
            setValidateError("")
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSend({name:fields.name, surname:fields.surname, phone:fields.phone, email:fields.email})
            .then(() => {
                setFields({
                    name: "",
                    surname: "",
                    phone: "",
                    email: "",
                    confirmEmail: ""
                })
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="formContainer">
                <h1>Ingrese sus datos para terminar la compra</h1>
                <label htmlFor="name">Nombre</label>
                <input
                    name="name"
                    type="text"
                    value={fields.name}
                    onChange={e => {
                        setFields(prevState =>
                        ({ ...prevState, name: e.target.value }))
                        handleError()}} 
                    onBlur={handleError}/>
                <label htmlFor="surname">Apellido</label>
                <input
                    name="surname"
                    type="text"
                    value={fields.surname}
                    onChange={e => {
                        setFields(prevState =>
                        ({ ...prevState, surname: e.target.value }))
                        handleError()}} 
                    onBlur={handleError}/>
                <label htmlFor="name">Teléfono</label>
                <input
                    name="phone"
                    type="text"
                    value={fields.phone}
                    onChange={e => {
                        setFields(prevState =>
                        ({ ...prevState, phone: e.target.value }))
                        handleError()}}
                    onBlur={handleError}/>
                <label htmlFor="name">E-mail</label>
                <input
                    name="email"
                    type="email"
                    value={fields.email}
                    onChange={e => {
                        setFields(prevState =>
                        ({ ...prevState, email: e.target.value }))
                        handleError()}}
                    onBlur={handleError}/>
                <label htmlFor="email2">Repetir e-mail</label>
                <input
                    name="confirmEmail"
                    type="confirmEmail"
                    value={fields.confirmEmail}
                    onChange={e => {
                        setFields(prevState =>
                        ({ ...prevState, confirmEmail: e.target.value }))
                        handleError()}}
                    onBlur={handleError}/>
            </div>
            <button type="submit" className="buyButton" disabled={buttonDisabled}>Finalizar compra</button>
            {validateError && <p className="error">{validateError}</p>}
        </form>
    )
}

export default UserForm