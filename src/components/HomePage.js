import React from "react";
import { useUser } from "reactfire";
/**
 * @name HomePage
 * @description component in charge of display a welcome message
 * @author pablo.barrios
 */
const HomePage = () => {
  const user = useUser();

  return (
    <div>
      <div>Bienvenido</div>
      {user ? (
        <div>Ahora puedes ver la lista de mentores</div>
      ) : (
        <div>Primero debes iniciar sesion</div>
      )}
    </div>
  );
};

export default HomePage;
