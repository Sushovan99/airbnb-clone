import { Box } from '@mui/material';
import { Header } from './Header';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { closeTabPanel } from '@store/feature/tabPanel';

export const HeaderContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const isTabPanelOpen = useAppSelector(
    (state) => state.tabPanel.isTabPanelOpen
  );
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        height: '80px',
        width: '100%',
        zIndex: 10,
        contain: 'size style layout',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          isolation: 'isolate',
          '&::before': { display: 'flex', content: '""' },
          '&::after': { display: 'flex', content: '""' },
        }}
      >
        <Box>
          <Header />
          {isTabPanelOpen && (
            <Box
              component="div"
              sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: '100vh',
                zIndex: 99,
                background: 'rgb(0 0 0 /25%)',
              }}
              onClick={() => dispatch(closeTabPanel())}
            ></Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
