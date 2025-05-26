
import { YMaps, Map, Placemark } from "react-yandex-maps";

export const FooterMap = () => {
  // Координаты точки (например, Москва, Красная площадь)
  const pointCoordinates = [54.733998, 55.934032];

  return (
    <YMaps>
      <Map
        defaultState={{
          center: pointCoordinates,
          zoom: 16,
        }}
        width="100%"
        height="400px"
      >
        <Placemark geometry={pointCoordinates} />
      </Map>
    </YMaps>
  );
};
