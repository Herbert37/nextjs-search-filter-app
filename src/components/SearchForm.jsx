import { useDispatch, useSelector } from 'react-redux';
import { onChangeSearch } from 'src/store/search';

export default function SearchForm() {
	const { searchValue } = useSelector((state) => ({
		searchValue: state.search.searchValue,
	}));
	const dispatch = useDispatch();

	const onChangeText = (event) => {
		dispatch(onChangeSearch(event.target.value));
	};

	return (
        <section>
            <h1>Search an item</h1>
            <input type="text" onChange={(event) => onChangeText(event)} value={searchValue} />
        </section>
    )
}