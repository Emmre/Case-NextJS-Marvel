import Card from "../components/Card";
import { getData } from "../services";
import { useEffect, useState } from "react";
import { IData } from "../types";

const Home = () => {
  let currentOffset = 0;
  const [data, setData] = useState<IData | any>([]);

  const getMoreData = () => {
    const moreData: IData[] = [];
    getData(currentOffset).then(({ data }) => {
      data?.results?.forEach((p: IData[] | any) => moreData.push(p));
      setData((prevData: IData[]) => [...prevData, ...moreData]);
    });
    currentOffset += 30;
  };

  const handleScroll = (e: any) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
      getMoreData();
    }
  };

  useEffect(() => {
    getMoreData();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container content" data-testid="home-page">
      <div className="card-content">
        {data?.map((item: IData[] | any) => {
          const { description } = item;
          return (
            <div key={description}>
              <Card item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
