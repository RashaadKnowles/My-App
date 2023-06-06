// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import DispatcherFeed from "./pages/HomePage/DispatcherFeed";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import OOProfilePage from "./pages/ProfilePage/OwnerOperatorProfilePage";
import CreateReview from "./components/Review";
import DispatcherList from "./components/NavBar/DispatcherListDropdown";
import OOList from "./components/NavBar/OOListDropdown";
import ShowProfile from "./pages/ProfilePage/ShowProfile";
import ShowProfile2 from "./pages/ProfilePage/Profile2";
import ReviewList from "./components/ReviewList";
// Component Imports
import Navbar from "./components/NavBar/NavBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <DispatcherFeed />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dispatcher/:Id" element={<ProfilePage />} />
        <Route path="/owneroperator/:Id" element={<OOProfilePage />} />
        <Route path="/dispatcherfeed" element={<DispatcherFeed />} />
        <Route path="/review" element={<CreateReview />} />
        <Route path="/dispatcherlist" element={<DispatcherList />} />
        <Route path="/oolist" element={<OOList />} />
        <Route path="/showprofile/:id" element={<ShowProfile />} />
        <Route path="/showprofile2/:id" element={<ShowProfile2 />}  />
        <Route path="/reviewlist/:id" element={<ReviewList />} />
      </Routes>
    
    </div>
  );
}

export default App;
