import { frontCrad } from './Hero3.js';
import { useParams } from 'react-router-dom';

export default function Hero3() {
  const { frontCradID } = useParams();
  const DisplayDetail = frontCrad.find((item) => item.id === parseInt(frontCradID));

  if (!DisplayDetail) {
    return <p className="text-center text-white text-xl mt-20">Item not found</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto bg-gray-800 p-10 rounded-xl shadow-lg">
        <div className="relative w-full h-auto">
          <img
            src={DisplayDetail.img1}
            alt="Main"
            className="w-72 h-56 object-cover border-4 border-white rounded shadow-lg absolute top-0 left-0 z-0"
          />
          <img
            src={DisplayDetail.img2}
            alt="Secondary"
            className="w-80 h-56 object-cover border-4 border-indigo-300 rounded shadow-lg mt-24 ml-24 relative z-10"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-accent mb-4">
            {DisplayDetail.header}
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            {DisplayDetail.Des}
          </p>

          <div className="flex gap-10 mt-6 flex-wrap">
            <div className="text-center">
              <div className="text-indigo-400 text-3xl font-bold">{DisplayDetail.num1}</div>
              <div className="text-sm font-semibold mt-1">{DisplayDetail.p1}</div>
              <p className="text-xs text-gray-400">{DisplayDetail.p2}</p>
            </div>
            <div className="text-center">
              <div className="text-indigo-400 text-3xl font-bold">{DisplayDetail.num2}</div>
              <div className="text-sm font-semibold mt-1">Locations Worldwide</div>
              <p className="text-xs text-gray-400">
                We have 1000+ locations for your choices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
