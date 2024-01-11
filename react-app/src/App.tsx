import { useEffect, useState } from 'react';
import { Configuration, ConfigurationParameters, GreetingsApi, DefaultConfig } from './generated';
import Content from './app/components/Content';
import './App.css';

const newConfiguration: ConfigurationParameters = {
  basePath: process.env.REACT_APP_API_BASE_URL
};
DefaultConfig.config = new Configuration(newConfiguration);
const greetingsApi = new GreetingsApi();

function App() {
  const [content, setContent] = useState(<></>);

  async function fetchGreetings(): Promise<void> {
    try {
      const greetings = await greetingsApi.getGreetings();
      setContent(<Content greetings={greetings} />)
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect((): void => {
  }, [content]);

  useEffect((): void => {
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
