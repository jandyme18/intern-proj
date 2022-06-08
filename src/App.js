import { Login } from "./auth/Login";
import { Search } from "./contents/Search";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { SearchAPI } from "./components/SearchAPI";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/search-api" element={<SearchAPI />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route index element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;