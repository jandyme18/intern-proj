import Login from "./contents/Login";
import Search from "./contents/Search";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route index element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;