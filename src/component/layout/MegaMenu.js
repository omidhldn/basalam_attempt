import { useState } from "react";
import classes from "./MegaMenu.module.css";
import MegaMenuItems from "./MegaMenuItems";

const MegaMenu = () => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const mouseEnteredHandler = () => {
    setIsMouseEntered(true);
  };

  const mouseLeaveHandler = (event) => {
    console.log(event);
    setIsMouseEntered(false);
  };
  return (
    <div className={`row ${classes.container}`}>
      <div className={`col-12 `}>
        <ul>
          <li className={classes["mega-menu"]} onMouseEnter={mouseEnteredHandler}>
            <span>
              <span className={classes.bars}>
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span>دسته بندی ها</span>
            </span>
          </li>
          <li>
            <span>نصب اپ</span>
          </li>
          <li>
            <span>غرفه دار شو</span>
          </li>
          <li>
            <span>بازارگردی</span>
          </li>
        </ul>
      </div>
      {isMouseEntered && <MegaMenuItems onMouseLeave={mouseLeaveHandler}/>}
    </div>
  );
};

export default MegaMenu;
