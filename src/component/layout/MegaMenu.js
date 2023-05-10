import classes from "./MegaMenu.module.css";
import MegaMenuItems from "./MegaMenuItems";

const MegaMenu = () => {
  return (
    <div className={`row ${classes.container}`}>
      {/* <div className={`col-1`}><span>نصب اپ</span></div>
      <div className={`col-1`}><span>غرفه و</span></div>
      <div className={`col-1`}><span>بازار گردی</span></div>
      <div className={`col-1`}><span>دستها</span></div>
      <div className={`col-8`}><span>test</span></div> */}
      <div className={`col-12 `}>
        <ul>
          <li>
            <span className={classes['mega-menu']}>
              <span className={classes.bars}>
                <MegaMenuItems/>
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
    </div>
  );
};

export default MegaMenu;
