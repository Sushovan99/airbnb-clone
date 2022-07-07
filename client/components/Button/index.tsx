import { Button } from '@mui/material';

interface Props {
  text: string;
}

export const CustomBtn = (props: Props) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: '300px',
        boxShadow: 'none',
        backgroundImage:
          'linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)',
        '&:hover': { boxShadow: 'none' },
      }}
    >
      {props.text}
    </Button>
  );
};
