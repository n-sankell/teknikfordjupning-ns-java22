import { useEffect, useState } from 'react';
import { Configuration, ConfigurationParameters, GreetingsApi, DefaultConfig } from './generated';
import Content from './app/components/Content';
import './App.css';

const newConfiguration: ConfigurationParameters = {
  basePath: "http://localhost:8080"
};
DefaultConfig.config = new Configuration(newConfiguration);
const greetingsApi = new GreetingsApi();

function App() {
  const [content, setContent] = useState(<></>);

  const dummyFetch = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };

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
    dummyFetch();
    fetchGreetings();
  }, []);

  return (
    <div className="App">
      <main>
        {content}
      </main>
    </div>
  );
}

export default App;
