export async function fetchBooks() {
  const headers = {
    "X-RapidAPI-Key": "6c8bc481e9mshfe83b877b891299p14807djsnc6fc3875cd91",
    "X-RapidAPI-Host": "all-books-api.p.rapidapi.com",
  };

  const response = await fetch(
    "https://all-books-api.p.rapidapi.com/getBooks",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
