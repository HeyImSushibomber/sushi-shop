import { useState } from "react";

const useHasLoggedIn = (defaultValue = false) => {
  const [hasLoggedIn, setHasLoggedIn] = useState(defaultValue);

  return {
    hasLoggedIn,
    toggle: () => setHasLoggedIn((prev) => !prev),
    enable: () => setHasLoggedIn(true),
    disable: () => setHasLoggedIn(false),
  };
};

export default useHasLoggedIn;
