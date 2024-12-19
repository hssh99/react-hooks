import { useEffect, useState } from "react";

export const EffectExample = () => {
  const [data, setData] = useState([]);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    console.log("Harshal");
  }, [showName]);

  return (
    <div>
      <button onClick={() => setShowName((prev) => !prev)}>Toggle</button>
      <h1> Posts </h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

/*
- most commonly used for fetching data from API 
immediately when page renders.
- react query is the best method for fetching data.
- useEffect runs twice in dev because of react's strict mode.
- useEffect can be used for subscribing & cleaning up events - 
connecting to socket.io, GraphQL 
*/
