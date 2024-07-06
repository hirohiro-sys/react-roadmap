import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [image, setImage] = useState("https://picsum.photos/800");

  const onClickGetRandomImage = () => {
    axios
      .get("https://picsum.photos/800")
      .then((res) => setImage(res.request.responseURL));
  };

  return (
    <>
      <img src={image} width="500px" height="500px" alt="ランダムな画像" />
      <br />
      <button onClick={onClickGetRandomImage}>画像を変更</button>
    </>
  );
}

export default App;
