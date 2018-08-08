functions getRepositories(){
  constk req = new XMLHttpRequest()
  req.addEventListener('load', showRepositories)
  req.open('GET', 'https://api.github.com/users/octocat/repos')
}