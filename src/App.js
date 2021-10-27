import { Route, Switch } from "react-router-dom";
import { HomePage, Shop, Collection, SignInPage } from "src/pages";
import { Header } from "src/components/ui";
import "src/styles/global.scss";

const App = () => {
  return (
    <div className="body">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/shop/:item" component={Collection} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </div>
  );
};

export default App;
