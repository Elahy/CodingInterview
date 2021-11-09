import { useEffect, useState } from "react";
import QuestionOne from "./pages/QuestionOne";
import QuestionTwo from "./pages/QuestionTwo";
import LoadingScreen from "./pages/LoadingScreen";

function App() {
  const [selector, setSelector] = useState("one");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading === false ? (
        <>
          <div className="root">
            <button onClick={() => setSelector("one")} className="button">
              Question 1
            </button>
            <button onClick={() => setSelector("two")} className="button">
              Question 2
            </button>
          </div>
          <div>{selector === "one" ? <QuestionOne /> : <QuestionTwo />}</div>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
