import { argv } from "node:process";
import fs from "fs";
import { log } from "node:console";

enum CommandKey {
  Add = "add",
  List = "list",
  Complete = "complete",
  Delete = "delete",
}

interface CommandConfig {
  key: CommandKey;
  command: () => void;
}

//   object mapping
const commandConfig: CommandConfig[] = [
  {
    key: CommandKey.Add,
    command: () => {
      const task = argv[3];
      addTask(task);
    },
  },
  {
    key: CommandKey.List,
    command: () => {
      listTasks();
    },
  },
  {
    key: CommandKey.Complete,
    command: () => {
      const taskId = Number(argv[3]);
      completeTask(taskId);
    },
  },
  {
    key: CommandKey.Delete,
    command: () => {
      const taskId = Number(argv[3]);
      deleteTask(taskId);
    },
  },
];

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

function readFile(): Task[] {
  if (!fs.existsSync(file)) return [];

  const fileContent = fs.readFileSync(file, "utf8");
  const parsedTasks = JSON.parse(fileContent);

  return parsedTasks;
}

function generateTask(taskDescription: string): Task {
  return {
    id: Number(randomId),
    description: taskDescription,
    status: Status.Pending,
    createdAt: new Date().toISOString(),
  };
}

function validateTaskId({ tasks, taskId }: { tasks: Task[]; taskId: number }) {
  const taskToDelete = tasks.find((task) => task.id === taskId);
  if (!taskToDelete) throw new Error(`Task with given id does not exist.`);
}

function writeToFile(tasks: Task[]) {
  fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
}

function addTask(taskDescription: string) {
  const createdTask = generateTask(taskDescription);

  const existingTasks = readFile();

  existingTasks.push(createdTask);

  writeToFile(existingTasks);
  console.log("Task was written to file successfully");
}

function listTasks(): void {
  console.log("Tasks: \n", readFile());
}

function completeTask(taskId: number) {
  try {
    const tasks: Task[] = readFile();

    validateTaskId({ tasks, taskId });

    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          status: Status.Completed,
        };
      }
      return task;
    });

    writeToFile(updatedTasks);
    console.log(`You have completed task (${taskId})`);
  } catch (e) {
    console.error(`Error completing a task: ${e}`);
  }
}

function deleteTask(taskId: number) {
  try {
    const tasks: Task[] = readFile();

    validateTaskId({ tasks, taskId });

    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    writeToFile(updatedTasks);
    console.log(`Task above (${taskId}) was deleted successfully`);
  } catch (e) {
    console.error(`Error deleting a task: ${e}`);
  }
}

function main() {
  const command = argv[2];

  const element = commandConfig.find(
    (configElement) => configElement.key === command
  );

  if (!element) throw new Error("Element does not exist.");
  element?.command();
}

main();
