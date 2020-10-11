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
 * LinkTransformer allows retrieved HTML to be rewritten easily
 * @param {Async function} links // Modify HTML elements
 */
class LinksTransformer {
  constructor(links) {
    this.links = links
  }
  async element(element) {
    this.element(element)
  }
}

 /**
   * Handles a FETCH request to the worker.
   * @param  {Request} request Request Promise from the FETCH event to the worker.
   * 
   */
async function handleRequest(request) {
  // Deploy a JSON API
  if (request.url.endsWith('/links')) {
    return new Response(JSON.stringify(linkArray), { headers: { "content-type": "application/json;charset=UTF-8" } })
  }
  /* Test Functionality of JSON by visiting http://127.0.0.1:8787/links */

  // Retrieve static HTML page
  const retrievedHTML = await fetch('https://static-links-page.signalnerve.workers.dev/static/html', { headers: { "content-type": "text/html;charset=UTF-8" } })
  rewriter = new HTMLRewriter();
  return new HTMLRewriter()
    .on("div#profile", new LinksTransformer(async(element) => element.removeAttribute('style')))
    .transform(retrievedHTML);
}
