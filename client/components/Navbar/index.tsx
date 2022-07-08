import Image from 'next/image';
import Link from 'next/link';

import AirbnbLogo from '../../public/Airbnb.svg';
import styles from '../../styles/Navbar.module.css';
import { Button, ButtonGroup, IconButton, Stack, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
import { Menu } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

const LeftGroup = () => {
  return (
    <div className={styles.leftGroup}>
      <Link href="/">
        <a aria-label="airbnb-logo">
          <Image src={AirbnbLogo} alt="Image" objectFit="contain" />
        </a>
      </Link>
    </div>
  );
};

const MidGroup = () => {
  return (
    <div className="midGroup">
      <ButtonGroup
        variant="text"
        aria-label="filter group"
        sx={{
          border: '1px solid var(--border-color)',
          borderRadius: '30px',
          paddingLeft: '10px',
          boxShadow:
            'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          transition: 'all .2s ease-in',
          '&:hover': {
            boxShadow:
              ' rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
          },
        }}
      >
        <Button>Anywhere</Button>
        <div className={styles.separator}></div>
        <Button>Any week</Button>
        <div className={styles.separator}></div>
        <Stack direction="row">
          <Button sx={{ color: 'var(--text-light)', border: 'none' }}>
            Add guests
          </Button>
          <IconButton aria-label="search">
            <SearchIcon
              fontSize="medium"
              sx={{
                backgroundColor: 'primary.main',
                borderRadius: '50%',
                color: 'white',
                padding: '6px',
                fontSize: '30px',
              }}
            />
          </IconButton>
        </Stack>
      </ButtonGroup>
    </div>
  );
};

const RightGroup = () => {
  return (
    <div className={styles.rightGroup}>
      <Button
        sx={{
          color: 'primary.dark',
          padding: '0 12px',
          borderRadius: '20px',
          '&:hover': { backgroundColor: grey[100] },
        }}
      >
        Become a host
      </Button>
      <IconButton
        sx={{
          color: 'primary.dark',
        }}
      >
        <LanguageIcon />
      </IconButton>
      <Button
        sx={{
          borderRadius: '20px',
          border: '1px solid var(--border-color)',
          marginLeft: '4px',
          '&:hover': {
            boxShadow:
              ' rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
          },
        }}
      >
        <Menu fontSize="small" />
        <PersonIcon
          sx={{
            backgroundColor: 'var(--text-light)',
            color: 'white',
            borderRadius: '50%',
            marginLeft: '8px',
          }}
        />
      </Button>
    </div>
  );
};

export const Navbar = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '80px',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <nav className={styles.nav}>
        <LeftGroup />
        <MidGroup />
        <RightGroup />
      </nav>
    </Box>
  );
};
