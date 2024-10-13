import "./App.css";
import {Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
// import PerferenceNavbar from './components/PerferenceNavbar';
import Perference from "./components/Preference";

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}>
      <div className="App">
          <Routes>
            <Route path="*" element={<><Navbar /><Home /><About /><Product /><Pricing /><Contact /><Footer /></>} />
            <Route path="/preference-setup" element={<><Navbar /><Perference/><Footer /></>} />
          </Routes>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
