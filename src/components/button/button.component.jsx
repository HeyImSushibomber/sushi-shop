import "./button.styles.scss";

const BUTTON_STYLES_CLASS = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <div>
      <button
        className={`button-container${
          buttonType ? " " + BUTTON_STYLES_CLASS[buttonType] : ""
        }`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
