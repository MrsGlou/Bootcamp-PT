import { Outlet } from 'react-router-dom';
import Layout from './Layout/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import getVillagers from './services/villagers';
import getRecipes from './services/recipes';

function App() {
  const requestVillagers = getVillagers();
  const requestRecipes = getRecipes();
  return (
    <Layout>
      <Header />
      <main>
        <Outlet context={([requestRecipes], [requestVillagers])} />
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
