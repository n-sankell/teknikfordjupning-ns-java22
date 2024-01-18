import { useEffect, useState } from 'react';
import { FoodsApi } from './generated';
import Content from './app/components/Content';
import Header from './app/components/Header';
import './App.css';
import AddFoodModal from './app/components/AddFoodModal';

const foodsApi = new FoodsApi();

function App() {
  const [content, setContent] = useState(<></>);
  const [doFetch, setDoFetch] = useState<boolean>(true);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

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
  }, [doFetch]);

  const addFoodModal = <AddFoodModal setUpdate={setDoFetch} setShowAddModal={setShowAddModal} />

  return (
    <div className="App">
      <Header setShowAddModal={setShowAddModal} setShowEditModal={setShowEditModal} />
      <main className="main">
        { content }
        { showAddModal ? addFoodModal : "" }
      </main>
    </div>
  );
}

export default App;
