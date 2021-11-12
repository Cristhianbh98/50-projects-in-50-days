class GithubProfile {
  constructor () {
    this.URL_API = 'https://api.github.com/users/'
    this.userForm = document.getElementById('user-form')
    this.main = document.getElementById('main')
    this.events()
  }

  // Events
  events() {
    this.userForm.addEventListener('submit', (e) => this.handleForm(e))
  }
  
  // Methods
  async handleForm(e) {
    e.preventDefault()
    const username = document.querySelector('#search-user').value
    try {
      const user = await this.getUser(username)
      this.createUserCard(user)
    } catch(error) {
      this.createErrorCard(error.message)
    }

    try {
      const repos = await this.getRepos(username)
      this.addReposToCard(repos)
    } catch(error) {
      console.error(error)
    }
  }

  async getUser(username = '') {
    const response = await fetch(this.URL_API + username)
    if (response.status === 404) throw new Error('No profile with this username')

    return await response.json()
  }

  async getRepos(username) {
    const response = await fetch(this.URL_API + username + '/repos?sort=created')
    if (response.status === 404) throw new Error('Problem fetching repos')

    return await response.json()
  }

  addReposToCard(repos, amount = 3) {
    const reposContainer = document.getElementById('repos')
    
    for (let i = 0; i < amount; i++) {
      const repo = this.createRepo(repos[i])
      reposContainer.appendChild(repo)
    }
  }

  createRepo(repo) {
    const { html_url, name } = repo;

    const repoEl = document.createElement('A')
    repoEl.classList.add('repo')
    repoEl.href = html_url
    repoEl.target = '_blank'
    repoEl.textContent = name
    
    return repoEl
  }

  createErrorCard(msg) {
    this.main.innerHTML = `
    <div class="card">
    ${msg}</div>
    `
  }

  createUserCard(user) {
    const {
      avatar_url,
      name,
      followers,
      following,
      public_repos,
      bio,
      login
    } = user

    this.main.innerHTML = `
    <div class="card">
      <div>
        <img class="avatar" src="${avatar_url}" alt=""/>
      </div>

      <div class="user-info">
        <h2>${name ? name : login}</h2>
        <p>${bio ? bio : '...'}</p>

        <ul>
          <li>${followers} <strong>Followers</strong></li>
          <li>${following} <strong>Following</strong></li>
          <li>${public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>
      </div>
    </div>
    `
  }
}

const githubProfile = new GithubProfile();
