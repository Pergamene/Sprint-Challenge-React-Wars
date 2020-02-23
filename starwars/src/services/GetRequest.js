import axios from 'axios';

class GetRequest {

  static async getRequst(pageNumber) {
    const url = new URL('https://swapi.co/api/people');
    url.searchParams.append('page', pageNumber);
    url.searchParams.append('format', 'json');
    const response = await axios.get(url);
    // return response.data.results;
    return response.data;
  }
}

export default GetRequest;
