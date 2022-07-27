import { Box, Modal, Slide } from '@mui/material';
type TransitionDirection = 'right' | 'left' | 'up' | 'down';

export const CustomModal = ({
  open,
  close,
  style,
  direction: transistionDirection,
  children,
}: {
  open: boolean;
  close: Function;
  style: Object;
  direction: TransitionDirection;
  children: React.ReactNode;
}) => {
  return (
    <Modal open={open} onClose={() => close()}>
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
