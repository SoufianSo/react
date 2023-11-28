import { useState } from "react";
import Header from "../components/Header";

const Home = () => {
  const [darkmode, setDarkmode] = useState(false);
  console.log("Home page", darkmode);

  return (
    <div>
      <Header setzeDenDarkmudus={setDarkmode} getter={darkmode} />
      <main>
        <h3>Ich bin die Home seite</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          illum facilis quae voluptate officiis corrupti nam fuga cumque porro
          omnis ipsum similique odit, aliquid asperiores atque provident
          excepturi nesciunt delectus?
        </p>
        <img
          src="https://data.wdr.de/ddj/deepfake-quiz-erkennen-sie-alle-ki-bilder/Titelbild.jpg"
          alt="Tiger"
        />
      </main>
    </div>
  );
};

export default Home;
