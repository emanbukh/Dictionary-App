import { useState } from "react";
import TypewriterMono from "../assets/typewriter-1.jpg";
import LoadingGif from "../assets/loading.gif";
import Heading from "../components/Heading";
import Search from "../components/Search";

function Home() {
 
  return (
    <div className="flex flex-row">
     <Search/>
     <Heading/>
    </div>
  );
}
export default Home;
