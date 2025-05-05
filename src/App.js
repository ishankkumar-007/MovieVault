import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Routes from './config/Routes';
import ManualPage from './pages/ManualPage';
import Chatbot from './components/chatbot/Chatbot'; // Make sure this path is correct

function AppContent() {
  const history = useHistory();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'F1') {
        event.preventDefault(); // prevent default browser help
        history.push('/manual');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [history]);

  return (
    <>
      <Header />
      <Switch>
        <Route path="/manual" component={ManualPage} />
        <Route component={Routes} />
      </Switch>
      <Footer />
      <Chatbot /> {/* Chatbot visible on all pages */}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;