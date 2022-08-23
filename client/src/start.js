import ReactDOM from "react-dom";
import App from "./app";
import { createStore, applyMiddleware } from "redux";
import * as immutableState from "redux-immutable-state-invariant";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(immutableState.default()))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("main")
);

// function App() {
//     return (
//         <>
//             <React.StrictMode>
//                 <App />
//             </React.StrictMode>
//         </>
//     );
// }

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "../style.css";
// import App from "./app";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <>
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     </>
// );
