import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function LocationContainer() {
  const API_KEY = import.meta.env.GOOGLE_MAPS_API_KEY;
  return (
    <div className="col-span-2 p-5 h-147">
      <p className="text-lg font-semibold text-gray-700">Active Projects</p>

      <APIProvider apiKey={API_KEY}>
        <Map
          style={{
            width: "100%",
            height: "93%",
            marginTop: "5px",
          }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling="greedy"
          disableDefaultUI
        />
      </APIProvider>
    </div>
  );
}
