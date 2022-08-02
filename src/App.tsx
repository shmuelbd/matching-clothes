import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";
import RouterComponent from "./pages/router";
import { Provider } from 'react-redux'
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <RouterComponent />
      </BrowserRouter>
    </Provider>

  );
}

export default App;
