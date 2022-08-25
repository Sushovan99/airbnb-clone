import Image from 'next/image';
import { Box, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { updateLocationOnClick } from '@store/feature/tabPanel';
import { renderData } from './data';
import styles from './LocationDialog.module.css';

export const LocationDialog: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLocationFilterActive = useAppSelector(
    (state) => state.tabPanel.location.isActive
  );

  const handleOnClick = (e: React.MouseEvent, value: string) => {
    e.stopPropagation();
    dispatch(updateLocationOnClick(value));
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '100%',
        right: 0,
        left: 0,
        zIndex: 4,
        visibility: isLocationFilterActive ? 'visible' : 'hidden',
        opacity: isLocationFilterActive ? 1 : 0,
      }}
    >
      <Box className={`${styles.container}`}>
        <section>
          <Box
            component="div"
            tabIndex={-1}
            sx={{
              display: 'flex',
              maxWidth: '848px',
              paddingY: '16px',
              paddingX: '8px',
              marginY: 0,
              marginX: '-32px',
            }}
          >
            <Box sx={{ padding: '0 28px 0 44px', margin: '8px 0 16px 0' }}>
              <Box
                sx={{
                  margin: '0 0 28px 5px',
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: '18px',
                }}
              >
                Search by region
              </Box>
              <Box component="div" role="radiogroup">
                <Box className={styles.locationGrid}>
                  {renderData.map((item) => (
                    <Box
                      key={item.sub}
                      sx={{ height: '158px', width: '132px' }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          width: '100%',
                          height: '100%',
                          padding: '4px',
                        }}
                      >
                        <Button
                          className={styles.locationGridBtn}
                          onClick={(e) => handleOnClick(e, item.sub)}
                        >
                          <Image
                            src={item.imgURL}
                            alt={item.sub}
                            layout="fill"
                            priority
                          />
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-end',
                              position: 'absolute',
                              top: 0,
                              width: '100%',
                            }}
                          ></Box>
                        </Button>
                        <Box>
                          <Box
                            sx={{
                              margin: '8px 2px 0 2px',
                              color: 'var(--text-dark)',
                              fontSize: '14px',
                              lineHeight: '18px',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {item.sub}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </section>
      </Box>
    </Box>
  );
};
