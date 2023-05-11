import { useState } from "react";
import classes from "./MegaMenu.module.css";
import MegaMenuItems from "./MegaMenuItems";

const MegaMenu = () => {
  return (
    <div className={`row ${classes.container}`}>
      <div className={`col-12 `}>
        <ul>
          <li className={classes["mega-menu"]}>
            <span>
              <span className={classes.bars}>
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span>دسته بندی ها</span>
            </span>
            <div className={`${classes['mega-menu-items']} col-12 `}>
              <MegaMenuItems />
            </div>
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
    </div>
  );
};

export default MegaMenu;
