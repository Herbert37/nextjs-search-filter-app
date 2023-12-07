import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from 'src/store/search';
const Header = lazy(() => import('src/components/Header/Header'));
const SearchForm = lazy(() => import('src/components/SearchForm/SearchForm'));

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
      <Header
        backgroundImage={
          'https://d296xu67oj0g2g.cloudfront.net/lm_cms/images/CMS/DEALS/0923BOSI/RLB_BOSIMILLASADICIONALES.png'
        }
        title={'Searh an user'}
        subtitle={'Lorem ipsum dolor, sit amet consectetur'}
        description={
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum eius quasi ducimus eos, debitis sunt temporibus'
        }
      />
      <SearchForm />
    </>
  );
}
