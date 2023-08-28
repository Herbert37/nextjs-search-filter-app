import React, { lazy } from 'react';
const SearchForm = lazy(() => import('@/components/SearchForm'));

function IndexPage() {
  return (
    <>
      <div>IndexPage</div>
      <SearchForm />
    </>
  )
}
export default IndexPage;