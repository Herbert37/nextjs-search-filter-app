import { useDispatch, useSelector } from 'react-redux';
import { onChangeSearch } from 'src/store/search';

export default function SearchForm() {
  const { searchValue, usersResponse } = useSelector((state) => ({
    searchValue: state.search.searchValue,
    usersResponse: state.search.usersResponse,
  }));
  const [usersFiltered, setUsersFiltered] = useState([]);
  const dispatch = useDispatch();

  const onChangeText = (event) => {
    dispatch(onChangeSearch(event.target.value));
  };

  const searchUsersHandler = (query) => {
    query = query.toLowerCase();

    return usersResponse.filter((user) => {
      const name = user.name.toLowerCase();
      const email = user.email.toLowerCase();

      return name.includes(query) || email.includes(query);
    });
  };

  return (
    <section>
      <h1>Search an user</h1>
      <input type="text" onChange={(event) => onChangeText(event)} value={searchValue} />
      <button onClick={searchUsersHandler(searchValue)}>Search</button>
    </section>
  );
}
