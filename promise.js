const getRepositories = () => {
	return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading result from database');
            resolve(['repo1', 'repo2', 'repo3']);
            reject(new Error('Message'))
		}, 2000);
	});
};

const repo = getRepositories();
repo
	.then((repo) => console.log('Repo =>', repo))
	.catch((err) => console.log('Error => ', err.message));

function displayRepos(repos) {
	console.log('repos => ', repos);
}
