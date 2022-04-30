import React, {useContext} from "react";

export const VueContext = React.createContext(false);

export const useVueContext = () => useContext(VueContext);
