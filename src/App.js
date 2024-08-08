import React,{useState,useEffect} from "react";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import ChatButton from "./components/Buttons/ChatButton.jsx";
import Loader from "./components/Elements/Loader.jsx";

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds for demonstration
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
          </Helmet>
          <Landing />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

