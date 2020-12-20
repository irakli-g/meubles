export const form_reducer = (state, action) => {
  if (action.type === "START_SUBMITTING") {
    const { property, value } = action.payload;
    return {
      ...state,
      [property]: value,
      status: "SUBMITTING",
    };
  }
  if (action.type === "SUBMIT_FORM") {
    const { name, email, city, street, zip } = state;
    const regexName = /^[a-zA-Z\s]{2,15}$/gi;
    const regexEmail = /^[a-zA-Z.-_0-9]+@[a-zA-Z0-9]+\.[a-z{2,6}]+(\.[a-zA-Z{2,6}]+)?$/gi;
    const regexCity = /^[a-zA-Z\s]{2,}$/gi;
    const regexStreet = /^[a-zA-Z0-9.-\s]{3,}$/gi;

    if (
      regexName.test(name) &&
      regexEmail.test(email) &&
      regexCity.test(city) &&
      regexStreet.test(street) &&
      zip
    ) {
      return {
        ...state,
        status: "COMPLETE",
      };
    }
    return {
      ...state,
      status: "FAILED",
    };
  }
  if (action.type === "CLEAR_FORM") {
    return {
      name: "",
      email: "",
      country: "Afghanistan",
      city: "",
      street: "",
      zip: "",
      status: "IDLE",
    };
  }
  throw new Error(`Such action ${action.type} was not handled in reducer`);
};
