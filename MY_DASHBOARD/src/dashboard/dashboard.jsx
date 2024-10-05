import Sidebar from "./sidebar";
import Time from "../components/time/time";
import Weather from "../components/weather/weather";
// import BTCTracker from '../components/crypto/BTCTracker'
import { useJsApiLoader } from "@react-google-maps/api";
import Map from "../components/Map/map";
import { mapOptions } from "../components/Map/mapConfig";

function Dashboard() {

  if(!localStorage.getItem('token')){
    window.location.href = '/auth/login'
  }

  

  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Time />
          <Weather />
          {/* <BTCTracker /> */}
          <Map isLoaded={isLoaded} />
          <a href="/Anime">
            <div className="h-60 pt-[5rem] cursor-pointer text-center p-4 bg-white rounded-lg shadow">
              <h2 className="text-xl font-semibold">Anime</h2>
              <p className="mt-2 text-gray-600">Get A look on trending Manga and anime</p>
            </div>
          </a>
          <a href="/Movie">
            <div className="h-60 pt-[5rem] cursor-pointer text-center p-4 bg-white rounded-lg shadow">
              <h2 className="text-xl font-semibold">Movie</h2>
              <p className="mt-2 text-gray-600">Get a look on trending movies and tv</p>
            </div>
          </a>
          <a href="/News">
            <div className="h-60 pt-[5rem] cursor-pointer text-center p-4 bg-white rounded-lg shadow">
              <h2 className="text-xl font-semibold">News</h2>
              <p className="mt-2 text-gray-600">Get a look on News and informations around the word</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
