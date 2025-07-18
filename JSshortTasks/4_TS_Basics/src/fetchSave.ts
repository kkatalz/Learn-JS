import axios from "axios";
import fs from "fs";

interface User {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  location: {
    city: string;
    country: string;
  };
  email: string;
  phone: string;
}

async function getUsers(): Promise<User[]> {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=2");
    const rawUsers = response.data.results;

    const users: User[] = rawUsers.map((user: any) => ({
      name: {
        first: user.name.first,
        last: user.name.last,
      },
      gender: user.gender,
      location: {
        city: user.location.city,
        country: user.location.country,
      },
      email: user.email,
      phone: user.phone,
    }));

    return users;
  } catch (e) {
    console.error("Error getting users: ", e);
    return [];
  }
}

async function saveUsers(users: User[]) {
  try {
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

(async () => {
  const users = await getUsers();
  await saveUsers(users);
})();
