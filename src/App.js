import { HomePage, SectionPage } from "./pages";
import "src/styles/global.scss";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="body">
        <Route exact path="/" component={HomePage} />
        <Route path="/products/:section" component={SectionPage} />
    </div>
  );
};

export default App;
