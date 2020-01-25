import React from 'react'
import { render } from 'react-dom'

import AppWrapper from './components/AppWrapper';
import Home from './pages/Home';
import Category from './pages/Category';
import Favorite from './pages/Favorite';
// import Auth from './pages/Auth';
import NotFound from './pages/NotFound';

export const routes = {
  home: '/',
  category:'/category',
  favorite: '/favorite',
  auth: '/auth',
  notFound: '/:rest*',
}

const App = () => (
  <AppWrapper>
    <Home path={routes.home} />
    <Category path={routes.category} />
    <Favorite path={routes.favorite} />
    {/* <Auth path={routes.auth} /> */}
    <NotFound path={routes.notFound} />
  </AppWrapper>
)

render(<App />, document.getElementById('root'))