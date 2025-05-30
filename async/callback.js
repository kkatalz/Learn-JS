// CAllBACK

console.log("Before");
getUser(1, (user) => {
  console.log("User", user);

  getRepositories(user.gitHubUserName, (repos) => {
    console.log("Repos: ", repos);
  });
});
console.log("After");

function getUser(id, callbback) {
  setTimeout(() => {
    console.log("DB is loading");
    callbback({ id: id, gitHubUserName: "kkatalz" });
  }, 2000);
}

function getRepositories(username, callbback) {
  setTimeout(() => {
    console.log("Repositories are being searched..");
    callbback({ username: username, repos: ["repo1", "repo2", "repo3"] });
  }, 2000);
}
