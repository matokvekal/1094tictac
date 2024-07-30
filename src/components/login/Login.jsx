
import { userName  } from "../../states/recoil";
import Images from "../../constants/images";
import {
    useRecoilState,
  } from "recoil";

function Login() {
    const [user, setUser] = useRecoilState(userName);

  return (
    <>
    <img src={Images.play} alt="login" />
     
      <button onClick={()=>setUser("Gilad")}>login</button>
    </>
  );
}

export default Login;
