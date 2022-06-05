let token = '';

self.addEventListener('message', async (event) => {
  console.log('Got message in the service worker');
  token = event.data.token;
});

self.addEventListener("fetch", event => {
  if (event.request.url.includes("http://grise.p-e.kr/tutee/video")){ //only add header to the endpoint i want
    const newRequest = new Request(event.request.url, {
      headers: {
        Authorization: token
      }
    });
    event.respondWith((async () => {
      // const cachedResponse = await caches.match(event.request);
      // if (cachedResponse) {
      //   return cachedResponse;
      // }
    
      const response = await fetch(newRequest);
      console.log('test',response);
      
      // if (!response || response.status !== 200 || response.type !== 'basic') {
      //   return response;
      // }
      // console.log(response);
      return response;
    })());
  }
});

