import { useState, useEffect } from "react";


function TopAnime() {
    const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response.data);
        setDatas(response.data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-center text-xl mb-[2rem]">TOP ANIME</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {datas.map((data) => (
          // <section>

            <section key={data.id} className="p-5 md:p-0 flex flex-wrap items-start">
              <section className="relative p-5 py-10  bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                <img
                  src={data.images["jpg"]["large_image_url"]}
                />
                <h1 className="text-3xl my-5">{data.title}</h1>
              </section>
            </section>
          // </section>
        ))}
      </div>
    </div>
  );
}

export default TopAnime;
