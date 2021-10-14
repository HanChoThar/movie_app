const apiKey = '04c35731a5ee918f014970082a0088b1';
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const imgPath = 'https://image.tmdb.org/t/p/w1280';
const something = document.querySelector('.okay');
const searchApi = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='
let put = document.querySelector('.put');
let fom = document.querySelector('.fom');
getData(apiUrl);
async function getData(url){
  let resp = await fetch(url);
  let respData = await resp.json();

  console.log(respData);
  showMovies(respData.results);
  return respData;
}

function showMovies(movies){
  movies.forEach( movie => {
    
    something.innerHTML += `
    <div class="movies">
    <img src="${imgPath + movie.poster_path}" alt="">
    <div class="info">
      <p>${movie.title}</p>
      <span style="background-color: white; border-radius: 5px; padding: 2px" class="${getPower(movie.vote_average)}">${movie.vote_average}</span>
    </div>
  </div>
    `
    })
}


function getPower(nam){
  if(nam > 8){
    return 'yellow';
  } else {
    return 'red';
  }
}

fom.addEventListener('submit', function(o){
  o.preventDefault();
  // something.innerHTML = '';
  let searchTerm = put.value;
  if(searchTerm){
    something.innerHTML ='';
    getData(searchApi + searchTerm);
  }
  put.value ='';
})



