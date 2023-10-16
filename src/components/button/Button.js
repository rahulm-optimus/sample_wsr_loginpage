import classes from "./Button.module.css";

const Button = (props) => {

  let classRecieved =`${ classes.btn} ${classes[props.btnTheme]}`

  console.log(classRecieved)

  console.log(props)
  return (
    <button
      className={classRecieved}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
