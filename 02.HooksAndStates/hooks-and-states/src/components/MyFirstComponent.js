import React, {useState} from "react";

export const MyFirstComponent = () => {

/*   let name = "Lyubeto";

  const changeName = (e) => {
    name = "Skalata";
  }; */

const [name, setName] = useState("Lyubeto Stoyanov");

const changeName = (e, nameChange) => {
    setName(nameChange);
;}

  return (
    <div>
      <h3>Component: MyFirstState</h3>
      <strong>{name}</strong>
      &nbsp;

      <button onClick={e => changeName(e,"Skalata")}>Change</button>
      &nbsp;

      <input type="text" onKeyDown={e => changeName(e, e.target.value) } placeholder="Change name"></input>
    </div>
  );
};
