import { Route, Switch } from "react-router-dom";
import "./App.scss";
import ViewResultados from "./views/resultados";
import { ViewBusqueda } from "./views/busqueda";
import ViewPDP from "./views/pdp";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Switch>
          <Route exact path="/" component={ViewBusqueda} />
          <Route exact path="/items" component={ViewResultados} />
          <Route exact path="/items/:id" component={ViewPDP} />
        </Switch>
      </div>
    </>
  );
}

export default App;
