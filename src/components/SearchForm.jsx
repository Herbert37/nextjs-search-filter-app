import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeSearch } from 'src/store/search';
import { UserCard } from 'src/components/UserCard';

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

  const searchUsersHandler = () => {
    router.push(`/item?search=${searchValue}`);
  };

  return (
    <section>
      <h1>Search an user</h1>
      <input type="text" onChange={(event) => onChangeText(event)} value={searchValue} />
      <button onClick={searchUsersHandler}>Search</button>
      {usersResponse.map((user, index) => (
        <UserCard key={index} {...user} />
      ))}
    </section>
  );
}
