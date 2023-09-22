import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import useFetch from './hooks/useFetch'

function App() {
  const { data, loading } = useFetch("categories");
  const [content, setContent] = useState<CategoryContent[]>([]);

  useEffect(() => {
    if (!loading) {
      const categories: Array<string> = data;
      const fetchByCategory = async (category: string) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}videos?category_like=${category}`);
          const data = await response.json();
          return data;
        } catch (error) {
          console.error(error);
          return [];
        }
      }
      const content = categories.map(async(item) => {
        const payload = await fetchByCategory(item);
        return {
          title: item,
          payload
        }
      });
      Promise.all(content).then((data) => setContent(data));
    }
  }, [loading]);

  // useEffect(() => {
  //   console.log(content);
  // }, [content])

  return (
    <>
      <Header categories={data} />
      <Main content={content} />
    </>
  )
}

export default App
