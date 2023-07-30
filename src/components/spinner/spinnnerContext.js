import { createContext } from "react";

const spinnerContext = createContext({
    spinnerAtivo: false,
    setSpinnerAtivo: (param) => {}
});

export default spinnerContext;