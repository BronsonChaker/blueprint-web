import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function LocationContainer() {
  const API_KEY = import.meta.env.GOOGLE_MAPS_API_KEY;
  return (
    <div className="col-span-2 p-5 h-147">
      <p className="text-lg font-semibold text-gray-700">Active Projects</p>
      <hr className="border-gray-300 mt-1 mb-3"></hr>
      <APIProvider apiKey={API_KEY}>
        <Map
          style={{ width: "100%", height: "93%" }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling="greedy"
          disableDefaultUI
        />
      </APIProvider>
    </div>
  );
}

<iframe
  src="https://storage.googleapis.com/maps-solutions-6hy1gmur7d/neighborhood-discovery/0uy8/neighborhood-discovery.html"
  width="100%"
  height="100%"
  style="border:0;"
  loading="lazy"
></iframe>;
