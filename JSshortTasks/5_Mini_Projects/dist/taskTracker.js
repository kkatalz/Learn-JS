import { file, generateTask, readFile, Status, validateTaskId, writeToFile, } from "./utils";
import fs from "fs";
export function addTask(taskDescription) {
    const createdTask = generateTask(taskDescription);
    const existingTasks = readFile();
    existingTasks.push(createdTask);
    writeToFile(existingTasks);
    console.log("Task was written to file successfully");
}
export function listTasks() {
    const fileContent = fs.readFileSync(file, "utf8");
    const parsedTasks = JSON.parse(fileContent);
    console.log("Tasks: \n", parsedTasks);
}
export function completeTask(taskId) {
    try {
        const tasks = readFile();
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
    }
    catch (e) {
        console.error(`Error completing a task: ${e}`);
    }
}
export function deleteTask(taskId) {
    try {
        const tasks = readFile();
        validateTaskId({ tasks, taskId });
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        writeToFile(updatedTasks);
        console.log(`Task above (${taskId}) was deleted successfully`);
    }
    catch (e) {
        console.error(`Error deleting a task: ${e}`);
    }
}
