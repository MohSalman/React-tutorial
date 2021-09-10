import { Link, Switch, Route } from "react-router-dom";
import Mens from "./Men";
import OldAge from "./OldAge";
import Women from "./Women";


function Product(props) {
  return (
    <div className="container">
      <h1>Products</h1>
      <p>shadgshd asdgysd sadfygsa dfsaygfdas dyfgasd asydgsa dasyfdas das7dsav shadgshd asdgysd sadfygsa dfsaygfdas dyfgasd asydgsa dasyfdas das7dsav  shadgshd asdgysd sadfygsa dfsaygfdas dyfgasd asydgsa dasyfdas das7dsav  shadgshd asdgysd sadfygsa dfsaygfdas dyfgasd asydgsa dasyfdas das7dsav  shadgshd asdgysd sadfygsa dfsaygfdas dyfgasd asydgsa dasyfdas das7dsav  shadgshd asdgysd sadfygsa dfsaygfdas dyfgasd asydgsa dasyfdas das7dsav  shadgshd asdgysd sadfygsa dfsaygfdas dyfgasd asydgsa dasyfdas das7dsav </p>
      <ul>
        <li>
          <Link to="/product/">Men</Link>
        </li>
        <li>
          <Link to="/product/women">Women</Link>
        </li>
        <li>
          <Link to="/product/old-age">OldAge</Link>
        </li>
      </ul>

      <div className="row">
        <Switch>
          <Route exact path="/product/" component={Mens}/>
          <Route exact path="/product/women" component={Women}/>
          <Route exact path="/product/old-age" component={OldAge}/>
        </Switch>
      </div>
    </div>
  );
}

export default Product;
