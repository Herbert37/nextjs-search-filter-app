import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { UserCard } from 'src/components/UserCard/UserCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Loader from '@/src/components/Loader/Loader';

export default function Item() {
  const router = useRouter();
  const { search } = router.query;
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (search) {
        try {
          const response = await axios.get(`/api/users?search=${search}`);
          setSearchResults(response.data);
          response.data.length ? setShowResults(true) : setShowResults(false);
          setIsLoading(false);
        } catch (error) {
          console.log({ error });
          console.error('Error fetching search results:', error);
        }
      } else {
        setShowResults(false);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [search]);

  if (isLoading) return <Loader />;
  return (
    <Container maxWidth='md'>
      <Grid container spacing={2}>
        <Grid item xs={12} spacing={2}>
          <br></br>
          <Typography variant='h4' color={'text.primary'} gutterBottom>
          `Search Results for "${search}"`
          </Typography>
        </Grid>
        <Grid item xs={12} spacing={2}>
          <Link href={'/'}>
            <IconButton aria-label='search' size='large' color='secondary'>
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </Grid>
        {showResults && searchResults.map((user, index) => <UserCard key={index} {...user} />)}
        {!showResults && (
          <Grid item xs={12} spacing={2}>
            <Card>
              <CardContent>
                <Typography variant='h5' component='div'>
                `No information found for "${search}"`
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
