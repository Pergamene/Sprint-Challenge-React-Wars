import axios from 'axios';

class GetRequest {

  static async getRequst(pageNumber) {
    const url = `https://swapi.co/api/people/?page=${pageNumber}&format=json`;
    const response = await axios.get(url);
    return response.data.results;
  }
}

export default GetRequest;
