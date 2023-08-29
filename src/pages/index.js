import React, { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'src/store/search';
const SearchForm = lazy(() => import('src/components/SearchForm'));

export default function Home() {
  const { usersResponse } = useSelector((state) => ({
    usersResponse: state.search.usersResponse,
  }));
  const dispatch = useDispatch();

  const onGetusers = () => {
    dispatch(fetchUsers());
  };

  useEffect(() => {
    onGetusers();
  }, []);

  return (
    <>
      <h1>HOME</h1>
      <SearchForm />
    </>
  );
}
