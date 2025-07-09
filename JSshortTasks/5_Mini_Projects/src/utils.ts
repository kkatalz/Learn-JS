import { argv } from "node:process";
import fs from "fs";
import { log } from "node:console";

export enum Status {
  Pending,
  Completed,
}

export interface Task {
  id: number;
  description: string;
  status: Status;
  createdAt: string;
}

export const file = "taskTracker.json";
const randomId = generateRandom8DigitNumber();

function generateRandom8DigitNumber() {
  const min = 10000000; // Smallest 8-digit number
  const max = 99999999; // Largest 8-digit number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function readFile(): Task[] {
  if (!fs.existsSync(file)) return [];

  const fileContent = fs.readFileSync(file, "utf8");
  const parsedTasks = JSON.parse(fileContent);

  return parsedTasks;
}

export function generateTask(taskDescription: string): Task {
  return {
    id: Number(randomId),
    description: taskDescription,
    status: Status.Pending,
    createdAt: new Date().toISOString(),
  };
}

export function validateTaskId({
  tasks,
  taskId,
}: {
  tasks: Task[];
  taskId: number;
}) {
  const taskToDelete = tasks.find((task) => task.id === taskId);
  if (!taskToDelete) throw new Error(`Task with given id does not exist.`);
}

export function writeToFile(tasks: Task[]) {
  fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
}
