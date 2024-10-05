import Sidebar from "../../dashboard/sidebar";
// import axios from "axios";

function NewsService() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="/News/topHeadlines" className="p-4 bg-white rounded-lg shadow transform duration-500 hover:-translate-y-2">
            <h2 className="text-xl font-semibold text-center">Top Headlines</h2>
            <p className="mt-2 text-gray-600"></p>
          </a>
          <a href="/News/everynews" className="p-4 bg-white rounded-lg shadow transform duration-500 hover:-translate-y-2">
            <h2 className="text-xl font-semibold text-center">TV</h2>
            <p className="mt-2 text-gray-600"></p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsService;
