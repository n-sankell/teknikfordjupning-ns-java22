import { useEffect, useState } from 'react';
import { Configuration, ConfigurationParameters, GreetingsApi, DefaultConfig } from './generated';
import Content from './app/components/Content';
import './App.css';

const newConfiguration: ConfigurationParameters = {
  basePath: "10.244.0.4:8080"
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
      <main>
        {content}
      </main>
    </div>
  );
}

export default App;
