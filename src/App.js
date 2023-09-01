import { useState } from "react";
import Header from "./Header";
import Page  from "./Page";


function App() {
  const [idx , setIdx] = useState(0) ; 

  function handleIdx(curIdx){
    setIdx((idx)=>idx = curIdx) ; 
  }
  return (
    <>
      <Header/>
      <Page idx={idx} onClickArrow={handleIdx} />
    </>
  );
}

export default App;
