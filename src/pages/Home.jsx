import React from "react";
import Navbar from "../components/Navbar";
import InfoList from "../components/InfoList";
import { fetchData, getData } from "../actions/";
import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

function Home() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(data, query, setIsLoading, setData, fetchData);
  }, [query]);

  return isLoading ? (
    <>
      <Navbar isHome={true} setInputValue={setQuery} />
      <div className="contaier loader">
        <Loader type="Audio" color="#e57439" height={100} width={100} />
      </div>
    </>
  ) : (
    <>
      <Navbar isHome={true} setInputValue={setQuery} />
      <InfoList data={data} />
    </>
  );
}

export default Home;
