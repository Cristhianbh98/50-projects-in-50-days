class Movies {
  constructor() {
    this.API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page='
    this.IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
    this.SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

    this.$moviesContainer = document.querySelector('#movies-container')
    this.$searchForm = document.querySelector('#search-form')
    this.$searchInput = document.querySelector('#search')

    this.events()
  }

  // Events
  events() {
    this.$searchForm.addEventListener('submit', (e) => this.handleSubmit(e))
  }

  // Methods
  handleSubmit(e) {
    e.preventDefault()

    const term = this.$searchInput.value
    
    if (term && term !== '') this.searchMovie(term)
  }

  async searchMovie(term) {
    const response = await fetch(this.SEARCH_API + term)
    const movies = await response.json()

    this.showMovies(movies.results)
  }

  async loadMovies(page) {
    const response = await fetch(this.API_URL + page)
    const movies = await response.json()

    return movies
  }

  async loadFirstMovies() {
    const movies = await this.loadMovies(1)
    this.showMovies(movies.results)
  }

  showMovies(movies) {
    this.$moviesContainer.innerHTML = ''

    movies.forEach(movie => {
      const movieHtml = this.createMovie(movie)
      this.$moviesContainer.appendChild(movieHtml)
    })
  }

  createMovie(movie) {
    const movieEl = document.createElement('DIV')
    movieEl.classList.add('movie')

    movieEl.innerHTML = `
      <div class="movie__inner">
        <img src="${this.IMG_PATH + movie.poster_path}" alt="${movie.title}">
        <div class="movie__details">
          <h3 class="title">${movie.title}</h3>
          <span style="color: ${this.getColorByScore(movie.vote_average)};" class="score">${movie.vote_average}</span>
        </div>
      </div>

      <div class="overview">
        <h3>Overview</h3>
        <p>${movie.overview}</p>
      </div>
    `

    return movieEl
  }

  getColorByScore(score) {
    if(score >= 8) {
      return 'green'
    } else if(score >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
  }
}

window.onload = () => {
  const movies = new Movies()
  movies.loadFirstMovies()
}
