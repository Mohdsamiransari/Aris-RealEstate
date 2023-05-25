import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/navbar/Header";
import Property from "./components/Property/Property";
import { PropertyDetail } from "./components/Property/PropertyDetail";
import { Sell } from "./components/Sell/Sell";
import { Process } from "./components/Buying_Process/Process";
import { About } from "./components/About/About";
import { Login } from "./components/login/Login";
import UserProfile from "./components/user/UserProfile";
import { Register } from "./components/login/Register";
import { ForgotPassword } from "./components/user/ForgotPassword";
import { ResetPassword } from "./components/user/ResetPassword";
import { Footer } from "./components/navbar/Footer";
import { UpdataProperty } from "./components/Admin/UpdataProperty";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/propertydetail/:_id" element={<PropertyDetail />} />
        <Route path="/updateproperty/:_id" element={<UpdataProperty />} />
        <Route path="/process" element={<Process />} />
        <Route path="/about" element={<About />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
