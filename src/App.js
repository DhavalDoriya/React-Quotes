import React, { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [load, setLoad] = useState(false);

  const url = "https://api.adviceslip.com/advice";
  const fetchData = async () => {
    try {
      setLoad(true);
      const response = await fetch(url);
      const json = await response.json();
      console.log(json.slip.advice);
      setLoad(false);
      setAdvice(json.slip.advice);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (<div>

    <div className="h-100 d-flex justify-content-center align-items-center">
     
    {load ? <img height={15} src="https://res.cloudinary.com/dhaval025/image/upload/v1647945001/Rolling-1s-200px_fdxcio.gif" alt="loading" />
        :  `free advice : ${advice}`}


    </div>


    <div className="d-flex align-items-center justify-content-center">

      <input className="btn btn-primary center" type='button' style={{ display: !load ? 'block' : 'none' }} value="next" onClick={() => fetchData()} />


    </div>

  </div>

  );
}

export default App;
