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
      birthday: "",
    },
    {
      species: "parrot",
      name: "Polly",
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
              <td>{item.birthday ? item.birthday : "Nepoznato"}</td>
              <td>
                <button
                  type='button'
                  onClick={() => {
                    setZivotinje(
                      zivotinje.filter(
                        (removedItem) => removedItem.name !== item.name
                      )
                    );
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
