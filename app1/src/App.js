import React, { Suspense } from "react";
const RemoteApp = React.lazy(() => import("app2/App"));
const Btn = React.lazy(() => import("app2/Button"));
const CSS = import('app2/CSS');
const app2 = import('app2/App');
const Button = import('app2/Button');

setTimeout(() => {
  app2.then(module => {
    console.log('App', module)
  })
  Button.then(module => {
    console.log('Button', module)
  })
  CSS.then(module => {
    console.log('CSS', module)
  })
}, 500)


const App = () => {
  return (
    <div>
      <div style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "greenyellow"
      }}>
        <h1>App1</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <RemoteApp />
        <Btn msg="App2 button" />
      </Suspense>
    </div>)
}


export default App;
