import React, { useEffect, useState } from "react";
import AppRouter from "./router";
import { useDispatch } from "react-redux";
import { getMe } from "./api/auth-service";
import { login, logout } from "./store/slices/auth-slice";
import LoadingSpinner from "./components/common/loading-spinner";
import { getLocalStorage, removeLocalStorage } from "./helpers/encrypted-storage";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const loadData = async () => {
    try {
      const token = getLocalStorage("token");
      if(!token) throw new Error("No token");
      const user = await getMe();
      dispatch(login(user));
    } catch (err) {
      console.log(err);
      dispatch(logout());
      removeLocalStorage("token");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  if (loading) return <LoadingSpinner />;

  return <AppRouter/>;
};

export default App;
