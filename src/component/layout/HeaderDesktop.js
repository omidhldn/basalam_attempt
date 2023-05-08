import classes from "./HeaderDesktop.module.css";
import logo from "./assets/basalam-logotype.svg";
import { ReactComponent as SearchIcon } from "./assets/search.svg";
import { ReactComponent as Cart } from "./assets/cart.svg";
import { ReactComponent as Register } from "./assets/person.svg";
import { ReactComponent as Profile } from "./assets/emoji-smile.svg";
import { ReactComponent as Chats } from "./assets/chat.svg";
import MegaMenu from "./MegaMenu";
import OmidHack from "./OmidHack";

const HeaderDesktop = (props) => {
  return (
    <>
      <header className={`${classes.container} row`}>
        <div className={`${classes["logo"]} col-1`}>
          <h1>
            <img src={logo} alt="basalam-logo"></img>
          </h1>
        </div>
        <div className={`${classes.search} col-6`}>
          <SearchIcon className={classes["search-icon"]} />
          <input type="search" placeholder="جستجو در بازار"></input>
        </div>

        <div className={`${classes["header-icons"]} col-5`}>
          <span className={classes["header-icon"]}>
            <Cart />
            <span className={classes.badge}>1</span>
            <span>سبد خرید</span>
          </span>
          <span className={classes["header-icon"]}>
            <Register />
            <span>ثبت نام</span>
          </span>
          <span className={classes["header-icon"]}>
            <Profile />
            <span>پروفایل</span>
          </span>
          <span className={classes["header-icon"]}>
            <Chats />
            <span>پیام</span>
          </span>
        </div>
      </header>
      <OmidHack/>
      <MegaMenu />
    </>
  );
};

export default HeaderDesktop;
