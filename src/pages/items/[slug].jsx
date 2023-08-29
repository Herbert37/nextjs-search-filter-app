import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserDetail } from '@/src/store/search';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Loader from '@/src/components/Loader/Loader';

export default function ItemsPage() {
  const { userDetail, isLoading } = useSelector((state) => ({
    isLoading: state.search.isLoadingUserDetail,
    userDetail: state.search.userDetail,
  }));
  const dispatch = useDispatch();
  const { query } = useRouter();
  const id = query.slug;

  const onGetUserDetail = () => {
    dispatch(fetchUserDetail(id));
  };

  useEffect(() => {
    id && onGetUserDetail();
  }, [query]);

  if (isLoading) return <Loader />;
  return id ? (
    <Container maxWidth='md'>
      <Grid container spacing={2}>
        <Grid item xs={12} spacing={2}>
          <br></br>
          <Typography variant='h4' color={'text.primary'} gutterBottom>
            User detail
          </Typography>
          <Grid item xs={12} spacing={2}>
            <Link href={'/'}>
              <IconButton aria-label='search' size='large' color='secondary'>
                <ArrowBackIcon />
              </IconButton>
            </Link>
          </Grid>
          <Grid item xs={12} md={12} spacing={2}>
            <br></br>
            <Card>
              <CardContent>
                <Typography variant='h5' component='div'>
                  {userDetail?.name}
                </Typography>
                <br></br>
                <Grid container>
                  <Grid item xs={12} md={6} spacing={2}>
                    <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                      <b>Username:</b> {userDetail?.username}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} spacing={2}>
                    <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                      <b>City:</b> {userDetail?.address?.city}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} spacing={2}>
                    <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                      <b>Email:</b> {userDetail?.email.toLowerCase()}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} spacing={2}>
                    <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                      <b>Company:</b> {userDetail?.company?.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} spacing={2}>
                    <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                      <b>Location:</b> {userDetail?.address?.geo?.lat},{' '}
                      {userDetail?.address?.geo?.lng}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  ) : <Loader />;
}
