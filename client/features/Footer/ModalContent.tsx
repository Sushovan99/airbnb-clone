import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

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
    <ul key={title} style={{ color: 'var(--text-dark)' }}>
      {links.map((link) => {
        return (
          <li key={link} style={{ listStyle: 'none', marginTop: '12px' }}>
            <Button
              variant="text"
              sx={{
                '&:hover': { textDecoration: 'underline' },
                fontWeight: '300',
                padding: '0',
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
    <Grid
      container
      columns={16}
      sx={{
        fontSize: '14px',
        padding: '0 80px',
        marginTop: '48px',
        marginBottom: '66px',
      }}
    >
      {content.map(({ title, links }) => {
        return (
          <Grid item key={title} xs={4}>
            <Box>
              <Typography
                variant="h3"
                sx={{ fontWeight: 'bold', fontSize: '14px' }}
              >
                {title}
              </Typography>
            </Box>
            <Box>
              <RenderLinks title={title} links={links} />
            </Box>
          </Grid>
        );
      })}
      <IconButton
        aria-label="close"
        size="small"
        sx={{
          display: 'inline-block',
          position: 'absolute',
          top: '4%',
          left: '1%',
          color: 'black',
        }}
        onClick={() => close()}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Grid>
  );
};
