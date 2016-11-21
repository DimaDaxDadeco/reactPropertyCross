class GeolocationService {
    getCoordinates = () => (
        new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(result => {
                const { longitude: lng, latitude: lat } = result.coords;
                const coordinates = `${lng},${lat}`;
                resolve(coordinates);
            }, reject);
        }))
}
export default new GeolocationService();