const ShowArray = () => {
  const movies = [
    "Princesa Mononoke",
    "El viaje de chihiro",
    "El castillo ambulante",
    "Mi vecino Totoro",
  ];
  const listMovies = movies.map((movie, index) => <li key={index}>{movie}</li>);
  return <ul>{listMovies}</ul>;
};

export default ShowArray;
