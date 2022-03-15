import "./App.css";
import { useState } from "react";

function App() {
  const [animals, setAnimals] = useState([
    {
      species: "Norweigan shorthair",
      name: "Miki",
      birthday: new Date(2021, 2, 3).toLocaleDateString(),
      sector: "cat",
    },
    {
      species: "parrot",
      name: "Pero",
      birthday: new Date(2015, 5, 7).toLocaleDateString(),
      sector: "bird",
    },
    {
      species: "War Hound",
      name: "Rex",
      birthday: new Date(2013, 5, 1).toLocaleDateString(),
      sector: "dog",
    },
    {
      species: "Kaliko",
      name: "Suki",
      birthday: "",
      sector: "cat",
    },
    {
      species: "parrot",
      name: "Polly",
      birthday: "",
      sector: "bird",
    },
  ]);
  // sectors
  const animalSector = ["cat", "dog", "bird", "snake", "rabbit"];
  // species,name,date
  const [species, setSpecies] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [sector, setSector] = useState("cat");
  // add animal function
  const addAnimal = (species, name, date, sector) => {
    date = date.split("-");
    const [year, month, day] = date;
    date = new Date(year, month, day).toLocaleDateString();
    setAnimals([...animals, { species, name, birthday: date, sector }]);
  };
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    addAnimal(species, name, date, sector);
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
            required
            placeholder='date'
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </label>
        <br />
        <select
          onChange={(e) => {
            {
              setSector(e.target.value);
            }
          }}
        >
          {animalSector.map((sector) => {
            return <option value={sector}>{sector}</option>;
          })}
        </select>
        <br />
        <button type='submit'>Add animal</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>species</th>
            <th>name</th>
            <th>birthday</th>
            <th>sector</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            <tr key={index}>
              <td>{animal.species}</td>
              <td>{animal.name}</td>
              <td>{animal.birthday ? animal.birthday : "Nepoznato"}</td>
              <td>{animal.sector}</td>
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
                        return animal.name === curr.name
                          ? [curr, ...prev]
                          : [...prev, curr];
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
      <table>
        <thead>
          <tr>
            <th>Sectors:</th>
          </tr>
        </thead>
        <tbody>
          {animalSector.map((sector, index) => (
            <tr key={index}>
              <td>{sector}</td>
              <td>
                <button
                  type='button'
                  onClick={() => {
                    alert(
                      animals
                        .filter((animal) => animal.sector === sector)
                        .map((obj) => `${obj.name} (${obj.species})`)
                    );
                  }}
                >
                  Check Animals
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
