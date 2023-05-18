import { useState } from 'react';
import MegaMenuItem from './MegaMenuItem';
import classes from './MegaMenuItems.module.css';
import MegaMenuItemsGroup from './MegaMenuItemsGroup';
import { GROUPS } from './assets/data/data';


const MegaMenuItems = (props) => {
  // const [selectedGroup, setSelectedGroup] = useState({"sub-group":[{title:'',items:[]}]});
  const [bodyContent, setBodyContent] = useState(null);

  const getIdHandler = (id) => {
    // console.log(id);
    const findGroup = GROUPS.find(el => {
      return el.id === id;
    });
    // console.log(findGroup);
    const JSXcontent = findGroup['sub-group'].map(el => <MegaMenuItem subgroup={el}/>);
    setBodyContent(JSXcontent);
  };

  return(
    <div className={`${classes.container} col-12`} onMouseLeave={props.onMouseLeave}>
      <div className={classes['mega-menu']}>
        <div className={classes['mega-menu-sidebar']}>
          
          {GROUPS.map(group => <MegaMenuItemsGroup group = {group} onGetId={getIdHandler} key={group.id}/>)}

        </div>
        <div className={classes['mega-menu-body']}>
          <div className={classes['flex-container']}>
          {/* <MegaMenuItem subgroup={GROUPS[0]['sub-group'][0]}/> */}
          {bodyContent}
          {/* {console.log(selectedGroup['sub-group'])} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuItems;