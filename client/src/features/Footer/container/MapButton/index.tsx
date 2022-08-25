import Image from 'next/image';
import { Box, Button } from '@mui/material';
import Map from '@public/assets/svg/map.svg';
import styles from '@styles/Footer.module.css';

export const MapButton: React.FC = () => {
  return (
    <Box className={styles.mapButton}>
      <Box
        sx={{
          zIndex: 8,
          pointerEvents: 'auto',
          whiteSpace: 'nowrap',
          margin: 0,
        }}
      >
        <Button
          variant="contained"
          sx={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'black',
            color: '#000',
            borderRadius: '24px',
            padding: '14px 19px',
            border: 'none',
            outline: 'none',
            margin: 0,
            touchAction: 'manipulation',
            transition: 'transform .25s ease, box-shadow .25s ease',
            borderStyle: 'solid',
            borderWidth: '1px',
            '&:hover': {
              background: 'black',
              transform: 'scale(1.04)',
              borderColor: 'rgba(0, 0, 0, 0.08) !important',
              boxShadow:
                '0px 0px 0px 1px transparent, 0px 0px 0px 4px transparent, 0px 6px 16px rgb(0 0 0 / 12%) !important',
            },
          }}
        >
          <Box
            component="span"
            sx={{
              display: 'flex',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '18px',
            }}
          >
            <Box
              component="span"
              sx={{ display: 'inline-flex', alignSelf: 'center' }}
            >
              Show map
            </Box>
            <Box
              sx={{
                display: 'inline-flex',
                alignSelf: 'center',
                marginLeft: '8px',
              }}
            >
              <Image src={Map} alt="MapIcon" height="16px" width="16px" />
            </Box>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
