import classes from "./logistics-item.module.css";

function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <li>
      {/* <span className={classes.icon}>
        <Icon />
      </span> */}
      <span>
        {props.children}
        </span>
    </li>
  );
}

export default LogisticsItem;
