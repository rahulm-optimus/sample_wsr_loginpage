import classes from "./WrapperView.module.css";
import React, { useState } from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import Layout from "../pages/Layout"
import LoginPage from "../pages/LoginPage";
import { ThreeDots } from "react-loader-spinner";

const WrapperView = () => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const [isLoading, setLoadingStatus] = useState(false);
  function handleRedirect() {
    console.log("redirection");
    setLoadingStatus(true);
    instance
      .loginRedirect({
        scopes: ["user.read"],
      })
      .then((response) => {
        setLoadingStatus(false);

        console.log(response);
        if (response) {
          setLoadingStatus(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleLogout = () => {
    console.log("redirecting");
    setLoadingStatus(true);
    instance
      .logout()
      .then((response) => {
        console.log(response);
        setLoadingStatus(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      {!isLoading ? (
        <>
          <AuthenticatedTemplate>
            {activeAccount ? <Layout onClick={handleLogout} /> : null}
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <LoginPage onClick={handleRedirect} />
          </UnauthenticatedTemplate>
        </>
      ) : (
        <div className={classes.wrapperRedirection}>
          <h1 className={classes.redirection}>
            redirecting &nbsp;
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="black"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </h1>
        </div>
      )}
    </React.Fragment>
  );
};
export default WrapperView;
