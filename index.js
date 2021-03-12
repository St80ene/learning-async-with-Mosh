console.log('Before');

const getRepositories = (username, callback) => {
    setTimeout(() => {
        callback(['repo1', 'repo2', 'repo3']);
    },2000)
}

getRepositories('Mosh', displayRepos)

function displayRepos (repos) {
    console.log('repos => ', repos);
}
console.log('After');
