import { useDispatch } from 'react-redux';
import { fetchItems } from 'src/store/search';
import { useEffect } from 'react';

export default function GetItems() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchItems());
	}, []);

	return null;
}