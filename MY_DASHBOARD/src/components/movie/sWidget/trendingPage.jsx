import { useState, useEffect } from "react";
import axios from "axios";
// imp  ort Pagination from "./pagination";

function Trending() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchTrending(); //calling the fetchTrending function only during the initial rendering of the app.
  }, []);

  async function fetchTrending() {
    const Access_key = "c6b0d598df1d79ba4b680e937c07fcf3";

    let resp = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${Access_key}`
    );
    console.log(resp.data.results);
    setState(resp.data.results);
  }

  return (
    <>
      <div className="grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max">
        {state.map((val) => (
          <div key={val.id} className="">
            <div key={val.id}>
              <img
                className="w-full h-auto max-w-full rounded-3xl"
                src={
                  val.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${val.poster_path}`
                    : "unavailable"
                }
                alt=""
              />
              <div className="">
                <h5>{val.title || val.name}</h5>
                <div>
                  <div>{val.media_type === "tv" ? "TV" : "Movie"}</div>
                  <div>{val.first_air_date || val.release_date}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <Pagination /> */}
      </div>
    </>
  );
}

export default Trending;
