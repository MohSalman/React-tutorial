import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/HomePage";
import Product from "../Pages/Product";
import Footer from "./Footer";
import Header from "./Header";
import { Switch, Route } from 'react-router-dom'

function Layout(props) {
    return (
        <>
            <Header />
            <div className="main-wrapper">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route path="/product" component={Product} />
                    {/* <Route > */}
                </Switch>
            </div>
            <Footer />
        </>
    );
}

export default Layout;
