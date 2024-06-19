const GOOGLE_API_KEY = 'AIzaSyCTCDNDtYPCpAD0FaKgHgdzCjMN1QUHnt4';
const OPENWEATHERMAP_API_KEY = 'a8f7efb2d5204b550140bbefd667d754';

export function getMapPreview(lat, lng) {
  console.log(lat + ' ' + lng);
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;

}

// export async function getAddress(lat, lng) {
//   const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error('Failed to fetch address!');
//   }

//   const data = await response.json();
//   const address = data.results[0].formatted_address;
//   return address;
// }

export async function getAddress(lat, lng) {
  const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=1&appid=${OPENWEATHERMAP_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch address!');
  }

  const data = await response.json();
  const address = data[0].name;
  return address;
}