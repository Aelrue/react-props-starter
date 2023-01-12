import { useState } from "react";

function Form({ addCreatureFunction }) {
  const [newCreatureName, setNewCreatureName] = useState("");
  const [newCreatureOrigin, setNewCreatureOrigin] = useState("");

  const handleSubmit = (event) => {
    // event.preventDefault() to prevent the default action from happening when creature is submitted,
    // which is to clear the form
    event.preventDefault();
    console.log("Submit");
    addCreatureFunction(newCreatureName, newCreatureOrigin);
    setNewCreatureName("");
    setNewCreatureOrigin("");
  };

  return (
    <>
      {" "}
      <h2>Add Creature</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          onChange={(event) => setNewCreatureName(event.target.value)}
          value={newCreatureName}
        />
        <label>Origin:</label>
        <input
          onChange={(event) => setNewCreatureOrigin(event.target.value)}
          value={newCreatureOrigin}
        />
        <button type="submit">Add New Creature</button>
      </form>
    </>
  );
}

export default Form;
