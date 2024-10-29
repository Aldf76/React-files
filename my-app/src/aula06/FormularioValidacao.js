import React from "react";

const FormularioComValidacao = () => {
    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState('');
    const [cpf, setCpf] = React.useState('');
  
    const handleChangeEmail = (e) => {
      setEmail(e.target.value);

    };

    const handleChangeCpf = (e) => {

        setCpf(e.target.value);
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Esse é o momento da validação para checar se o email está em padrão de formato de um endereço de email
      if (!email.includes('@')) {
        setError('Email inválido');
      } else if(!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)){
        setError('Cpf inválido ');
      }else {
        setError('');
        console.log('Email enviado:', email);
        console.log('Cpf enviado: ' + cpf );
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <labe>Digite aqui seu email</labe>
        <br/>
        <input type="email" value={email} onChange={handleChangeEmail} />
        <br/>
        <label>Digite seu Cpf</label>
        <br/>
        <input type="cpf" value={cpf} onChange={handleChangeCpf} />
        {error && <span>{error}</span>}
        <br/>
        <button type="submit">Enviar</button>
      </form>
    );
  };
  
  export default FormularioComValidacao;
  