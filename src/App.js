import MainLayout from "./Layout";
import { BrowserRouter } from 'react-router-dom'

function App(props) {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;
