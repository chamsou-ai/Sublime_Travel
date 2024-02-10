import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//for Components design
import { Home, Destinations, Signup, Services, Contact, Devis } from "./pages";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/info" element={<Services />} />
        <Route path="/signup" element={<Signup />} />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
