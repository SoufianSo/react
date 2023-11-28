import Dark from "./svg/dark";
import "./Header.css";
const Header = ({ getter, setzeDenDarkmudus }) => {
  console.log("header log", getter);
  const andern = () => {
    setzeDenDarkmudus((state) => !state);
  };

  return (
    <header>
      <h2>Logo</h2>
      <div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
        </nav>
        <div onClick={andern}>
          <Dark />
        </div>
      </div>
    </header>
  );
};

export default Header;
