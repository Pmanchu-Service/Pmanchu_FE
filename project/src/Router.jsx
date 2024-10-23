import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Mypage } from "./pages/Mypage";
import { UserSearchPage } from "./pages/UserSearchPage";
import { CheckPostPage } from "./pages/CheckPostPage";
import { MainPage } from "./pages/MainPage";
import { HeadHuntingPage } from "./pages/HeadHuntingPage";
import { Signup } from "./pages/Signup";
import { ProjectForm } from "./pages/ProjectFormPage";
import { WritePostPage } from "./pages/WritePostPage";
import { LoginPage } from "./pages/LoginPage";
import { ViewPeoplePage } from './pages/ViewPeoplePage';

// import { Mypage_me } from './pages/Mypage_me';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/mypage_me" element={<M  ypage_me />} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/usersearch" element={<UserSearchPage />} />
        <Route path="/check" element={<CheckPostPage />} />
        <Route path="/HeadHuntingPage" element={<HeadHuntingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/plan" element={<ProjectForm />} />
        <Route path="/writePost" element={<WritePostPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/viewpeople" element={<ViewPeoplePage />} />
      </Routes>
    </BrowserRouter>
  );
};
