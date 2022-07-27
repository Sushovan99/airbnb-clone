import Image from 'next/image';
import Link from 'next/link';
import AirbnbLogo from '../../public/Airbnb.svg';

export const LeftGroup = () => {
  return (
    <div style={{ display: 'block', width: '100px', maxHeight: '80px' }}>
      <Link href="/">
        <a
          aria-label="airbnb-logo"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            height: '80px',
          }}
        >
          <Image src={AirbnbLogo} alt="Airbnb Logo" objectFit="cover" />
        </a>
      </Link>
    </div>
  );
};
