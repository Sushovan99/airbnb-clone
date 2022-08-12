import { Box, Modal, Slide } from '@mui/material';
import { FC } from 'react';
type TransitionDirection = 'right' | 'left' | 'up' | 'down';

interface ICustomModal {
  open: boolean;
  close: Function;
  style?: Object;
  direction: TransitionDirection;
  children: React.ReactNode;
}

export const CustomModal: FC<ICustomModal> = ({
  open,
  close,
  style,
  direction: transistionDirection,
  children,
}: ICustomModal) => {
  return (
    <Modal open={open} onClose={() => close()} keepMounted closeAfterTransition>
      <Slide
        direction={transistionDirection}
        in={open}
        mountOnEnter
        unmountOnExit
      >
        <Box sx={style}>{children}</Box>
      </Slide>
    </Modal>
  );
};
