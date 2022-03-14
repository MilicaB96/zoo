import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [zivotinje, setZivotinje] = useState([
    {
      species: "cat",
      name: "Miki",
      birthday: new Date(2021, 2, 3).toLocaleDateString(),
    },
    {
      species: "parrot",
      name: "Pero",
      birthday: new Date(2015, 5, 7).toLocaleDateString(),
    },
    {
      species: "dog",
      name: "Rex",
      birthday: new Date(2013, 5, 1).toLocaleDateString(),
    },
    {
      species: "cat",
      name: "Suki",
      birthday: new Date(2015, 2, 10).toLocaleDateString(),
    },
    {
      species: "parrot",
      name: "Polly",
      birthday: new Date(2010, 1, 2).toLocaleDateString(),
    },
  ]);
  return (
    <div className='App'>
      <table>
        <thead>
          <tr>
            <th>species</th>
            <th>name</th>
            <th>birthday</th>
          </tr>
        </thead>
        <tbody>
          {zivotinje.map((item, index) => (
            <tr key={index}>
              <td>{item.species}</td>
              <td>{item.name}</td>
              <td>{item.birthday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
