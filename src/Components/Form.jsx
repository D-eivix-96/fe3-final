import React from "react";
import { useState } from "react";



const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [values, setValues] = useState({
    name: "",
    email: "",
  })

  const [validation, setValidation] = useState(false)


  const validateName = () => {

    let nameUser = values.name.split(" ")

    if (nameUser.length < 2) return alert("por favor ingrese Nombre y Apellido")
    if (nameUser[0].length < 3 || nameUser[1].length < 3) return alert("por favor ingrese un nombre/apellido mayor a 3 letras")

    return true

  }

  const validateEmail = () => {

    let emailUser = values.email.split("@")
    if (emailUser.length < 2) return alert("Formato de e-mail incorrecto intente nuevamente")

    let dotCom = emailUser[1].split(".")
    if (dotCom.length < 2) return alert("Formato de e-mail incorrecto intente nuevamente")

    return true

  }

  const handleChange = (e) => {

    const { target } = e
    const { name, value } = target

    const newValues = {
      ...values,
      [name]:value,
    }

    setValues(newValues)

  }

  const handleSubmit = (e) => {

    e.preventDefault()

    let nameValidation = validateName()

    let emailValidation = validateEmail()

    if (nameValidation && emailValidation) {
      setValidation(true)
    }

  }

  return (
    <section className="form">
      
      <form onSubmit={handleSubmit}>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="input-form" onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" className="input-form" onChange={handleChange} />
        <button type="submit" className="btn-form">SUBMIT</button>
      </form>
      {validation ? <h3 className="h3">Gracias por comunicarse con nosotros {values.name}, un asistente se contactará lo antes posible!</h3> : ""}
      </section>
  );
};

export default Form;