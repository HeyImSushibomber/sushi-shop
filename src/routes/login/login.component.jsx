import {
  signInWithGooglePopup,
  auth,
  createUserDocumentFromAuth,
} from "./../../utils/firebase/firebase.utils";

const Login = () => {
  const handleOnClick = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    const user = await createUserDocumentFromAuth(response);
    console.log(user);
  };

  return (
    <div>
      <button onClick={handleOnClick}>Sign In with Google</button>
    </div>
  );
};

export default Login;
