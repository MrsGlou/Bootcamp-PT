import axios from 'axios';

const useAxios = async (options) => {
  return axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default useAxios;
