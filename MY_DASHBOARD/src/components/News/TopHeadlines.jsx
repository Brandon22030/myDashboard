import { useEffect, useState } from 'react';
import axios from 'axios';

const TopHeadlines = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const api_key = "992b2206b04541d391f7717210c4f4b7";
    const fetchHeadlines = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`
      );
      setHeadlines(response.data.articles);
    };
    fetchHeadlines();
  }, []);

  return (
    <div>
      <h2>Top Headlines</h2>
      {headlines.length > 0 ? (
        <ul className="grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max">
          {headlines.map((article, index) => (
            <li key={index}>
                <img className="w-full h-auto max-w-full rounded-3xl"
                src={
                    article.urlToImage
                    ? article.urlToImage
                    : "https://itefix.net/sites/default/files/not_available.png"
                }
                alt=''/>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className='font-bold hover:text-blue-700'>
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TopHeadlines;
