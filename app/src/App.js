import { Route, Switch } from "react-router-dom";
import "./App.scss";
import ViewResultados from "./views/ViewResultados";
import { ViewBusqueda } from "./views/busqueda";
import ViewPDP from "./views/ViewPDP";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={ViewBusqueda} />
        <Route exact path="/items" component={ViewResultados} />
        <Route exact path="/pdp" component={ViewPDP} />
      </Switch>
    </>
  );
}

export default App;
