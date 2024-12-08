import "../app/globals.css"; 
import Navbar from "../components/Navbar";


function App({ Component, pageProps }) {
  return (
    <>
    <title>MovieTalks</title>
      <Navbar /> 
      <main>
        <Component {...pageProps} /> 
      </main>
      
    </>
  );
}

export default App;
