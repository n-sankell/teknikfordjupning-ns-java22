import { useEffect, useState } from 'react';
import { FoodsApi } from './generated';
import Content from './app/components/Content';
import Header from './app/components/Header';
import './App.css';

const foodsApi = new FoodsApi();

function App() {
  const [content, setContent] = useState(<></>);
  const [doFetch, setDoFetch] = useState<boolean>(true);

  async function fetchFoods(): Promise<void> {
    try {
      const foods = await foodsApi.getFoods();
      setContent(<Content foods={foods} />)
      setDoFetch(false);
    } catch (error) {
      console.error('Error fetching foods');
    }
  };
  
  useEffect((): void => {
  }, [content]);

  useEffect((): void => {
    if (doFetch === true) {
      setDoFetch(false);
      fetchFoods();
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        {content}
      </main>
    </div>
  );
}

export default App;
