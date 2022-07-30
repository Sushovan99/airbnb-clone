import { Navbar } from 'features/Navbar';
import { Footer } from 'features/Footer';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
