import React from "react";
import Navbar from "../components/Navbar";
import InfoList from "../components/InfoList";
import { fetchData } from "../actions/";
import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

function Home() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if ((data.length === 0) & (query.length === 0)) {
      setIsLoading(true);
      fetchData(query).then((response) => {
        setIsLoading(false);
        setData(response.data);
      });
    } else {
      fetchData(query).then((response) => {
        setData(response.data);
      });
    }
  }, [query]);
  return isLoading ? (
    <div className="contaier loader">
      <Loader
        type="Bars"
        color="#e57439"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  ) : (
    <>
      <Navbar isHome={true} inputValue={query} setInputValue={setQuery} />
      <InfoList data={data} />
    </>
  );
}

export default Home;
