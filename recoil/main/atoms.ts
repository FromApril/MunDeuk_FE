import { atom } from "recoil";

export const mainAtom = atom({
  key: "main/mainState",
  default: {
    isScrollDown: false,
  },
});
