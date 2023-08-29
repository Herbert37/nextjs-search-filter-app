import axios from 'axios';
import { USERS_API_URL } from 'src/environment';

export default async function handler(req, res) {debugger;
  try {
    const {
      query: { search },
    } = req;debugger;
    const response = await axios.get(USERS_API_URL);
    const searchResults = response.data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
    res.status(200).json(searchResults.splice(0, 4));
  } catch (error) {
    res.status(500).json({ error: 'The service is unavailable temporary' });
  }
}
