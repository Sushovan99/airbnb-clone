import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Box } from '@mui/material';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};
