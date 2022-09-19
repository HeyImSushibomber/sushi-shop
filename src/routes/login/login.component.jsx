import {
  signInWithGooglePopup,
  auth,
} from "./../../utils/firebase/firebase.utils";

const Login = () => {
  const handleOnClick = async () => {
    const response = await signInWithGooglePopup(auth, "test", "test123");
    console.log(response);
  };

  return (
    <div>
      <button onClick={handleOnClick}>Login</button>
    </div>
  );
};

export default Login;
