import { Route, Switch } from "react-router-dom";
import "./App.scss";
import ViewResultados from "./pages/resultados";
import { ViewBusqueda } from "./pages/busqueda";
import ViewPDP from "./pages/pdp";
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
