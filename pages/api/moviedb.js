export default async function handler(req, res) {
  try {
    const { params } = req.query
    const result = await getMovies(params || 'trending/all/week')
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
const getMovies =(params)=>{
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    }
  };
 return fetch(`${process.env.NEXT_PUBLIC_MOVIE_DB_URL}/${params}`, options)
  .then(response => response.json())
  .then(json => json)
  .catch(err => err);
}
