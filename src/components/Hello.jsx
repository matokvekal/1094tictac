import { userName } from "../states/recoil";
import { useRecoilState } from "recoil";
import "./hello.css";

function Hello() {
  const [user, setUser] = useRecoilState(userName);
  return (
    <>
      <div className="mainhello">
        <div className="title">Hi {user} , Welcome to my game</div>
      </div>
    </>
  );
}

export default Hello;
