import Link from 'next/link';
import { Box, Button } from '@mui/material';
import { Language, KeyboardArrowUp } from '@mui/icons-material';
import { CustomModal } from '../../components';
import { ModalContent } from './ModalContent';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { modalOpen, modalClose } from '@store/feature/footerModal';
import styles from '@styles/Footer.module.css';

export const Footer = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.footerModal.isModalOpen);
  const handleOpen = () => dispatch(modalOpen());
  const handleClose = () => dispatch(modalClose());

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 14,
            color: 'var(--text-dark)',
            fontWeight: 300,
          }}
        >
          <span>© 2022 Airbnb, Inc.</span>
          <span className={styles.separator}>|</span>
          <Link href="#">
            <a>Privacy</a>
          </Link>
          <span className={styles.separator}>|</span>
          <Link href="#">
            <a>Terms</a>
          </Link>
          <span className={styles.separator}>|</span>
          <Link href="#">
            <a>Sitemap</a>
          </Link>
          <span className={styles.separator}>|</span>
          <Link href="#">
            <a>Company details</a>
          </Link>
          <span className={styles.separator}>|</span>
          <Link href="#">
            <a>Destinations</a>
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Button variant="text" startIcon={<Language />}>
            <Link href="#">
              <a>English</a>
            </Link>
          </Button>
          <Button
            variant="text"
            endIcon={<KeyboardArrowUp />}
            onClick={handleOpen}
          >
            <Link href="#">
              <a>Support & resources</a>
            </Link>
          </Button>
          <CustomModal
            open={open}
            close={handleClose}
            direction="up"
            style={{
              background: 'white',
              position: 'absolute',
              bottom: '0',
              width: '100vw',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              outline: 'none',
            }}
          >
            <ModalContent close={handleClose} />
          </CustomModal>
        </Box>
      </div>
    </footer>
  );
};
