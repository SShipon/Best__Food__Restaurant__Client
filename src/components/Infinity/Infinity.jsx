
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Infit from "./infit";
import Loading from "../../Sheared/Loading/Loading";

export default function  Infinity() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(2);

  const fetchData = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);

    axios
      .get(`https://restcountries.com/v3.1/all?offset=${index}0&limit=12`)
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.data]);
      })
      .catch((err) => console.log(err));
    setIndex((prevIndex) => prevIndex + 2);

    setIsLoading(false);
  }, [index, isLoading]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?offset=10&limit=12"
        );
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 2) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);

  return (
    <div className='container'>
      <div className='grid grid-cols-3'>
        {items.map((item) => (
          <Infit data={item} key={item.id} />
        ))}
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

