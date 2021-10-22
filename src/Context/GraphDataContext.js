import { useState, useEffect, createContext } from "react";

export const InsightContext = createContext();


export const InsightsProvider = (props) => {
  console.log('step one')
    const [insight, setInsight] = useState(null);
     const [isPending, setIsPending] = useState(true);
     const [error, setError] = useState(null);
  useEffect(() => {
      console.log('step two')
      const data = { angular_test: "angular-developer" };
      fetch("https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          console.log(res)
          if (!res.ok) {
            throw Error("Unable to fetch data");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setInsight(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
          console.log(err);
        });
    }, []);
  return (
        
    <InsightContext.Provider value={{insight, error, isPending }}>
            {props.children}
        </InsightContext.Provider>
    );
}