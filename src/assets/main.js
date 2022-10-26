
const API = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=5'

const content = null || document.getElementById('content');
//con esta constante de content lo que hacemos es llamar a este js en la parte del html del id = content

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3d56a6351mshbcf7e34b233c1e6p16d340jsnc34f84cfd253',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async() => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
        </div>
        `).slice(0,2).join('')} 
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
}) ();
//el comando de .slide(0,2).join('') me muestra solo dos de los 5 videos que le habia dicho que me muestre en el html
