import React, { useState } from "react";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [error, setError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorMsg =
      nombre.length < 4
        ? "El nombre debe tener al menos 4 caracteres. ¡Qué superhéroe que se aprecie tiene un nombre tan corto! Thor y Hulk tienen al menos 4 letras."
        : apellido.length < 4
        ? "El apellido debe tener al menos 4 caracteres."
        : contrasena !== confirmarContrasena
        ? "Las contraseñas no coinciden."
        : contrasena < 12
        ? "La contraseña debe tener al menos 12 caracteres ultra secretos."
        : email < 10
        ? "El correo electrónico es demasiado corto. Recuerda, un superhéroe necesita una dirección con @ y una terminación digna de su poder."
        : !ValidarEmail(email)
        ? "Por favor, ingresa un correo electrónico válido."
        : "";

    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    setNombre("");
    setApellido("");
    setEmail("");
    setContrasena("");
    setConfirmarContrasena("");
    setError("");
    setFormSubmitted(true);
  };

  const ValidarEmail = (email) => {
    const e = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return e.test(String(email).toLowerCase());
  };

  const handleChangeNombre = (e) => setNombre(e.target.value);
  const handleChangeApellido = (e) => setApellido(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeContrasena = (e) => setContrasena(e.target.value);
  const handleChangeConfirmarContrasena = (e) =>
    setConfirmarContrasena(e.target.value);

  return (
    <div className="maincontainer">
      <h1>Bienvenido a la liga de SuperHeroes</h1>
      <form onSubmit={handleSubmit}>
        <h2>
          {formSubmitted ? "¡Bienvenido al Equipo!" : "Registro de SuperHéroe"}
        </h2>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={handleChangeNombre} />

        <label>Apellido:</label>
        <input type="text" value={apellido} onChange={handleChangeApellido} />

        <label>Email:</label>
        <input type="text" value={email} onChange={handleChangeEmail} />

        <label>Contraseña:</label>
        <input
          type="password"
          value={contrasena}
          onChange={handleChangeContrasena}
        />

        <label>Confirmar Contraseña:</label>
        <input
          type="password"
          value={confirmarContrasena}
          onChange={handleChangeConfirmarContrasena}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Crear SuperHeroe</button>
      </form>
    </div>
  );
}

export default App;
