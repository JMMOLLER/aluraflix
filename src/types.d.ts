interface Movie {
  title: string;
  description: string;
  image: string;
}

interface CategoryContent {
  title: string;
  payload: Movie[];
}