import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const UserCard = ({ id, name, email }) => {
  return (
    <Grid item xs={12} md={6} spacing={2}>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            {email.toLowerCase()}
          </Typography>
          <Typography variant='h5' component='div'>
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={`/items/${id}`}>
            <Button size='small' color='secondary'>
              SEE DETAIL
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};
