import { Dialog } from '@mui/material';

interface ICustomDialogBox {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  paperStyles: Object;
}

export const CustomDialog: React.FC<ICustomDialogBox> = (
  props: ICustomDialogBox
) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      PaperProps={{
        sx: props.paperStyles,
      }}
    >
      {props.children}
    </Dialog>
  );
};
