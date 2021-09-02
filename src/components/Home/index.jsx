import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Como melhorar</p>
          <p>suas fotos</p>
          <p>usando apenas o celular</p>
        </h1>
        <Link to="about">
          <button>Saiba mais</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/lipeHome.png`}
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;
