import "./App.css";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider} from "react-router-dom";
import appRouter from "./routerConfig";
function App() {
    return (
        <Provider store={store}>
            <div>
                <Head />
                <RouterProvider router={appRouter} />
            </div>
        </Provider>
    );
}

export default App;
