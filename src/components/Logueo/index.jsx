import React, { useState } from "react";
import styles from "./logueo.module.css";

const Logueo = () => {
  const [estaRegistrandose, setEstaRegistrandose] = useState(false);

  return (
    <div className={styles.logueo}>
      <h2>{estaRegistrandose ? "Registrate" : "Inicia Sesión"}</h2>
      <form action="">
        <div>
          <label htmlFor="">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            autoComplete="on"
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            autoComplete="on"
          />
        </div>
        <button type="submit">
          {estaRegistrandose ? "Registrate" : "Iniciar sesión"}
        </button>
      </form>
      <div className={styles.logueo__options}>
        <button>Acceder con Google</button>
        <button onClick={() => setEstaRegistrandose(!estaRegistrandose)}>
          {estaRegistrandose ? "Ya tengo una cuenta" : "No tengo una cuenta"}
        </button>
      </div>
    </div>
  );
};

export default Logueo;
