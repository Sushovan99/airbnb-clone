import { Box, Button, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from './FooterModal.module.css';

interface Content {
  title: string;
  links: string[];
}

interface ModalContentProps {
  close: Function;
}

const content: Content[] = [
  {
    title: 'Support',
    links: [
      'Help Centre',
      'AirCover',
      'Safety information',
      'Supporting people with disabilities',
      'Cancellation options',
      'Our COVID-19 Response',
      'Report a neighbourhood concern',
    ],
  },
  {
    title: 'Community',
    links: [
      'Airbnb.org: disaster relief housing',
      'Support Afghan refugees',
      'Combating discrimination',
    ],
  },
  {
    title: 'Hosting',
    links: [
      'Try hosting',
      'AirCover for Hosts',
      'Explore hosting resources',
      'Visit our community forum',
      'How to host responsibly',
    ],
  },
  {
    title: 'Airbnb',
    links: [
      'Newsroom',
      'Learn about new features',
      'Letter from our founders',
      'Careers',
      'Investors',
    ],
  },
];

const RenderLinks = ({ title, links }: Content) => {
  return (
    <ul
      key={title}
      style={{ color: 'var(--text-dark)' }}
      className={styles.links}
    >
      {links.map((link) => {
        return (
          <li key={link} style={{ listStyle: 'none', marginTop: '8px' }}>
            <Button
              variant="text"
              sx={{
                '&:hover': { textDecoration: 'underline' },
                fontWeight: '300',
                padding: '0',
                minWidth: 0,
                textAlign: 'left',
              }}
            >
              <Link href="#">
                <a>{link}</a>
              </Link>
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export const ModalContent: React.FC<ModalContentProps> = ({
  close,
}: ModalContentProps) => {
  return (
    <Box className={styles.container}>
      {content.map(({ title, links }) => {
        return (
          <Box key={title} className={styles.linksContainer}>
            <Box className={styles.heading}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                {title}
              </Typography>
            </Box>
            <Box>
              <RenderLinks title={title} links={links} />
            </Box>
          </Box>
        );
      })}
      <IconButton
        aria-label="close"
        size="small"
        sx={{
          position: 'absolute',
          top: '4%',
          left: '1.4%',
          color: 'black',
          '&:hover': {
            backgroundColor: 'rgba(218, 218, 218, 0.7)',
          },
        }}
        onClick={() => close()}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};
