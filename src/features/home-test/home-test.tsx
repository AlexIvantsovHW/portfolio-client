import { useState } from "react";

const HomeTest = () => {
  const [name, setName] = useState("");
  return (
    <div>
      Home test
      <h1>Heading</h1>
      <p data-testid={"desc"}>description</p>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="enter the name"
      />
      <button disabled={name === "" ? true : false}>Test</button>
    </div>
  );
};
export default HomeTest;
