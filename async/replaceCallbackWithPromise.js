console.log("Before");
getUser(1, (user) => {
  getRepositories(user.gitHubUserName, (repos) => {
    getCommits(repos[0], (commits) => {
      console.log(commits);
    });
  });
});
console.log("After");

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
    console.log("Commits are being searched..");
    callback(["commit1", "commit2"]);
  }, 2000);
}
