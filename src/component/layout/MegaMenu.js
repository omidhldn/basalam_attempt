import classes from './MegaMenu.module.css';

const MegaMenu = () => {

  return(
    <div className={`row ${classes.container}`}>
      <div className={`col-1`}><span>نصب اپ</span></div>
      <div className={`col-1`}><span>غرفه و</span></div>
      <div className={`col-1`}><span>بازار گردی</span></div>
      <div className={`col-1`}><span>دستها</span></div>
      <div className={`col-8`}><span>test</span></div>
    </div>
  );
};

export default MegaMenu;