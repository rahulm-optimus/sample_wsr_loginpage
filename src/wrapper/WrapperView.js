import classes from "./WrapperView.module.css";
import React from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";

import Layout from "../layout/Layout";
import LoginPage from "../layout/LoginPage";

const WrapperView = () => {
  const { instance } = useMsal();

  const activeAccount = instance.getActiveAccount();

  function handleRedirect() {
    console.log("redirection");
    instance
      .loginRedirect({
       scopes:["user.read"]
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <React.Fragment>
      <AuthenticatedTemplate>
        {activeAccount ? <Layout /> : null}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <LoginPage onClick={handleRedirect} />
      </UnauthenticatedTemplate>
    </React.Fragment>
  );
};

export default WrapperView;
