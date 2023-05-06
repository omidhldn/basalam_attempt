import classes from "./HeaderDesktop.module.css";
import logo from "./assets/basalam-logotype.svg";
import searchIcon from "./assets/search.svg";

const HeaderDesktop = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <h1>
          <img src={logo} alt="basalam-logo"></img>
        </h1>
        <div>
          <img src={searchIcon} alt="search-icon"></img>
          <input type="search"></input>
        </div>
      </div>
      <div className={classes['header-icon']}>
      
      </div>
    </div>
  );
};

export default HeaderDesktop;
