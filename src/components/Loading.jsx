import { useEffect } from "react";
import "../styles/Loading.css"; 

function Loading({ setLoading }) {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [setLoading]);

  return (
    <div className="loading-container">
      <p>Loading...</p>
    </div>
  );
}

export default Loading;