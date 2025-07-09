import { argv } from "node:process";
import fs from "fs";
import { log } from "node:console";

class Task {
  constructor(
    public id: number,
    public description: string,
    public status: boolean,
    public createdAt: Date
  ) {}
}

enum Status {
  Pending,
  Completed,
}

interface SavedTask {
  id: number;
  description: string;
  status: Status;
  createdAt: string;
}

// TODO:
// node dist/index.js complete 1
// node dist/index.js delete 1

const file = "taskTracker.json";
const randomId = generateRandom8DigitNumber();

function generateRandom8DigitNumber() {
  const min = 10000000; // Smallest 8-digit number
  const max = 99999999; // Largest 8-digit number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function readFile(): any {
  if (!fs.existsSync(file)) return 0;

  const fileContent = fs.readFileSync(file, "utf8");
  const parsedTasks = JSON.parse(fileContent);

  return parsedTasks;
}

function addTask(task: string): void {
  const createdTask: SavedTask = {
    id: Number(randomId),
    description: task,
    status: Status.Pending,
    createdAt: new Date().toISOString(),
  };

  const existingTasks = readFile();

  if (!existingTasks) {
    let tasks: Array<SavedTask> = [];
    tasks.push(createdTask);

    fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
    console.log("File with given task was created.");
  } else {
    existingTasks.push(createdTask);

    fs.writeFileSync(file, JSON.stringify(existingTasks, null, 2));
    console.log("Task was written to file successfully");
  }
}

function listTasks(): void {
  const fileContent = fs.readFileSync(file, "utf8");
  const parsedTasks = JSON.parse(fileContent);

  console.log("Tasks: \n", parsedTasks);
}

function completeTask(task: string): void {}

function parseCommand() {
  const command = argv[2];
  if (command === "add") {
    const task = argv[3];
    addTask(task);
  } else if (command === "list") listTasks();
  else if (command === "complete") {
    const task = argv[3];
    completeTask(task);
  }
}

parseCommand();
