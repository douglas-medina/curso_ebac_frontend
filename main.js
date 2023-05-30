$(document).ready(function () {
    const endpoint = 'https://api.github.com/users/douglas-medina'
    
    fetch(endpoint)
    .then(function(resposta) {
        return resposta.json()
    })
    .then(function(json) {
        const repositorios = json.public_repos;
        const seguidores = json.followers;
        const seguindo = json.following;
        const profilePicture = json.avatar_url;
    
        $('#repositorios-qnt').text(repositorios);
        $('#seguidores-qnt').text(seguidores);
        $('#seguindo-qnt').text(seguindo);
        $('.profile-avatar').attr('src', profilePicture)
    })
})
