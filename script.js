const { exec } = require("child_process");
let fs = require("fs");
let pages = {
  appPage: `
      function App() {
          return (
              <div>
              Welcome
              </div>
          );}
          
      export default App;`,
  appPageFlex: `
      function App() {
          return (
              <div style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}>
              Welcome
              </div>
          );}
          
      export default App;`,

  indexPage: `
      import React from 'react'
      import ReactDOM from 'react-dom'
      
      import { Provider } from 'react-redux'
      import store from './redux/store'
      
      import App from './App'
      
      const rootElement = document.getElementById('root')
      ReactDOM.render(
          <Provider store={store}>
          <App />
          </Provider>,
          rootElement
      )`,

  store: `
          import { createStore } from "redux";
          import rootReducer from "../reducers/index";
          
          const store = createStore(rootReducer);
          
          export default store;`,

  reducers: `
              import { INCREMENT_COUNT } from "../constants/action-types";
              
              const initialState = {
                  count: 0
              };
              
              function rootReducer(state = initialState, action) {
                  if (action.type === INCREMENT_COUNT) {
                  state.count += 1;
                  }
                  return state;
              }
              
              export default rootReducer;`,

  actions: `
              import { INCREMENT_COUNT } from "../constants/action-types";
              
              export function incrementCount(payload) {
                  return { type: INCREMENT_COUNT, payload };
              }`,
  constants: `
              export const INCREMENT_COUNT = "INCREMENT_COUNT";`,
};

let cleanAppPage = () => {
  fs.writeFileSync("./src/App.js", pages.appPage, "utf-8");
};

let cleanAppPageWithFlex = () => {
  fs.writeFileSync("./src/App.js", pages.appPageFlex, "utf-8");
};

let changeIndexJsFile = () => {
  fs.writeFileSync("./src/index.js", pages.indexPage, "utf-8");
};

let createStore = () => {
  fs.mkdirSync("./src/redux/store", { recursive: true });
  fs.writeFileSync("./src/redux/store/index.js", pages.store, "utf-8");
};

let createReducers = () => {
  fs.mkdirSync("./src/redux/reducers", { recursive: true });
  fs.writeFileSync("./src/redux/reducers/index.js", pages.reducers, "utf-8");
};

let createActions = () => {
  fs.mkdirSync("./src/redux/actions", { recursive: true });
  fs.writeFileSync("./src/redux/actions/index.js", pages.actions, "utf-8");
};

let createConstants = () => {
  fs.mkdirSync("./src/redux/constants", { recursive: true });
  fs.writeFileSync(
    "./src/redux/constants/action-types.js",
    pages.constants,
    "utf-8"
  );
};

let createActionWithReducer = (actionName) => {
  let actionType = `\nexport const ${actionName} = "${actionName}";`;

  fs.appendFile(
    "./src/redux/constants/action-types.js",
    actionType,
    function (err) {
      if (err) throw err;
      // console.log('Saved!');
    }
  );

  let action = `\nimport { ${actionName} } from "../constants/action-types";
  \nexport function ${actionName.toLowerCase()}(payload) {
    return { type: ${actionName}, payload };
  }
  `;

  fs.appendFile("./src/redux/actions/index.js", action, function (err) {
    if (err) throw err;
    // console.log('Saved!');
  });
};

// to do remove index.css, app.css, remove logos


exec("yarn add redux");
exec("yarn add react-redux");
exec('yarn add @material-ui/core')
exec('yarn add @material-ui/icons')

cleanAppPageWithFlex();
changeIndexJsFile();
createStore();
createReducers();
createActions();
createConstants();
