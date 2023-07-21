import { precacheAndRoute } from 'workbox-precaching';
// eslint-disable-next-line no-restricted-globals
precacheAndRoute(self.__WB_MANIFEST);

const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async ({ request, fallbackUrl }) => {
  //캐시에서 데이터 불러오기
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  //캐시에서 데이터를 발견하지 못했을 때
  //서버에서 데이터 받아오기
  try {
    const responseFromNetwork = await fetch(request);
    //네트워크 요청 성공 시
    //가져온 데이터를 캐시에 저장 후 서비스 띄우기
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    //네트워크 요청 실패 시
    //캐시에서 데이터 가져옴
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    //캐시에서도 데이터를 가져올 수 없을 때
    //에러 표시
    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      fallbackUrl: "/index.html",
    }),
  );
});
