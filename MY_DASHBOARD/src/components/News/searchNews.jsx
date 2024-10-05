import React, { useState } from "react";
import axios from "axios";

const NewsSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchNews = async (e) => {
    e.preventDefault();
    if (query) {
      try {
        const apiKey = "992b2206b04541d391f7717210c4f4b7";
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
        );
        setResults(response.data.articles);
      } catch (error) {
        console.error("Error fetching data from TMDb:", error);
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col w-full items-center pt-4 gap-4 bg-gradient-to-b from-blue-600 via-blue-300 to-blue-100 pb-[1rem]">
        <p className="text-4xl md:text-6xl font-extrabold text-white">
          Search News
        </p>
        <form onSubmit={searchNews} className="max-w-[480px] w-full px-4">
          <div className="relative flex">
            <input
              type="text"
              placeholder="Search for a new..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border h-12 shadow p-4 rounded-full"
            />
            <button
              type="submit"
              className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div>
        {results.length > 0 ? (
          <ul className="grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max">
            {results.map((news, index) => (
              <li key={index}>
                {news.title && (
                  <img
                    className="w-full h-auto max-w-full rounded-3xl"
                    src={
                      news.urlToImage
                        ? news.urlToImage
                        : "https://itefix.net/sites/default/files/not_available.png"
                    }
                    alt={news.title}
                  />
                )}
                <h3>
                  <a
                    href={news.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:text-blue-700"
                  >
                    {news.title}
                  </a>
                </h3>
              </li>
            ))}
          </ul>
        ) : (
          <h1 className="text-center mt-[5rem]">
            Research the news that you want
          </h1>
        )}
      </div>
    </div>
  );
};

export default NewsSearch;
