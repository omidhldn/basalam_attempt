import classes from "./MegaMenuItemsGroup.module.css";

const MegaMenuItemsGroup = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <img
          className={classes.image}
          src={props.group.image}
          alt={props.group.title}
        />
        <span className={classes.title}>{props.group.title}</span>
      </div>
      <span className={classes.arrow}></span>
    </div>
  );
};

export default MegaMenuItemsGroup;
