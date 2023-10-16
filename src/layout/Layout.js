import { useIsAuthenticated, useMsal } from "@azure/msal-react";

import classes from "./Layout.module.css";
import Button from "../components/button/Button";
import { useEffect, useState } from "react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";

const Layout = (props) => {
  const { instance } = useMsal();
  const [welcomeName, setWelcomeName] = useState(null);
  const isAuthenticated = useIsAuthenticated();

  const handleLogout = () => {
    instance.logout();
  };

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
    const currentUser= instance.getActiveAccount();

    if(currentUser){
      setWelcomeName(currentUser.username)
    }

  }, [instance]);

  return (
    <section className={classes.layoutPage}>
      <div className={classes.wrapperLayoutBox}>
        <h1> Welcome {welcomeName}</h1>

        <div className={classes.logoutBox}>
          <p>Do You want to logout ?</p>
          <Button onClick={handleLogout} btnType="classes.btnWhite">
            Logout
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Layout;
