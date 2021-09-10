import "./App.scss";
import ListFood from "./components/FoodCart/ListFood";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <div className="header">
                <Navbar />
            </div>
            <div className="container">
                <ListFood />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;
