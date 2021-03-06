import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/HomePage";
import Product from "../Pages/Product";
import Footer from "./Footer";
import Header from "./Header";
import { Switch, Route } from 'react-router-dom'
import ReactState from "../Pages/ReactState";
import PostList from "../Pages/Post";
import PostDetail from "../Pages/Post/PostDetail";

function Layout(props) {
    return (
        <>
            <Header />
            <div className="main-wrapper">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/react-state" component={ReactState} />
                    <Route exact path="/post" component={PostList} />
                    <Route exact path="/post/:postId" component={PostDetail} />
                    <Route path="/product" component={Product} />
                    {/* <Route > */}
                </Switch>
            </div>
            <Footer />
        </>
    );
}

export default Layout;
