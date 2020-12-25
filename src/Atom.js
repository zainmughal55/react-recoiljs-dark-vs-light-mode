import { atom, selector } from "recoil";

export const btnState = atom({
  key: "btnState",
  default: false
});

export const toggleBtnState = selector({
  key: "toggleBtnState",
  set: ({ get, set }) => {
    const currentValue = get(btnState);
    set(btnState, !currentValue);
  }
});
