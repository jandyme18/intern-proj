import { Login } from "./auth/Login";
import { Search } from "./pages/Search";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { SearchResult } from "./pages/SearchResult";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/search-result" element={<SearchResult />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route index element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;