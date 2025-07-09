import { argv } from "node:process";
import { addTask, listTasks, completeTask, deleteTask } from "./taskTracker";

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
export const commandConfig: CommandConfig[] = [
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
