import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './Page/Layout.jsx';
import './Design.css';
import ShoppingListPage from './Page/ShoppingListPage.jsx';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<ShoppingListPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
