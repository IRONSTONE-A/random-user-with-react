import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "../src/components/card/Card";
import Footer from "./components/footer/Footer";
import Button from "../src/components/button/Button"



const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    axiosUser();
  },[]);

  const axiosUser = async () => {
    const response = await axios("https://randomuser.me/api/")
    // console.log(response);
    setUser(response.data.results)
  }
  return (
    <div className="App">
      <Card user={user}/>
      <Button axiosUser={axiosUser}/>
      <Footer/>
    </div>
  )
}

export default App
