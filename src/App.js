import React, {useState} from "react";

import ReactMapGl from "react-map-gl"

export default function App() {
  const [viewport, setViewport] = useState ({
    latitude: 51.2211097,
    longitude: 4.3997081,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })
return <div>
  <ReactMapGl {...viewport}>
    markers here
  </ReactMapGl>
</div>

}