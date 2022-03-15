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
  // species,name,date
  const [species, setSpecies] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  // add animal function
  const addAnimal = (species, name, date) => {
    date = date.split("-");
    const [year, month, day] = date;
    date = new Date(year, month, day).toLocaleDateString();
    console.log(date);
    setAnimals([...animals, { species, name, birthday: date }]);
  };
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    addAnimal(species, name, date);
  };
  return (
    <div className='App'>
      <form style={{ padding: "1.5em" }} onSubmit={handleSubmit}>
        <label>
          Species:
          <input
            type='text'
            name='species'
            placeholder='Species'
            value={species}
            onChange={(e) => {
              setSpecies(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Birthday:
          <input
            type='date'
            name='date'
            placeholder='date'
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </label>
        <br />
        <button type='submit'>Add animal</button>
      </form>
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
