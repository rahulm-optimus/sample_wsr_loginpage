import classes from "./Button.module.css"

const Button = (props)=>{

    let classRecieved=props.btnType




 return (
        <button className={ `${classes.btn} ${classRecieved}`} onClick={props.onClick} >

            {props.children}
        </button>
    )

}



export default Button