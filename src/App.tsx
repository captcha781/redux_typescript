import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import InputComponent from "./Components/InputComponent";
import { useAppDispatch } from "./hooks";
import { initialize } from "./Features/Student";
import { message } from "antd";


const App:React.FC = () => {

  const dispatch = useAppDispatch()
  const [render, setRender] = useState<boolean>(false)
  useEffect(() => {
    message.loading("Loading Students Data...",1)
    axios.get("https://62d00f4a1cc14f8c08837daf.mockapi.io/api/redux/students")
    .then((response) => {
      message.success("Students Data Loaded Successfully...",2)
      dispatch(initialize(response.data))
      setRender(true)
    })
    .catch(err => {
      message.error(err.message)
    })
  },[dispatch])

  return (
    <div className="w-full h-screen bg-slate-100 absolute">
        {render && <InputComponent/>}
        {render && <Cards/>}
    </div>
  );
}

export default App;
