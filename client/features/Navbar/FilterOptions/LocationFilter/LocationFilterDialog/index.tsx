import React from 'react';
import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { updateWhereInput } from '@store/feature/filterOptions';
import { renderData } from './data';
import styles from './index.module.css';

export const LocationFilterDialog: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLocationFilterActive = useAppSelector(
    (state) => state.filterSearch.where.isActive
  );

  return isLocationFilterActive ? (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'no-wrap',
        padding: '30px 40px',
        width: '57%',
        maxHeight: '3ovh',
        height: 'max-content',
        position: 'absolute',
        top: 80,
        left: 0,
        borderRadius: '30px',
        border: '1px solid var(--border-color)',
        overflowY: 'auto',
      }}
    >
      <Typography
        variant="subtitle2"
        fontWeight={700}
        sx={{
          marginBottom: '25px',
          alignSelf: 'flex-start',
          marginLeft: '15px',
        }}
      >
        Search by region
      </Typography>
      <div className={styles.locationsMapGrid}>
        {renderData.map((data) => (
          <Box
            key={data.sub}
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Button
              sx={{
                borderRadius: '10px',
                padding: 0,
                margin: '4px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  width: 'auto',
                  outline: '1px solid black',
                },
                '&:active': {
                  transform: 'scale(0.95)',
                },
              }}
              onClick={() => dispatch(updateWhereInput(data.sub))}
            >
              <Image
                src={data.imgURL}
                alt={data.sub}
                width="120px"
                height="120px"
                layout="fixed"
                objectFit="cover"
                priority
                style={{ borderRadius: '10px' }}
              />
            </Button>
            <Typography
              variant="subtitle2"
              fontWeight={300}
              sx={{ marginLeft: '8px', marginTop: '4px' }}
            >
              {data.sub}
            </Typography>
          </Box>
        ))}
      </div>
    </Box>
  ) : null;
};
