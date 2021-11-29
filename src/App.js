import { useState } from "react";
import "./App.css";
import { Attribute } from "./components/Attribute";
import { CheckList } from "./components/CheckList";

let weapons = {
  pistol: ["6/1", "2d6"],
  rifle: ["4/1", "3d6"],
};

let proficiencies = [
  "Academician",
  "Agriculture",
  "Alchemy",
  "Animal Husbandry",
  "Appraising",
  "Archeology",
];

function App() {
  const [name, setName] = useState("Your Character");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [charClass, setClass] = useState("");
  const [sex, setSex] = useState("");
  const [weapon, setWeapon] = useState([]);
  const [proficiency, setProficiency] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <div className="rightPane">
          <div>
            <div>
              <label>Name:</label>
              <input
                placeholder={name}
                onChange={(x) => {
                  setName(x.target.value);
                }}
              />
            </div>
            <div>
              <label>Height:</label>
              <input
                onChange={(x) => {
                  setHeight(x.target.value);
                }}
              />
            </div>
            <div>
              <label>Weight:</label>
              <input
                onChange={(x) => {
                  setWeight(x.target.value);
                }}
              />
            </div>
            <div>
              <label>Age:</label>
              <input
                onChange={(x) => {
                  setAge(x.target.value);
                }}
              />
            </div>
            <div>
              <label>Sex:</label>
              <select onChange={(x) => setSex(x.target.value)}>
                <option></option>
                <option>Male</option>
                <option>Female</option>
                <option>None</option>
              </select>
            </div>
            <div>
              <label>Class:</label>
              <select onChange={(x) => setClass(x.target.value)}>
                <option></option>
                <option>Soldier</option>
                <option>Adept</option>
                <option>Mystic</option>
                <option>Tradesmen</option>
              </select>
            </div>
            <div>
              <label>Nationality:</label>
              <input />
            </div>
            <div>
              <label>Hair:</label>
              <input />
            </div>
            <div>
              <label>Eyes:</label>
              <input />
            </div>
          </div>
          <div>
            <h4>Abilities</h4>
            <Attribute />
          </div>
          <div>
            <h4>Weapon</h4>
            <CheckList item={weapons} save={setWeapon} />
          </div>
          <div>
            <h4>Proficiencies</h4>
            <CheckList item={proficiencies} save={setProficiency} />
          </div>
        </div>
        <div className="leftPanel">
          <p>Character Name: {name}</p>
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
          <p>Age: {age}</p>
          <p>Sex: {sex}</p>
          <p>Class: {charClass}</p>
          <p>Weapons: </p>
          <ul>
            {weapon.map((e) => {
              return (
                <li key={e}>
                  {e} : {weapons[e][0]}, {weapons[e][1]}
                </li>
              );
            })}
          </ul>
          <p>Proficiencies: </p>
          <ul>
            {proficiency.map((e) => {
              return <li key={e}>{e}</li>;
            })}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
