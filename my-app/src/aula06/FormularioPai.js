import React from "react";
import InputComponent from "./InputComponent"

const FormularioPai = () => {
    const [formData, setFormData] = React.useState({name: '', email: ''});

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    return (
        <div>
            <InputComponent name="name"
             label="Nome" 
             value={formData.name}
              onChange={handleChange} />
            <InputComponent name="email" label="Email" value={formData.email} onChange={handleChange} />
            {/* Adicione mais campos para preenchimento do formulário */}
            <button type="submit">Enviar</button>
        </div>
    )

}

export default FormularioPai;