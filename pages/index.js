import { useEffect, useState } from "react";
import axios from "axios";
import Feed from "../components/Feed";
import styles from "../styles/Home.module.css";
import Form from "../components/Form";
import TweetsChart from "../components/Chart";
export default function Home() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [chartData, setChartData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://localhost:8080/search/${query}`);
    if (response) {
      setResult(response.data.statuses);
      setQuery("");
    }
  };

  const handleChange = (e) => setQuery(e.target.value);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setChartData(result.slice(0, 10).map((tweet) => tweet.retweet_count));
    console.log(chartData);
  }, [result]);
  return (
    <div>
      <h1 className={styles.title}>Search Tweets</h1>
      <div className={styles.container}>
        <Form
          query={query}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        
          <Feed result={result} />
          <div>
            {chartData.length > 0 && <TweetsChart chartData={chartData} />}
         
        </div>
      </div>
    </div>
  );
}
