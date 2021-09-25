import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import ViewResultados from "./views/ViewResultados";
import ViewBusqueda from "./views/VistaBusqueda";
import ViewPDP from "./views/ViewPDP";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Busqueda</Link>
        </li>
        <li>
          <Link to={"/resultados"}>Resultados</Link>
        </li>
        <li>
          <Link to={"/pdp"}>PDP</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={ViewBusqueda} />
        <Route exact path="/resultados" component={ViewResultados} />
        <Route exact path="/pdp" component={ViewPDP} />
      </Switch>
    </>
  );
}

export default App;
