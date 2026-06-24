import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import { OurHistory } from './pages/OurHistory/OurHistory';
import { ChapterHistory } from './pages/ChapterHistory/ChapterHistory';
import { Leadership } from './pages/Leadership/Leadership';
import { Philanthropy } from './pages/Philanthropy/Philanthropy';
import { Resources } from './pages/Resources/Resources';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-history" element={<OurHistory />} />
        <Route path="/chapter-history" element={<ChapterHistory />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/philanthropy" element={<Philanthropy />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
