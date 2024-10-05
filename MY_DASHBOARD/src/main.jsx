import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './Authentication/login.jsx'
import Register from './Authentication/register.jsx'
import Dashboard from './dashboard/dashboard.jsx'
import Anime from "./components/anime/anime.jsx"
import TopAnime from './components/anime/topAnime.jsx';
import TopManga from './components/anime/topManga.jsx';
import TopCharac from './components/anime/topCharac.jsx';
import MovieService from './components/movie/movieService.jsx';
import TrendingMovie from './components/movie/fWidget/trendingMovie.jsx';
// import Footer from './components/movie/footerMovie.jsx';
import MyTv from './components/movie/sWidget/tv.jsx';
import Trending from './components/movie/sWidget/trendingPage.jsx';
import Header from './components/movie/sWidget/headerMovie.jsx';
import Footer from './components/movie/sWidget/footerMovie.jsx';
import NewsService from './components/News/newsService.jsx';
import TopHeadlines from './components/News/TopHeadlines.jsx';
import EveryNews from './components/News/everyNews.jsx';
// import TvTrending from './components/movie/sWidget/tvTrending.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Anime" element={<Anime />} />
        <Route path="/Anime/topanime" element={<TopAnime />} />
        <Route path="/Anime/topmanga" element={<TopManga />} />
        <Route path="/Anime/topcharacter" element={<TopCharac />} />
        <Route path="/Movie" element={<MovieService />} />
        <Route path="/Movie/trending" element={<TrendingMovie />} />
        <Route path="/Movie/tv" element={<MyTv />} />
        <Route path="/Movie/tv/trending" element={<Trending />} />
        <Route path="/News" element={<NewsService />} />
        <Route path="/News/topHeadlines" element={<TopHeadlines />} />
        <Route path="/News/everynews" element={<EveryNews />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
