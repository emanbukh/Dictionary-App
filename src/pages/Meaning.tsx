import Search from "../components/Search";
import { useLocation } from "react-router-dom";

function Meaning() {
  const location = useLocation();
  const filteredArray = location.state;
  const [filteredWord] = filteredArray;
  const isVerb = filteredWord.meanings[0] >= filteredWord.meanings[1];
  const isNoun =
    filteredWord.meanings[0].definitions[0] >=
    filteredWord.meanings[0].definitions[1];
  const isAdjective = filteredWord.meanings[0] >= filteredWord.meanings[2];
  return (
    <div className="flex flex-row">
      <Search />
      {/* <div className="w-[900px] h-[550px] mt-40px ml-50px bg-slate-500"> */}{" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        className="h-auto pt-7 pb-7 w-auto pr-7 pl-7"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#ECEDF0",
          }}
          className="pt-7 h-auto w-auto pr-7 pl-7"
        >
          {/* ---Noun--- */}
          <h1 className="pt-3 pb-3 capitalize font-bold text-xl flex justify-start w-[850px]">
            {filteredWord.meanings[0].partOfSpeech}
          </h1>
          <div className="text-start w-[850px] h-[40px] font-medium text-l border-t-2 border-black border-solid pt-2">
            <li> Definition :</li>
          </div>
          <div className="text-justify w-[850px] pl-6">
            {filteredWord.meanings[0].definitions[0].definition}
          </div>
          <div className="font-medium capitalize italic flex justify-start w-[850px] h-[60px] pl-6">
            Example : {filteredWord.meanings[0].definitions[0].example}
          </div>

          {isNoun ? (
            <div>
              <div className="text-start w-[850px] h-[30px] font-medium text-l">
                <li> Definition :</li>
              </div>
              <div className="text-justify w-[850px] pl-6">
                {filteredWord.meanings[0].definitions[1].definition}
              </div>
              <div className="font-medium capitalize italic flex justify-start w-[850px] h-[60px] pl-6">
                Example : {filteredWord.meanings[0].definitions[1].example}
              </div>
            </div>
          ) : null}

          <div className="text-start w-[850px] h-[40px] font-medium text-l pt-2">
            <li>Synonyms :</li>
          </div>
          <div className="text-justify w-[850px] pb-10 flex flex-col">
            {filteredWord.meanings[0].synonyms.map(
              (synonyms: string, index: number) => {
                return (
                  <p
                    key={index}
                    className="p-1 inline-block rounded capitalize pl-12"
                  >
                    <li>{synonyms}</li>
                  </p>
                );
              }
            )}
          </div>

          {/* ---Verb---- */}
          {isVerb ? (
            <div>
              <h1 className="pt-3 pb-3 capitalize font-bold text-xl flex justify-start w-[850px] h-[50px]">
                {filteredWord.meanings[1].partOfSpeech}
              </h1>
              <div className="text-start w-[850px] h-[40px] font-medium text-l border-t-2 border-black border-solid pt-2">
                Definition :
              </div>
              <div className="text-justify w-[850px]">
                {filteredWord.meanings[1].definitions[0].definition}
              </div>
              <div className="font-medium capitalize italic flex justify-start w-[850px] h-[60px]">
                Example : {filteredWord.meanings[1].definitions[0].example}
              </div>
            </div>
          ) : null}

          {/* ---Adjective---- */}
          {isAdjective ? (
            <div>
              <h1 className="pt-3 pb-3 capitalize font-bold text-xl flex justify-start w-[850px] h-[50px]">
                {filteredWord.meanings[2].partOfSpeech}
              </h1>
              <div className="text-start w-[850px] h-[40px] font-medium text-l border-t-2 border-black border-solid pt-2">
                Definition :
              </div>
              <div className="text-justify w-[850px]">
                {filteredWord.meanings[2].definitions[0].definition}
              </div>
              <div className="font-medium capitalize italic flex justify-start w-[850px] h-[60px]">
                Example : {filteredWord.meanings[2].definitions[0].example}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default Meaning;
