import { useEffect, useState } from 'react';
import { GreetingsApi } from './generated';
import Content from './app/components/Content';
import Header from './app/components/Header';
import './App.css';

const greetingsApi = new GreetingsApi();

function App() {
  const [content, setContent] = useState(<></>);

  async function fetchGreetings(): Promise<void> {
    try {
      const greetings = await greetingsApi.getGreetings();
      setContent(<Content greetings={greetings} />)
    } catch (error) {
      console.error('Error fetching greetings');
    }
  };
  
  useEffect((): void => {
  }, [content]);

  useEffect((): void => {
    fetchGreetings();
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
