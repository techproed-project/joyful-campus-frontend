import React, { useEffect, useState } from "react";
import AppRouter from "./router";
import { useDispatch } from "react-redux";
import { getMe } from "./api/auth-service";
import { login } from "./store/slices/auth-slice";
import LoadingSpinner from "./components/common/loading-spinner";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const loadData = async () => {
    try {
      const user = await getMe();
      dispatch(login(user));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if(loading) return <LoadingSpinner/>

  return <AppRouter />;
};

export default App;
