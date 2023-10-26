import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ForgotPassword from './Components/ForgotPassword';
import PasswordReset from './Components/ResetPassword';
import ReviewsTab from './Components/ReviewsTab';
import BookMarksTab from './Components/BookMarksTab';
import NotificationsTab from './Components/NotificationsTab';
import MessagesTab from './Components/MessagesTab';
import CommunitiesTab from './Components/CommunitiesTab';
import Footer from './Components/Footer';
import SearchReviews from './Components/SearchReviews';
import AnonymousReview from './Components/AnonymousReview';
import TOS from './Components/TOS';
// eslint-disable-next-line
import Privacy_Policy from './Components/Privacy_policy';
import FAQ from './Components/FAQ';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/forgot_pass" element={<ForgotPassword />} />
                <Route eaxct path="/reset_pass/:userId/:token" element={<PasswordReset/>} />
                <Route exact path="/my_reviews" element={<ReviewsTab />}/>
                <Route exact path="/bookmarks" element={<BookMarksTab />}/>
                <Route exact path="/my_notifications" element={<NotificationsTab />}/>
                <Route exact path="/messages" element={<MessagesTab />}/>
                <Route exact path="/communities" element={<CommunitiesTab />}/>
                <Route exact path="/search_reviews" element={<SearchReviews />}/>
                <Route exact path="/anonymous_review" element={<AnonymousReview />}/>
                <Route exact path="/terms_of_services" element={<TOS />}/>
                
                <Route exact path="/privacy_policy" element={<Privacy_Policy />}/>
                <Route exact path="/faq" element={<FAQ />}/>








              </Routes>
           <Footer/>
      </Router>
    </div>
  );
}

export default App;
