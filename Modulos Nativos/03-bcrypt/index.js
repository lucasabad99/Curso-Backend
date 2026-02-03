import fs from "fs";
import bcrypt from "bcrypt";

class UserManager {
  constructor(path) {
    this.path = path;
  }

  getUsers() {
    if(!fs.existsSync(this.path)) return [];
    const data = fs.readFileSync(this.path, "utf-8");
    return JSON.parse(data);
  }

  register(obj) {
    try {
      const users = this.getUsers();
      const user = { ...obj };
      user.password = bcrypt.hashSync(user.password, 10);
      users.push(user);
      fs.writeFileSync(this.path, JSON.stringify(users));
      return user;
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  login(email, password) {
    try {
      const users = this.getUsers();
      const user = users.find((u) => u.email === email);
      if (!user) throw new Error("Invalid credentials");
      const isValidPass = bcrypt.compareSync(password, user.password);
      if (!isValidPass) throw new Error("Invalid credentials");
      return "Login OK";
    } catch (error) {
      console.error("Login error:", error.message);
    }
  }
}

const userManager = new UserManager('./users.json');

const user1 = {
    first_name: "Juan",
    last_name: "Perez",
    email: "juan@mail.com",
    password: "1234",
}

const user2 = {
    first_name: "Maria",
    last_name: "Lopez",
    email: "maria@mail.com",
    password: "5678",
}

userManager.register(user1);
userManager.register(user2);

// console.log(userManager.getUsers());
console.log(userManager.login('juan@mail.com', '12345'));
