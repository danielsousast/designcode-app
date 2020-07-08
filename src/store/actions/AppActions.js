export function closeMenu() {
  return {
    type: "CLOSE_MENU",
  };
}

export function openMenu() {
  return {
    type: "OPEN_MENU",
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
