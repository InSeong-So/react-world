import type { Component } from 'solid-js';
import { Route, Router, Routes } from '@solidjs/router';
import ArticlePage from '@/pages/article/[slug]';
import EditorPage from '@/pages/editor';
import EditArticlePage from '@/pages/editor/[slug]';
import HomePage from '@/pages/home';
import LoginPage from '@/pages/login';
import ProfilePage from '@/pages/profile/[username]';
import FavoriteProfilePage from '@/pages/profile/[username]/favorites';
import RegisterPage from '@/pages/register';
import SettingPage from '@/pages/settings';

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/settings" component={SettingPage} />
        <Route path="/profile/:username" component={ProfilePage}>
          <Route path="/favorite" component={FavoriteProfilePage} />
        </Route>
        <Route path="/article/:slug" component={ArticlePage} />
        <Route path="/editor" component={EditorPage}>
          <Route path="/:slug" component={EditArticlePage} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
