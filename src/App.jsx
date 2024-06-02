import './App.css';
// パスがずれてないか確認、大文字小文字など
import Top from './components/top';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
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
        </Routes>
      </Router>
    </main>
  );
}

export default App;