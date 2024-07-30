import "./App.css";
import Game from "./pages/game/Game";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login/Login";
import Hello from "./components/Hello";

import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <div className="main">
          <div className="hello">
            <Hello />
          </div>
          <div className="login">
            <Login />
          </div>

          <BrowserRouter>
            <div className="showgame">
              <Link to="/game">Show Game</Link>
            </div>
              <Routes>
                <Route path="game" element={<Game />} />
              </Routes>
          </BrowserRouter>
        </div>
      </RecoilRoot>
    </>
  );
}

export default App;
