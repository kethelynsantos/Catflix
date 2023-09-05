import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"; /* ele tem icons de varias bibliotecas */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  // chamando uma função de redirecionamento para o componente
  const navigate = useNavigate();
  // agora eu tenho que mapear um evento para o submit do input

  const handleSubmit = (e) => {
    e.preventDefault();
    /* se tiver vazio eu dou um return pois não esta buscando nada
    agora caso tenha eu tenho que enviar alguma coisa na minha query string para pegar esse valor e consultar na api 
    então naquela pagina vou pegar esse q e acessar a api*/

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <FontAwesomeIcon icon={faCat} /> Catflix
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          // mudando meu estado do search baseado nos eventos que acontecem aqui
          onChange={(e) => setSearch(e.target.value)}
          // isso me permite manipular o valor do campo a partir do state
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
