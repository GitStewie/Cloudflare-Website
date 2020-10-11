// Array of Links, Corresponds to Buttons on Website
const links = [ 
    { "name": "Feeding America - The Charity I Walk For!", "url": "https://www.feedingamerica.org/" },
    { "name": "My Dog Stewie's Breed!", "url": "https://dogtime.com/dog-breeds/maltipoo#/slide/1" },
    { "name": "Gravity Net", "url": "https://mrdoob.com/projects/chromeexperiments/google-gravity/" },
    { "name": "My Favorite Place to Take Interesting Classes Outside School!", "url": "https://www.coursera.org/" },
 ]

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  })
}
