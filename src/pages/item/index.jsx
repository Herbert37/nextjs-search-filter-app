import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Item() {
  const router = useRouter();
  const { search } = router.query;

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (search) {
        try {
          const response = await axios.get(`/api/users?search=${search}`);
          setSearchResults(response.data);
        } catch (error) {
          console.log({ error });
          console.error('Error fetching search results:', error);
        }
      }
    }

    fetchData();
  }, [search]);

  return (
    <div>
      <h1>Search Results for {search}</h1>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result?.name}</li>
        ))}
      </ul>
    </div>
  );
}
