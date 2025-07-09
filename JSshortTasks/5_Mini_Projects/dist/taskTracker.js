import { argv } from "node:process";
import fs from "fs";
class Task {
    constructor(id, description, status, createdAt) {
        this.id = id;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
    }
}
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Completed"] = 1] = "Completed";
})(Status || (Status = {}));
const file = "taskTracker.json";
const randomId = generateRandom8DigitNumber();
function generateRandom8DigitNumber() {
    const min = 10000000;
    const max = 99999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function readFile() {
    if (!fs.existsSync(file))
        return 0;
    const fileContent = fs.readFileSync(file, "utf8");
    const parsedTasks = JSON.parse(fileContent);
    return parsedTasks;
}
function addTask(task) {
    const createdTask = {
        id: Number(randomId),
        description: task,
        status: Status.Pending,
        createdAt: new Date().toISOString(),
    };
    const existingTasks = readFile();
    console.log("1existingTasks: \n", existingTasks);
    if (!existingTasks) {
        let tasks = [];
        tasks.push(createdTask);
        fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
        console.log("File with given task was created.");
    }
    else {
        existingTasks.push(createdTask);
        fs.writeFileSync(file, JSON.stringify(existingTasks, null, 2));
        console.log("Task was written to file successfully");
    }
}
function listTasks() {
    const fileContent = fs.readFileSync(file, "utf8");
    const parsedTasks = JSON.parse(fileContent);
    console.log("Tasks: \n", parsedTasks);
}
function completeTask(task) { }
function parseCommand() {
    const command = argv[2];
    if (command === "add") {
        const task = argv[3];
        addTask(task);
    }
    else if (command === "list")
        listTasks();
    else if (command === "complete") {
        const task = argv[3];
        completeTask(task);
    }
}
parseCommand();
