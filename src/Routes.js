import { Switch, Route } from "react-router-dom";
import CountryDetails from "./components/CountriesDetails";

const Routes = () => (
    <Switch>
        <Route exact path="/details" component={CountryDetails} />
    </Switch>
)

export default Routes;