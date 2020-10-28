const loggedUser = (state = false, action) => {
  switch (action.tyoe) {
    case 'SIGN_IN':
      return !state;
    default:
      return state;
  }
};

export default loggedUser;
