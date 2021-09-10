import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            <ListFood />
                        </Route>
                        <Route path="/cart" exact>
                            <Cart />
                        </Route>
                        <Route path="/about" exact>
                            <About />
                        </Route>
                        <Route path="/about" exact>
                            <Contact />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;
