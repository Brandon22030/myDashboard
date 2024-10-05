import { useState, useEffect } from "react";
import axios from "axios";

function TrendingMovie() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getTrendingmovieData("movie");
  }, []);

  async function getTrendingmovieData(type) {
    try {
      const apiKey = "c6b0d598df1d79ba4b680e937c07fcf3";
      let resp = await axios.get(
        `https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}`
      );
      console.log(resp.data.results);
      setMovieData(resp.data.results);
    } catch (e) {
    } finally {
    }
  }

  return (
    <>
      <div className="">
        <div className="text-center mt-[1rem]">
          <button
            className="bg-blue-950 w-[10rem] text-white font-bold p-[1rem] rounded-xl transform duration-500 hover:bg-blue-600 mr-[1rem]"
            onClick={() => {
              getTrendingmovieData("movie");
            }}
          >
            Trending movie
          </button>
          <button
            className="bg-blue-950 w-[10rem] text-white font-bold p-[1rem] rounded-xl transform duration-500 hover:bg-blue-600"
            onClick={() => {
              getTrendingmovieData("tv");
            }}
          >
            Trending tv
          </button>
        </div>
        <div className="grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max">
          {movieData.map((item) => (
            // <div className="" key={item.id}>
            //     <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>

            // </div>

            <div className="w-full" key={item.id}>
              <div className="relative right-0">
                <div data-tab-content="" className="p-5">
                  <div className="block opacity-100" id="app" role="tabpanel">
                    <div role="tabpanel" data-value="html">
                      <div className="text-center">
                        <img
                          className="w-full h-auto max-w-full rounded-3xl"
                          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                          alt="image-photo"
                        />
                        <div className="">
                          {item.original_title
                            ? item.original_title
                            : item.original_name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TrendingMovie;
