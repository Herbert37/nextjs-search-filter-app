import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from 'src/store/search';
const SearchForm = lazy(() => import('src/components/SearchForm'));

export default function Home() {
  const dispatch = useDispatch();
  const onGetusers = () => {
    dispatch(fetchUsers());
  };

  useEffect(() => {
    onGetusers();
  }, []);

  return (
    <>
      <SearchForm />
    </>
  );
}
