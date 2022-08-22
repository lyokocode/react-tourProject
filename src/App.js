import { useEffect, useState } from 'react';
import './index.css';
import Loading from './components/Loading';
import Tours from './components/Tours';

function App() {
  const url = "https://6302e5589eb72a839d754429.mockapi.io/tour"
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
  }

  const fetchTours = async () => {

    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])


  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main className='noTours'>
        <h1> no tours left</h1>
        <button onClick={fetchTours}>refresh</button>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
