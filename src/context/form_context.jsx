import React, { useReducer, useContext } from "react";
import { form_reducer as reducer } from "../reducers/form_reducer";

const initialState = {
  name: "",
  email: "",
  country: "Afghanistan",
  city: "",
  street: "",
  zip: "",
  status: "IDLE",
};

const FormContext = React.createContext();

export const FormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const startSubmitting = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    dispatch({ type: "START_SUBMITTING", payload: { property, value } });
  };

  const clearForm = () => {
    dispatch({ type: "CLEAR_FORM" });
  };

  const submitForm = () => {
    dispatch({ type: "SUBMIT_FORM" });
  };
  return (
    <FormContext.Provider
      value={{ ...state, startSubmitting, submitForm, clearForm }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
