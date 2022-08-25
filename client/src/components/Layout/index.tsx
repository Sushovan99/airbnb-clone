import { HeaderContainer } from '@src/features/Navbar/Container';
import { FooterContainer } from '@src/features';
import { Box } from '@mui/material';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ position: 'relative', isolation: 'isolate' }}>
      <HeaderContainer />
      <main>{children}</main>
      <FooterContainer />
    </Box>
  );
};
