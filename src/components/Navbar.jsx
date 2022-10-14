import "./Navbar.css";
import { FaMusic } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function NavBar({
  inputValue,
  setInputValue,
  isHome,
  isSingle,
  getData,
}) {
  return (
    <nav className="navbar">
      <Link
        to="/"
        className={isHome ? "navbar-link" : "navbar-link navbar-link-extra"}
      >
        <FaMusic className="navbar-link__icon" />
        <h5 className="navbar-link__title">Music App</h5>
      </Link>
      {isHome ? (
        <>
          <div className="navbar-search search">
            <input
              type="search"
              value={inputValue}
              className="search__input"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <BsSearch className="search__icon" />
          </div>
        </>
      ) : (
        <div className="navbar-description">
          <h1 className="navbar-description__title">
            {isSingle ? "The Album" : "The Single Song"}
          </h1>
        </div>
      )}
    </nav>
  );
}
