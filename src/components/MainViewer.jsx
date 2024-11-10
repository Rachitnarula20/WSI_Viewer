import React, { useEffect, useRef, useState } from 'react';
import OpenSeadragon from 'openseadragon';
import wsiImage from '../assets/wsi.png';

const MainViewer = () => {
  const viewerRef = useRef(null);
  const navigatorContainerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const viewer = OpenSeadragon({
      element: viewerRef.current,
      prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
      tileSources: {
        type: 'image',
        url: wsiImage,
      },
      showNavigator: true,
      navigatorPosition: "BOTTOM_RIGHT",  
      navigatorHeight: "100px",
      navigatorWidth: "150px",
    });

    viewer.addHandler('open', () => setLoading(false));

    return () => {
      if (viewer) viewer.destroy();
    };
  }, []);

  return (
    <div className="relative w-full h-full border" style={{ height: '400px' }}>
      {/* Loading Spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          Loading...
        </div>
      )}

      {/* OpenSeadragon viewer */}
      <div ref={viewerRef} className="w-full h-full"></div>
    </div>
  );
};

export default MainViewer;
