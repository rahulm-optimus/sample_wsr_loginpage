import { MsalProvider } from "@azure/msal-react";
import "./App.css";
import WrapperView from "./wrapper/WrapperView";

function App({ instance }) {
  return (
    <MsalProvider instance={instance}>
      <WrapperView/>
    </MsalProvider>
  );
}

export default App;
