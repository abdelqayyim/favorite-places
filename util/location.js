const GOOGLE_API_KEY = 'AIzaSyDUptRrDn9JTMYg2DqlaL0oikPz7pNU_SA';
export function getMapPreview(lat, lng) {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
    &markers=color:red%7C${lat},${lng}
    &key=${GOOGLE_API_KEY}`;
    return imagePreviewUrl;
}