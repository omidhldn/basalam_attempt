import classes from './MegaMenuItem.module.css';

const MegaMenuItem = (props) => {

  return(
    <div className={classes.container}>
      <h5>{props.subgroup.title}</h5>
      <ul>
        {props.subgroup.items.map((el,index) => <li key={index}>{el}</li>)}
      </ul>
    </div>
  );
};

export default MegaMenuItem;