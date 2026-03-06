import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import TajHero from "./TajHero";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // loader time (2.5 sec)

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <TajHero />;
}

export default Home;
