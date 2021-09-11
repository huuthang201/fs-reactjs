import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListFood from "./components/FoodCart/ListFood";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
    return (
        <div className="App">
            <div className="header">
                <Navbar />
            </div>
            <div className="container">
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route exact path="/" component={ListFood}></Route>
                        <Route exact path="/cart" component={Cart}></Route>
                        <Route exact path="/about" component={About}></Route>
                        <Route
                            exact
                            path="/contact"
                            component={Contact}
                        ></Route>
                    </Switch>
                </Router>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;
