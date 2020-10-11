// Array of Links, Corresponds to Buttons on Website
const linkArray = [ 
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
  // Deploy a JSON API
  if (request.url.endsWith('/links')) {
    return new Response(JSON.stringify(linkArray), { headers: { "content-type": "application/json;charset=UTF-8" } })
  }
  /* Test Functionality of JSON by visiting http://127.0.0.1:8787/links */
  
  // Retrieve static HTML page
  const template = await fetch('https://static-links-page.signalnerve.workers.dev/static/html', { headers: { "content-type": "text/html;charset=UTF-8" } })

  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  })
}
