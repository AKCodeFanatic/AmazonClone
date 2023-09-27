import './App.css';
import { Navbar } from './components/header/navbar';
import { Newnav } from './components/header/newnavbaar/newnavbaar';
import { Maincomponent } from './components/home/Maincomponent';
import { Footer } from './components/footer/Footer';
import { SignIn } from './components/signup_signin/SignIn';
import { SignUp } from './components/signup_signin/SignUp';
import {Routes,Route} from 'react-router-dom'


function App() {
  return(
    <> 
      <Navbar />
      <Newnav />
      <Routes>
        <Route path='/' element={<Maincomponent />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
