import { FC } from 'react';
import { Search } from '@mui/icons-material';
import { Box, Button, ButtonGroup, IconButton, Stack } from '@mui/material';

interface Props {
  setIsFilterOpen: Function;
  isFilterOpen: boolean;
}

export const MidGroup: FC<Props> = ({
  setIsFilterOpen,
  isFilterOpen,
}: Props) => {
  const separator = {
    width: '.8px',
    height: '30px',
    background: 'var(--border-color)',
  };

  return (
    <Box>
      {isFilterOpen ? (
        <div>Something else</div>
      ) : (
        <ButtonGroup
          variant="text"
          aria-label="filter group"
          onClick={() => setIsFilterOpen((prev: boolean) => !prev)}
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
          <div style={separator}></div>
          <Button>Any week</Button>
          <div style={separator}></div>
          <Stack direction="row">
            <Button
              sx={{
                color: 'var(--text-light)',
                border: 'none',
                fontWeight: 300,
              }}
            >
              Add guests
            </Button>
            <IconButton aria-label="search">
              <Search
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
      )}
    </Box>
  );
};
