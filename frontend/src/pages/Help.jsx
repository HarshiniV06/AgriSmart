import Navbar from "../components/Navbar";

export default function Help() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow">

          <h1 className="text-3xl font-bold text-green-700 mb-6">
            👨‍🌾 AgriSmart – Help Guide
          </h1>

          <p className="text-gray-700 mb-8">
            AgriSmart helps farmers make better decisions using Artificial
            Intelligence. Below is a simple guide to use each feature.
          </p>

          <div className="space-y-6">

            <div>
              <h2 className="text-xl font-semibold text-green-600">
                🌱 Crop Recommendation
              </h2>
              <p>
                Enter soil nutrients (N, P, K), pH, and rainfall.
                The system suggests the best crop for your land.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-green-600">
                🌿 Fertilizer Advisory
              </h2>
              <p>
                Enter crop and soil details. AgriSmart recommends the correct
                fertilizer and usage.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-green-600">
                🍂 Disease Detection
              </h2>
              <p>
                Upload a clear photo of the infected leaf.
                The system identifies the disease and gives treatment advice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-green-600">
                🐛 Pest Detection
              </h2>
              <p>
                Upload an image of the pest on the crop.
                The system detects the pest and suggests control methods.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-green-600">
                🌾 Yield Prediction
              </h2>
              <p>
                Enter crop, weather, and soil details.
                The system predicts expected yield and provides care tips.
              </p>
            </div>

          </div>

          <div className="mt-10 bg-green-100 p-4 rounded text-green-800">
            ✅ Tip: Use correct values and clear images for best results.
          </div>

        </div>
      </div>
    </>
  );
}
