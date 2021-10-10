import { Route, Switch } from "react-router-dom";
import "./App.scss";
import PageResultados from "./pages/resultados";
import { PageBusqueda } from "./pages/busqueda";
import PagePDP from "./pages/pdp";
import Header from "./components/Header";
import { LoaderContextProvider } from "./context/loader";
import PageError from "./pages/error";

function App() {
  return (
    <>
      <LoaderContextProvider>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route exact path="/" component={PageBusqueda} />
            <Route exact path="/items" component={PageResultados} />
            <Route exact path="/items/:id" component={PagePDP} />
            <Route exact path="/error" component={PageError} />
          </Switch>
        </div>
      </LoaderContextProvider>
    </>
  );
}

export default App;
