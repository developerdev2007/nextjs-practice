import { create } from "zustand";
interface ISignUpStore {
  open: boolean;
  setOpen: (open: true | false) => void;
}

const useSignUp = create<ISignUpStore>((set) => ({
  open: false,
  setOpen: (open: boolean) => {
    set({ open: open });
  },
}));

export default useSignUp;
