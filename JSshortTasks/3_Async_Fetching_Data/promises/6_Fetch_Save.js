import axios from "axios";
import fs from "fs";

async function saveUsers() {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=5");
    const users = response.data;

    const file = "users.json";
    fs.writeFileSync(file, JSON.stringify(users, null, 2));

    console.log("File written successfully. Saved 5 users to users.json");
    console.log("The written has the following contents:\n");

    const fileContent = fs.readFileSync(file, "utf8");
    const parsedUsers = JSON.parse(fileContent);

    console.log("Users: \n", parsedUsers);
  } catch (e) {
    console.error("Error", e);
  }
}

saveUsers();
