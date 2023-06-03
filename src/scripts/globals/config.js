const CONFIG = {
    BASE_URL: 'https://restaurant-api.dicoding.dev',
    BASE_IMAGE_S: 'https://restaurant-api.dicoding.dev/images/small/',
    BASE_IMAGE_M: 'https://restaurant-api.dicoding.dev/images/medium/',
    BASE_IMAGE_L: 'https://restaurant-api.dicoding.dev/images/large/',
    CACHE_NAME: new Date().toISOString(),
    DATABASE_NAME: 'restaurant-database',
    DATABASE_VERSION: 1,
    OBJECT_STORE_NAME: 'restaurants',
    DEFAULT_LANGUAGE: 'en-us',
    WEB_SOCKET_SERVER: 'WSS://savoria-feed.dicoding.dev'
};

export default CONFIG;