import { Navbar } from '../../features';
import { Footer } from '../../features';
import { Box } from '@mui/material';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};
