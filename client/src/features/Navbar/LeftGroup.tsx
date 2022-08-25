import Image from 'next/image';
import Link from 'next/link';
import Airbnb from '@public/Airbnb.svg';
import { Box } from '@mui/material';

export const LeftGroup = () => {
  return (
    <div
      style={{
        display: 'block',
        width: '100px',
        maxHeight: '80px',
        position: 'relative',
      }}
    >
      <Link href="/">
        <a
          aria-label="airbnb-logo"
          style={{
            display: 'inline-block',
            borderRadius: '10px',
          }}
        >
          <Box
            sx={{
              paddingY: '12px',
              paddingX: '8px',
            }}
          >
            <Image
              src={Airbnb}
              alt="Airbnb Logo"
              width="100px"
              layout="fixed"
              priority
            />
          </Box>
        </a>
      </Link>
    </div>
  );
};
