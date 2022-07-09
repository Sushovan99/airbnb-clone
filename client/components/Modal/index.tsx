import { Box, Modal, Slide } from '@mui/material';

// import Link from 'next/link';
// import styles from '../../styles/Modal.module.css';
type TransitionDirection = 'right' | 'left' | 'up' | 'down';

export const CustomModal = ({
  open,
  close,
  width,
  direction: transistionDirection,
  children,
}: {
  open: boolean;
  close: Function;
  width: string;
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
        <Box
          sx={{
            background: 'white',
            position: 'absolute',
            bottom: '0',
            width,
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            outline: 'none',
          }}
        >
          {children}
        </Box>
      </Slide>
    </Modal>
  );
};
