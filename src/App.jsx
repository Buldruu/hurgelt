import { useState, useCallback } from "react";
import reducer from "./store/reducer";
import INITIAL_STATE from "./store/initialState";
import { genTracking } from "./utils/helpers";

import LoginPage      from "./pages/auth/LoginPage";
import RegisterPage   from "./pages/auth/RegisterPage";
import GuestOrderPage from "./pages/auth/GuestOrderPage";
import AdminApp       from "./pages/admin/AdminApp";
import DriverApp      from "./pages/driver/DriverApp";
import CustomerApp    from "./pages/customer/CustomerApp";

export default function App() {
  const [state, setRaw] = useState({ ...INITIAL_STATE, currentUser: null });
  const dispatch = useCallback(action => setRaw(s => reducer(s, action)), []);

  // "login" | "register" | "guest"
  const [page, setPage] = useState("login");

  const handleLogin = (email, pass) => {
    const u = state.users.find(
      u => u.email === email && u.password === pass && u.status === "active"
    );
    if (u) { dispatch({ type: "LOGIN", user: u }); return true; }
    return false;
  };

  const handleRegister = data => dispatch({ type: "REGISTER", data });

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setPage("login");
  };

  // ── Guest order (no login required) ──
  if (page === "guest") {
    return (
      <GuestOrderPage
        onBack={() => setPage("login")}
        onSubmit={(form, tracking) =>
          dispatch({ type: "CREATE_DELIVERY", customerId: null, form, tracking })
        }
      />
    );
  }

  // ── Auth screens ──
  if (!state.currentUser) {
    if (page === "register") {
      return <RegisterPage onRegister={handleRegister} onBack={() => setPage("login")} />;
    }
    return (
      <LoginPage
        onLogin={handleLogin}
        onGoRegister={() => setPage("register")}
        onGuestOrder={() => setPage("guest")}
      />
    );
  }

  // ── Role-based routing ──
  const props = { state, dispatch, user: state.currentUser, onLogout: handleLogout };

  if (state.currentUser.role === "admin")  return <AdminApp    {...props} />;
  if (state.currentUser.role === "driver") return <DriverApp   {...props} />;
  return                                          <CustomerApp {...props} />;
}
