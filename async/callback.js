console.log("Before");
getUser(1, handleUser);
console.log("After");

function handleUser(user) {
  getRepositories(user.gitHubUserName, handleRepositories);
}

function handleRepositories(repos) {
  getCommits(repos, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("DB is loading");
    callback({ id: id, gitHubUserName: "kkatalz" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Repositories are being searched..");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommits(repos, callback) {
  setTimeout(() => {
    console.log("Commits are being fetched..");
    callback(["commit1", "commit2"]);
  }, 2000);
}
