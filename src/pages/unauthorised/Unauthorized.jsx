import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{ backgroundColor: "#fbf8f5" }}
    >
      <div
        className="max-w-md w-full p-8 bg-white rounded-lg shadow-md"
        style={{ backgroundColor: "#fbf8f5" }}
      >
        <div
          className="text-6xl font-bold text-center mb-4"
          style={{ color: "#e9672b" }}
        >
          403
        </div>
        <h1 className="text-3xl font-bold text-center mb-4">Unauthorized</h1>
        <p className="text-xl text-center mb-6">
          You do not have access to the requested page.
        </p>
        <button
          onClick={goBack}
          className="w-full px-4 py-2 text-lg font-medium text-white transition-colors duration-150 bg-yellow-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          style={{ backgroundColor: "#e9672b" }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
