import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import classes from "./Layout.module.css";
import Button from "../components/button/Button";
import { useEffect, useState } from "react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";

const Layout = (props) => {
  const { instance } = useMsal();
  const [welcomeName, setWelcomeName] = useState(null);
  const [welcomeEmail, setWelcomeEmail] = useState(null);
  const isAuthenticated = useIsAuthenticated();
  

  useEffect(() => {
    // if(!isAuthenticated){
    // instance.ssoSilent(
    //   {
    //     scopes:["user.read"],
    //     loginHint:""
    //   }
    // ).then((response)=>{
    //   instance.setActiveAccount(response.account);
    // }).catch((error)=>{
    //   if(error instanceof InteractionRequiredAuthError){
    //     instance.loginRedirect({
    //       scopes:["user.read"]
    //     })
    //   }
    // })
    // }
    //to get the email id of the user
    const currentUser = instance.getActiveAccount();
    if (currentUser) {
      setWelcomeName(currentUser.name);
      setWelcomeEmail(currentUser.username)
      console.log(currentUser)
    }
  }, [instance]);

 

  return (
    <section className={classes.layoutPage}>
      <div className={classes.wrapperLayoutBox}>
        <div className={classes.introductionText}>
        <h1 > Welcome 
        </h1>
        <p className={classes.userName}>{welcomeName}</p>
        <p className={classes.userEmail}>{welcomeEmail}</p>

        </div>

        <div className={classes.logoutBox}>
          
          <Button onClick={props.onClick} btnTheme="btnRed">
            Logout
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Layout;
