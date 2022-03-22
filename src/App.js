import { Main } from 'components/Pages/main/Main';
import { Route, Routes } from 'react-router-dom';
import 'components/commons/scss/master.scss';
import { Header } from 'components/commons/header/Header';
import { LoginPage } from 'components/Pages/login/LoginPage';
import { Demos } from 'components/Pages/demos/Demos';

function App() {
  return (
    <>
      <Header />

      <div className='content-wrap'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
