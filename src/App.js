import { HomePage, Shop, Collection } from "./pages";
import "src/styles/global.scss";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="body">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={Shop} />
      <Route path="/shop/:item" component={Collection} />
    </div>
  );
};

export default App;
