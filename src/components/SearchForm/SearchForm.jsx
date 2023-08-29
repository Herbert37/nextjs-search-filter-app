import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeSearch } from 'src/store/search';
import { UserCard } from 'src/components/UserCard/UserCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Suspense } from 'react';
import Loader from 'src/components/Loader/Loader';

export default function SearchForm() {
  const { searchValue, usersResponse } = useSelector((state) => ({
    searchValue: state.search.searchValue,
    usersResponse: state.search.usersResponse,
  }));
  const dispatch = useDispatch();
  const router = useRouter();

  const onChangeText = (event) => {
    dispatch(onChangeSearch(event.target.value));
  };

  const removeLeadingSpaces = (searchValue) => {
    return searchValue.replace(/^\s+/, '');
  };

  const searchUsersHandler = () => {
    router.push(`/item?search=${removeLeadingSpaces(searchValue)}`);
  };

  return (
    <Container maxWidth='md'>
      <Grid container spacing={2}>
        <Grid item xs={12} spacing={2}>
          <br></br>
          <Typography variant='h4' color={'text.primary'} gutterBottom>
            Search an user
          </Typography>
        </Grid>
        <Grid item xs={10} md={11} spacing={2}>
          <TextField
            fullWidth
            size='small'
            type='text'
            onChange={(event) => onChangeText(event)}
            value={searchValue}
            variant='filled'
            label='Type name or email'
            color='secondary'
          />
        </Grid>
        <Grid item xs={2} md={1} spacing={2}>
          <IconButton
            onClick={searchUsersHandler}
            aria-label='search'
            size='large'
            color='secondary'
            disabled={ searchValue == '' || searchValue.trim().length == 0 }
          >
            <SearchIcon />
          </IconButton>
        </Grid>
        <Suspense fallback={<Loader />}>
          {usersResponse.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </Suspense>
      </Grid>
    </Container>
  );
}
