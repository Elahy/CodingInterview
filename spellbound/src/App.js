import { useEffect, useState } from "react";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Page from "./Page";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return <>{loading ? <LoadingScreen /> : <Page/> }</>;
}

export default App;
