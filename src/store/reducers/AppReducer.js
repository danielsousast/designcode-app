const initialState = {
  action: "",
  name: "",
  avatar: "https://cl.ly/55da82beb939/download/avatar-default.jpg",
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLOSE_MENU": {
      return { ...state, action: "closeMenu" };
    }
    case "OPEN_MENU": {
      return { ...state, action: "openMenu" };
    }
    case "SET_NAME": {
      return { ...state, name: action.name };
    }
    case "SET_AVATAR": {
      return { ...state, avatar: action.avatar };
    }
    case "CLOSE_CARD": {
      return { ...state, action: "closeCard" };
    }
    case "OPEN_CARD": {
      return { ...state, action: "openCard" };
    }
    case "CLOSE_LOGIN": {
      return { ...state, action: "closeLogin" };
    }
    case "OPEN_LOGIN": {
      return { ...state, action: "openLogin" };
    }
    case "CLOSE_NOTIF": {
      return { ...state, action: "closeNotif" };
    }
    case "OPEN_NOTIF": {
      return { ...state, action: "openNotif" };
    }
    default:
      return state;
  }
};

export default AppReducer;
