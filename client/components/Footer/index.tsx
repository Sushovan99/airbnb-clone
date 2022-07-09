import { Box, Button } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Link from 'next/link';
import styles from '../../styles/Footer.module.css';
import { useState } from 'react';
import { CustomModal } from '../Modal';
import { ModalContent } from './ModalContent';

export const Footer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Button variant="text" startIcon={<LanguageIcon />}>
            <Link href="#">
              <a>English</a>
            </Link>
          </Button>
          <Button
            variant="text"
            endIcon={<KeyboardArrowUpIcon />}
            onClick={handleOpen}
          >
            <Link href="#">
              <a>Support & resources</a>
            </Link>
          </Button>
          <CustomModal
            open={open}
            close={handleClose}
            width="100vw"
            direction="up"
          >
            <ModalContent close={handleClose} />
          </CustomModal>
        </Box>
      </div>
    </footer>
  );
};
