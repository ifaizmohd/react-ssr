import React from "react";

const Home = () => {
  return (
    <div>
      <div>I'm SSR Home component</div>
      <button onClick={() => console.log("Clicked!!")}>Press me!</button>
    </div>
  );
};

export default { component: Home };
