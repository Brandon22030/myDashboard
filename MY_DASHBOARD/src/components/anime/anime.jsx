import Sidebar from "../../dashboard/sidebar";
// import axios from "axios";

function Anime() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="/Anime/topanime" className="p-4 bg-white rounded-lg shadow transform duration-500 hover:-translate-y-2">
            <h2 className="text-xl font-semibold text-center">Top Anime</h2>
            <p className="mt-2 text-gray-600"></p>
          </a>
          <a href="/Anime/topmanga" className="p-4 bg-white rounded-lg shadow transform duration-500 hover:-translate-y-2">
            <h2 className="text-xl font-semibold text-center">Top Manga</h2>
            <p className="mt-2 text-gray-600"></p>
          </a>
          <a href="/Anime/topcharacter" className="p-4 bg-white rounded-lg shadow transform duration-500 hover:-translate-y-2">
            <h2 className="text-xl font-semibold text-center">
              Top Characters
            </h2>
            <p className="mt-2 text-gray-600"></p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Anime;
