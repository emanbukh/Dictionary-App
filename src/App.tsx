import { useState } from "react";

type DefinitionType = null | any;

function App() {
  const [word, setWord] = useState("");
  const [data, setData] = useState<DefinitionType>(null);
  const [isLoading, setLoading] = useState(false);


  async function handleSearchDefinition() {
  // set loading
    setLoading(true);
  // call api using word submit
    const response = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    );
    const jsonData = await response.json();
    console.log(jsonData);
    setData(jsonData);
    setLoading(false);
  }
  return (
    <div>
      <div>
        <input
          type="text"
          name="word"
          id="word"
          placeholder="Insert a word to search"
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        <button type="submit" onClick={handleSearchDefinition}>
          Search
        </button>
        {isLoading ? <span>Loading...</span> : null}
      </div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
}

export default App;
