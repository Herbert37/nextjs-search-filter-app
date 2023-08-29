import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserDetail } from '@/src/store/search';

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
    onGetUserDetail();
  }, []);
  if (isLoading) return <h1>...Loading</h1>;
  return <h1>user detail {userDetail?.name}</h1>;
}
