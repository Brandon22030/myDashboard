import { GoogleMap } from "@react-google-maps/api"
import { mapOptions } from "./mapConfig"

const Map = (props) => {
  const { isLoaded } = props;
  const containerStyle = {
    width: "350px",
    height: "200px",
  };

  const center = {
    lat: 6.3676953,
    lng: 2.4252507,
  };
  return (
    isLoaded && (
      <>
        <GoogleMap
            className="p-4 bg-white rounded-lg shadow"
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        ></GoogleMap>
      </>
    )
  );
};

export default Map;
