import { Outlet } from 'react-router-dom';
import Layout from './Layout/Layout';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Header />
      <Outlet />
      <Footer />
    </Layout>
  );
}

export default App;
