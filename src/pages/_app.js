const { Provider } = require("react-redux");
import { store } from "../store";

function App({ Component, navigationProps }) {
    const getLayout = Component.getLayout ?? ((page) => page)
    return(
        <Provider store={store}>
            <main>{getLayout(<Component { ...navigationProps} />)}</main>
        </Provider>
    );
}

export default App;