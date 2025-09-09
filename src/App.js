import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import "./sass/main.scss"

function App() {

  return (
    <div className="App">
        <Header items = {["Men", "Women", "New Arrivals"]} text = {["Sustainability", "stores"]}/>
        <Body/>
        <Footer 
        help={["1-888-963-8944", "1-814-251-9966 (Text)", "help@allbirds.com", "Returns/Exchanges", "FAQ/Contact Us", "Afterpay"]} 
        shop={["Men's Shoes", "Women's Shoes", "Men's Apparel", "Women's Apparel", "Socks", "Gift Cards", "Download the Allbirds App"]} 
        company={["Our Stores", "Our Story", "Our Materials", "Sustainability", "Partnerships", "Product Testing", "Affiliates", "Bulk Orders", "Careers", "Press", "California Transparency Act"]}/>
    </div>
  );
}

export default App;
