import classes from './MegaMenuItems.module.css';
import MegaMenuItemsGroup from './MegaMenuItemsGroup';
import { GROUPS } from './assets/data/data';


const MegaMenuItems = (props) => {

  return(
    <div className={`${classes.container} col-12`} onMouseLeave={props.onMouseLeave}>
      <div className={classes['mega-menu']}>
        <div className={classes['mega-menu-sidebar']}>
          <MegaMenuItemsGroup group = {GROUPS[0]}/>

        </div>
        <div className={classes['mega-menu-body']}></div>
      </div>
    </div>
  );
};

export default MegaMenuItems;