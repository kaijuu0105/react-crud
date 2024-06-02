import './App.css';
// パスがずれてないか確認、大文字小文字など
import Top from './Views/Top';
import Create from './Views/Create';
import Read from './Views/Read';
import Update from './Views/Update';
import Register from './Views/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      {/* ルーティングの作成 */}
      <Router>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/read" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;