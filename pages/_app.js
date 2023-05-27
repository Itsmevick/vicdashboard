import '@/styles/globals.css';
import Sidebar from '../components/Sidebar';
import Login from './Login';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Login/>
      <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
    </div>
    
  );
}
