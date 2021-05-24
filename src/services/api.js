import { filterTypes } from "../constants/constants";

function apiFactory() {
  const getItems = filterType => {
    if (filterTypes[filterType]) {
      return fetch(`https://jsonplaceholder.typicode.com/${filterType}`).then(
        res => res.json()
      );
    }
  };

  return {
    getItems
  };
}

const apiService = apiFactory();
Object.freeze(apiService);

export default apiService;
