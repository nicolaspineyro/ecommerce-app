import { HomePage, Shop } from "./pages";
import "src/styles/global.scss";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="body">
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/:product" component={Shop} />
    </div>
  );
};

export default App;
