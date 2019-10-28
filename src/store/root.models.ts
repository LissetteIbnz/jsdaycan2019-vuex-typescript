/** Root State */
export interface RootState {
  loading: boolean;
  snackbar: Snackbar;
}

interface Snackbar {
  message: string;
  isActive: boolean;
  type?: "success" | "info" | "error";
}

export type SetSnackbar = Pick<RootState["snackbar"], "message" | "type">;

export const initialRootState: RootState = {
  loading: false,
  snackbar: {
    message: "",
    isActive: false,
    type: undefined,
  },
};
