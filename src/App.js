import { createBrowserRouter, Outlet} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login'
import Body from './components/Body';
import { Provider } from 'react-redux';
import AppStore from './utils/storeutils/AppStore';
import Browse from './components/Browse';

function App() {

  return (
    <Provider store={AppStore}>
        <div>
          <Header/>
          <Outlet/>
        </div>
    </Provider>
  );
}

export const AppRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/login",
        element: <Login />
      },
      {
        path: "/browse",
        element: <Browse/>
      },
    ]
  }
  
]);

export default App;
