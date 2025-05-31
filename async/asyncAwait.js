// ---- USING PROMISES --------
/*
getUser(1)
.then((user) => getRepositories(user.gitHubUserName))
.then((repos) => getCommits(repos[0]))
.then((commits) => console.log("Commits", commits))
.catch((err) => console.log("error", err.message));
*/

//  --- ASYNC AND AWAIT APPROACH --
console.log("Before");

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUserName);
    const commits = await getCommits(repos[0]);
    console.log("Commits", commits);
  } catch (err) {
    console.log("Error", err.message);
  }
}
displayCommits();

console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("DB is loading");
      resolve({ id: id, gitHubUserName: "kkatalz" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Repositories are being searched..");
      //   resolve(["repo1", "repo2", "repo3"]);
      reject(new Error("Nope.."));
    }, 2000);
  });
}

function getCommits(repos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Commits are being searched..");
      resolve(["commit1", "commit2"]);
    }, 2000);
  });
}
