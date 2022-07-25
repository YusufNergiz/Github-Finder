import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Pages/HomePage';
import SearchPage from "./Pages/SearchPage";
import { GithubProvider } from './Contexts/GithubContext';
import NotFoundPage from "./Pages/NotFoundPage";
import { AlertProvider } from './Contexts/AlertContext';
import User from "./Pages/UserPage";

function App() {
  return (
    <BrowserRouter>
        <div>
        <AlertProvider>
        <GithubProvider>
          <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/search' element={<SearchPage />}></Route>
              <Route path="/user/:login" element={<User />}></Route>
              <Route path="/*" element={<NotFoundPage />}></Route>
          </Routes>
          </GithubProvider>
          </AlertProvider>
        </div>
    </BrowserRouter>
  );
}

export default App;
