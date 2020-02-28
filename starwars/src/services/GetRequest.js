import axios from 'axios';

class GetRequest {

  static async getRequst(pageNumber) {
    const url = new URL('https://swapi.co/api/people');
    url.searchParams.append('page', pageNumber);
    url.searchParams.append('format', 'json');
    const response = await axios.get(url);
    return response.data;
  }

  static async getRequestSearch(query) {
    const url = new URL('https://swapi.co/api/people');
    url.searchParams.append('search', query);
    url.searchParams.append('format', 'json');
    const response = await axios.get(url);
    return response.data;
  }

  static async getRequestHomeworld(url) {
    const response = await axios.get(url);
    return response.data.name;
  }

  static async getRequestSpecies(url) {
    const response = await axios.get(url);
    return response.data.name;
  }
}

export default GetRequest;
