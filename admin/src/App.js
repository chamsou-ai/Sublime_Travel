import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";

import Dashboard from "./Dashboard";
import PrivateRoutes from "./PrivateRoute";
import ModifyAdmin from "./ModifyAdmin";
import Redirect from "./Redirect";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Redirect/>}>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/modify-admin" element={<ModifyAdmin />} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
