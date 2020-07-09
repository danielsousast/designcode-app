import store from "../index";

export function closeMenu() {
  return {
    type: "CLOSE_MENU",
  };
}

export function openMenu() {
  store.dispatch({
    type: "OPEN_CARD",
  });
}

export function closeCard() {
  return {
    type: "CLOSE_CARD",
  };
}

export function openCard() {
  return {
    type: "OPEN_CARD",
  };
}

export function setAvatar(avatar) {
  return {
    type: "SET_AVATAR",
    avatar,
  };
}

export function setName(name) {
  return {
    type: "SET_NAME",
    name: name,
  };
}
