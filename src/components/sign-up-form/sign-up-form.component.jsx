import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-up-form.styles.scss";

const defaultSignUpInfo = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [signUpInfo, SetSignUpInfo] = useState(defaultSignUpInfo);
  const { displayName, email, password, confirmPassword } = signUpInfo;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    SetSignUpInfo({ ...signUpInfo, [name]: value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      SetSignUpInfo(defaultSignUpInfo);
    } catch (error) {
      console.log("user creation encountered an error", error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>I do not have a account</h2>
      <h3>Sign up with your email and password</h3>

      <form
        name="signUpForm"
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
      >
        <FormInput
          label="Display Name"
          type="name"
          name="displayName"
          value={displayName}
          required
        ></FormInput>
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

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
        ></FormInput>
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
