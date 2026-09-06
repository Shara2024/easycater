import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/health')
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);

  return <h1>Easy Cater</h1>;
}

export default App;
