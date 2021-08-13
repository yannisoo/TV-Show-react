import http from "../http-common";


const get = (query: string) => {
  return http.get(`/search/shows?q=${query}`);
};
const findById = (id: string) => {
  return http.get(`/shows/${id}?embed=cast`);
};
const ShowService = {
  findById,
  get
};

export default ShowService;