import "./App.css";
import { useState } from "react";

function App() {
  const [animals, setAnimals] = useState([
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
          {animals.map((animal, index) => (
            <tr key={index}>
              <td>{animal.species}</td>
              <td>{animal.name}</td>
              <td>{animal.birthday ? animal.birthday : "Nepoznato"}</td>
              <td>
                <button
                  type='button'
                  onClick={() => {
                    setAnimals(
                      animals.filter(
                        (removedAnimal) => removedAnimal.name !== animal.name
                      )
                    );
                  }}
                >
                  Remove
                </button>
              </td>
              <td>
                <button
                  type='button'
                  onClick={() => {
                    setAnimals(
                      animals.reduce((prev, curr) => {
                        {
                          return animal.name === curr.name
                            ? [curr, ...prev]
                            : [...prev, curr];
                        }
                      }, [])
                    );
                  }}
                >
                  Move to top
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
