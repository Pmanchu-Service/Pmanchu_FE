import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Mypage_me } from './pages/Mypage_me';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mypage_me" element={<Mypage_me />} />
      </Routes>
    </BrowserRouter>
  );
};
