import { AppBar, Button, Container, Toolbar } from '@mui/material';

export default function Menu({ }) {
  return (
      <AppBar sx={{ backgroundColor: 'rgb(0,0,0,0.6)' }} position="sticky">
        <Toolbar>
          <Container maxWidth="md" sx={{ padding: '0rem !important' }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
          </Container>
        </Toolbar>
      </AppBar>
    
  );
}
