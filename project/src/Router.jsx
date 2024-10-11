import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Mypage } from './pages/Mypage';
import { UserSearchPage } from './pages/UserSearchPage';
import { CheckPostPage } from './pages/CheckPostPage';
import { MainPage } from './pages/MainPage';
import { HeadHuntingPage } from './pages/HeadHuntingPage';
import { Signup } from './pages/Signup';

// import { Mypage_me } from './pages/Mypage_me';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/mypage_me" element={<Mypage_me />} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/usersearch" element={<UserSearchPage />} />
        <Route path="/checkpostpage" element={<CheckPostPage />} />
        <Route path="/HeadHuntingPage" element={<HeadHuntingPage />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
};
