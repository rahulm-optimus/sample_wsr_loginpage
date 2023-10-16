
import Button from "../components/button/Button"

import classes from "./LoginPage.module.css"


const LoginPage=(props)=>{

  

   

    return(
        <div className={classes.loginPage}>
        <div className={classes.loginForm}>
          <p>Welcome to  WSR <br/><span className={classes.colorText}>Optimus info.</span></p>

        <Button onClick={props.onClick} className={classes.btn}>Sign-In</Button>
        </div>
      </div>

    )
}

export default LoginPage