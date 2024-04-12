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
import ModalInfo from '@/src/components/ModalInfo/ModalInfo';

export default function Item() {
  const router = useRouter();
  const { search } = router.query;
  const [searchResults, setSearchResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({ type: '', title: '', description: '', buttonText: '' });

  const closeModalHandler = () => {
    setShowModal(false);
    router.push('/');
  };

  useEffect(() => {
    async function fetchData() {
      if (search) {
        try {
          const response = await axios.get(`/api/users?search=${search}`);
          setSearchResults([]);
          setSearchResults(response.data);
          if(response.data.length){
            setShowResults(true);
          } else{
            setModalInfo({
              type: 'error',
              title: 'Ups!',
              description: `No information found for: ${search}`,
              buttonText: 'New search'
            })
            setShowModal(true);
          }
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
          Search Results for: {search}
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
        {showModal && searchResults != null && (
          <ModalInfo modalInfo={modalInfo} showModal={showModal} closeModalHandler={closeModalHandler} />
        )}
      </Grid>
    </Container>
  );
}
