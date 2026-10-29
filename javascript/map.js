// OpenFreeMap vector tiles are rendered in MapLibre. No API key is required.
import maplibregl from 'https://unpkg.com/maplibre-gl@6.16.0/dist/maplibre-gl.mjs';

const container = document.querySelector('#service-map');
const fallback = document.querySelector('#map-fallback');

if (container) {
    try {
        const map = new maplibregl.Map({
            container,
            style: 'https://tiles.openfreemap.org/styles/liberty',
            center: [24, -29],
            zoom: 3.7,
            minZoom: 2,
            maxZoom: 16,
            scrollZoom: false,
            attributionControl: true
        });

        map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-left');

        const popup = new maplibregl.Popup({ offset: 28 })
            .setHTML('<strong>LengthHairCare</strong><br>Online enquiries across South Africa');
        new maplibregl.Marker({ color: '#2D5A43' })
            .setLngLat([24, -29])
            .setPopup(popup)
            .addTo(map);

        map.on('error', () => {
            if (fallback) fallback.hidden = false;
        });
    } catch (error) {
        if (fallback) fallback.hidden = false;
        container.setAttribute('aria-label', 'Map unavailable. LengthHairCare handles enquiries online across South Africa.');
    }
}
