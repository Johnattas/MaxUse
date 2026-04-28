import { importLibrary, setOptions } from '@googlemaps/js-api-loader';

export default async () => {
    return new Promise((resolve, reject) => {
        setOptions({
            key: 'AIzaSyCIrTVDHOyXkRnkxVOK8xSdcVyp1NkrZeY',
            v: 'weekly',
        });

        const win: any = window;

        const apiPromise = Promise.all([
            importLibrary('maps'),
            importLibrary('AdvancedMarker'), // Required for AdvancedMarker component
        ])
            .then(() => win.google)
            .catch((error) => console.error('[GoogleMaps.ts] ERROR GOOGLE MAPS: ' + error.name, error));
    });
};
