import { NavLink } from "react-router-dom";

const Footer = () => {
  const data = [
    {
      icon: "fas fa-fire-alt",
      name: "Trending",
      link: "/Movie/tv/trending",
    },
    {
      icon: "fas fa-film",
      name: "Movies",
      link: "/movies",
    },
    {
      icon: "fas fa-tv",
      name: "TV Series",
      link: "/tv",
    },
    {
      icon: "fas fa-search",
      name: "Search",
      link: "/search",
    },
  ];
  return (
    <>
      <div className="container mx-auto">
        <div className="mx-auto w-6/12">
          <div className="text-center flex justify-between">
            {data.map((Val) => {
              return (
                <>
                  <NavLink to={`${Val.link}`}>
                    <button className="">
                      <h5 className="pt-1 fs-6 text-white">{Val.name}</h5>
                    </button>
                  </NavLink>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;