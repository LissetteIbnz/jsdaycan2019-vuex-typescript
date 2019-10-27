/** Root State */
export interface RootState {
  loading: boolean;
  snackbar: Snackbar;
}

export interface Snackbar {
  message: string;
  type?: "success" | "info" | "error";
}

export const initialRootState: RootState = {
  loading: false,
  snackbar: {
    message: "",
    type: undefined,
  },
};
