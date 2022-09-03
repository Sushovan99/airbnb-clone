import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FavouriteIcon from '@public/assets/svg/like.svg';
import { rooms } from '@data/Rooms';
import styles from './Rooms.module.css';

export const Rooms: React.FC = () => {
  return (
    <Box className={`${styles.containerGrid}`}>
      {rooms.map((room) => (
        <div key={room.id} className={styles.card}>
          <Box
            sx={{
              borderRadius: '10px',
              position: 'relative',
            }}
          >
            <Image
              src={room.imageURL}
              alt={room.place}
              height="100%"
              width="100%"
              objectFit="cover"
              layout="responsive"
              priority
              style={{ borderRadius: '10px' }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 14,
                right: 14,
                width: '25px',
                height: '25px',
              }}
            >
              <Image src={FavouriteIcon} alt="like-icon" />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Box
                component="div"
                sx={{
                  width: '200px',
                  fontSize: '15px',
                  fontWeight: '500',
                  letterSpacing: 0,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {room.place}, {room.country}
              </Box>
              <Box
                sx={{
                  letterSpacing: 0,
                  fontSize: '14px',
                  color: 'var(--text-light)',
                }}
              >
                {room.distance}
              </Box>
              <Box
                sx={{
                  letterSpacing: 0,
                  fontSize: '14px',
                  color: 'var(--text-light)',
                }}
              >
                {room.checkIn.toDateString().substring(8, 10)}{' '}
                {room.checkIn
                  .toLocaleString('default', { month: 'long' })
                  .substring(0, 3)}
                {'-'}
                {room.checkOut.toDateString().substring(8, 10)}{' '}
                {room.checkOut
                  .toLocaleString('default', { month: 'long' })
                  .substring(0, 3)}
              </Box>
              <Box
                sx={{ fontWeight: 500, fontSize: '15px', paddingTop: '5px' }}
              >
                &#8377;{room.price.toLocaleString('en-IN')}{' '}
                <Box
                  component="span"
                  sx={{ fontSize: '15px', fontWeight: 300 }}
                >
                  night
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                fontSize: '15px',
                display: 'flex',
                textAlign: 'center',
                alignItems: 'start',
              }}
            >
              <Box component="span">
                <StarIcon
                  sx={{
                    fontSize: '15px',
                    marginTop: '3px',
                    marginRight: '1px',
                  }}
                />
              </Box>
              <div>{room.ratings}</div>
            </Box>
          </Box>
        </div>
      ))}
    </Box>
  );
};
