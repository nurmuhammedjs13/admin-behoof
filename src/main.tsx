import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./components/store/store.tsx";
import firebaseConfig from "./firebase/config.ts";

firebaseConfig();
ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>
);
