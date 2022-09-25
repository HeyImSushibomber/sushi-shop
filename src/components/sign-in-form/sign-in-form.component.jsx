import { useState } from "react";

import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "./../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

const defaultSignInInfo = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [signInInfo, setSignInfo] = useState(defaultSignInInfo);
  const { email, password } = signInInfo;

  const resetForm = () => setSignInfo(defaultSignInInfo);

  const handleOnClick = async () => {
    await signInWithGooglePopup();
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const response = await signInAuthWithEmailAndPassword(email, password);
    if (response) resetForm();
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setSignInfo({ ...signInInfo, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <p>Sign in with your email and password</p>

      <form
        name="signInForm"
        onSubmit={handleOnSubmit}
        onChange={handleOnChange}
      >
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          required
        ></FormInput>

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          required
        ></FormInput>
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" onClick={handleOnClick} buttonType="google">
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
