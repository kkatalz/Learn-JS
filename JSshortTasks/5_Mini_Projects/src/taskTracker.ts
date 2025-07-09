import { argv } from "node:process";
import fs from "fs";
import { log } from "node:console";

enum Status {
  Pending,
  Completed,
}

interface Task {
  id: number;
  description: string;
  status: Status;
  createdAt: string;
}

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
  const createdTask: Task = {
    id: Number(randomId),
    description: task,
    status: Status.Pending,
    createdAt: new Date().toISOString(),
  };

  const existingTasks = readFile();

  if (!existingTasks) {
    let tasks: Array<Task> = [];
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

function completeTask(taskId: number): void {
  const tasks = readFile();
  let updateTask: boolean = false;

  try {
    const updatedTasks: Task[] = tasks.map((task: Task) => {
      if (task.id === taskId) {
        updateTask = true;
        return {
          id: task.id,
          description: task.description,
          status: Status.Completed,
          createdAt: task.createdAt,
        };
      } else {
        return task;
      }
    });

    if (!updateTask) throw new Error(`Task with given id does not exist.`);

    fs.writeFileSync(file, JSON.stringify(updatedTasks, null, 2));
    console.log(`You have completed task (${taskId})`);
  } catch (e) {
    console.error(`Error completing a task: ${e}`);
  }
}

function deleteTask(taskId: number): void {
  const tasks = readFile();
  const tasksNumber = tasks.length;

  try {
    const updatedTasks: Task[] = tasks.filter(
      (task: any) => task.id !== taskId
    );

    if (tasksNumber === updatedTasks.length)
      throw new Error(`Task with given id does not exist.`);

    fs.writeFileSync(file, JSON.stringify(updatedTasks, null, 2));
    console.log(`Task above (${taskId}) was deleted successfully`);
  } catch (e) {
    console.error(`Error deleting a task: ${e}`);
  }
}

function parseCommand() {
  const command = argv[2];
  if (command === "add") {
    const task = argv[3];
    addTask(task);
  } else if (command === "list") listTasks();
  else if (command === "complete") {
    const taskId = Number(argv[3]);
    completeTask(taskId);
  } else if (command === "delete") {
    const taskId = Number(argv[3]);
    deleteTask(taskId);
  }
}

parseCommand();
