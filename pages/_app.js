import '../styles/globals.css';
import Layout from '../components/Layout';
import { SkillProvider } from '../context/skillcontext';

export default function App({ Component, pageProps }) {
  return (
    <SkillProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SkillProvider>
  );
}