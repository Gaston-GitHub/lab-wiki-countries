
import {Link} from "react-router-dom";

const CountriesList =({countries = [0,1,2,3]}) => (
    <ul className ="list-group">
    {
        countries.map((country,listCountries)=>(
            <ul key={listCountries} className="list-group-item">
            <Link to={{
                pathname:"/details",
                state:country}} >
            {country.flag}  
            {country.name.official}
            </Link>
             
            </ul>
        ))
    }
    </ul>
)

export default CountriesList;
