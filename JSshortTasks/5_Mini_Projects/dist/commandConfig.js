import { argv } from "node:process";
import { addTask, listTasks, completeTask, deleteTask } from "./taskTracker";
var CommandKey;
(function (CommandKey) {
    CommandKey["Add"] = "add";
    CommandKey["List"] = "list";
    CommandKey["Complete"] = "complete";
    CommandKey["Delete"] = "delete";
})(CommandKey || (CommandKey = {}));
export const commandConfig = [
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
