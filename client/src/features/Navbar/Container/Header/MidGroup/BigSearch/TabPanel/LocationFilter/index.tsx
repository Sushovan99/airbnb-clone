import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { LocationDialog } from './LocationDialog';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import {
  setLocationActive,
  updateLocationInput,
} from '@store/feature/tabPanel';
import styles from './Location.module.css';

export const LocationFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLocationFilterActive = useAppSelector(
    (state) => state.tabPanel.location.isActive
  );
  const inputValue = useAppSelector((state) => state.tabPanel.location.value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(updateLocationInput(e.target.value));
  };

  return (
    <Box
      role="button"
      className={`${styles.queryContainer}`}
      onClick={() => dispatch(setLocationActive())}
    >
      <Box
        sx={{
          position: 'relative',
          minWidth: 0,
          display: 'flex',
          flex: '1 0 0%',
          alignItems: 'center',
          margin: '-1px',
        }}
      >
        <label
          className={`${styles.queryBtn} ${
            isLocationFilterActive
              ? styles.queryBtnActive
              : styles.queryBtnInActive
          }`}
          htmlFor="bigsearch-query-location-input"
          tabIndex={0}
          onFocus={() => dispatch(setLocationActive())}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Box
              sx={{
                paddingBottom: '2px',
                fontSize: '12px',
                lineHeight: '16px',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              Where
            </Box>
            <input
              type="text"
              autoCorrect="off"
              autoComplete="off"
              spellCheck={false}
              id="bigsearch-query-location-input"
              name="query"
              placeholder="Search destinations"
              className={styles.locationSearchInput}
              value={inputValue}
              onChange={handleInputChange}
            />
          </Box>
        </label>
        {inputValue.length > 0 && isLocationFilterActive && (
          <Box sx={{ flex: '0 0 0%', position: 'relative', zIndex: 5 }}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                right: '20px',
                transform: 'translateY(-50%)',
              }}
            >
              <IconButton
                aria-label="clear-input"
                sx={{
                  color: 'var(--text-dark)',
                  padding: '5px',
                  backgroundColor: 'var( --background-1)',
                  transition: 'background-color .2s ease',
                  '&:hover': {
                    backgroundColor:
                      'var( --big-search-button_background_hover)',
                  },
                }}
                onClick={() => dispatch(updateLocationInput(''))}
              >
                <CloseIcon sx={{ fontSize: '16px' }} />
              </IconButton>
            </Box>
          </Box>
        )}
        <LocationDialog />
      </Box>
    </Box>
  );
};
