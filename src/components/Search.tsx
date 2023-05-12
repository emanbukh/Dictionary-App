import { useState } from "react";
import TypewriterMono from "../assets/typewriter-1.jpg";
import LoadingGif from "../assets/loading.gif";
import { BASEURL } from "../constant/config";
import { useNavigate } from "react-router-dom";

function Search() {
  const [word, setWord] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const navigate = useNavigate();

  async function handleSearchDefinition() {
    // set loading
    setLoading(true);
    // call api using word submit
    const response = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    );

    if (response.status === 200) {
        const jsonData = await response.json();
  
        navigate(BASEURL + word, {
          state: jsonData,
        });
      } else {
        setError(true);
      }
      setLoading(false);
    }
  


  return (
    <div className="w-[250px] h-[550px] bg-gray-100 flex flex-col ml-[50px] mt-10 overflow-hidden rounded-sm">
      <h1 className="w-[250px] h-[60px] flex justify-center mt-[50px] font-bold text-4xl">
        TYPE HERE
      </h1>
      <div className="w-[250px]  flex flex-col bg-slate-700 items-center ">
        <input
          className="mt-5 h-[30px] rounded-md text-center  "
          type="text"
          name="word"
          id="word"
          placeholder="Insert a word to search"
          onChange={(e) => {
            setError(false);
            setWord(e.target.value);
          }}
        />

        <button
          className="w-[80px] mb-5 h-[30px] mt-3 rounded-md font-medium bg-slate-200"
          type="submit"
          onClick={handleSearchDefinition}
        >
          Search
        </button>
        {isLoading ? (
          <span>
            <img src={LoadingGif} alt="loading-gif" />
          </span>
        ) : null}
        {isError ? <span>Invalid input</span> : null}
      </div>
      <div>
        <img className="bg-cover" src={TypewriterMono} alt="typewriter-image" />
      </div>
      {/* <pre className="flex">{JSON.stringify(data, null, 4)}</pre> */}
    </div>
  );
}
export default Search;
