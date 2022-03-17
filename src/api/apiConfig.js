const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '3174db8ff5a210490ab022084a7774bc',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;