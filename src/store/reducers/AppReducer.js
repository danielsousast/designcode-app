const initialState = {
  action: "",
  name: "User Name",
  avatar: "",
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLOSE_MENU": {
      return { action: "closeMenu" };
    }
    case "OPEN_MENU": {
      return { action: "openMenu" };
    }
    case "SET_NAME": {
      return { ...state, name: action.name };
    }
    case "SET_AVATAR": {
      return { avatar: action.avatar };
    }
    default:
      return state;
  }
};

export default AppReducer;
