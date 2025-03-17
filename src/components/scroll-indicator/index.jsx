import { useEffect, useState } from "react";
import './scroll.css'

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPorcentage, setScrollPorcentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPorcentage() {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPorcentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPorcentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) {
    return <div>Loading data! Please wait</div>
  }

  if (errorMsg) {
    return <div>Error Fetching data! {errorMsg}</div>
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>

        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPorcentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data && data.length
          ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
