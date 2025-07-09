import fs from "fs";
export var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Completed"] = 1] = "Completed";
})(Status || (Status = {}));
export const file = "taskTracker.json";
const randomId = generateRandom8DigitNumber();
function generateRandom8DigitNumber() {
    const min = 10000000;
    const max = 99999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function readFile() {
    if (!fs.existsSync(file))
        return [];
    const fileContent = fs.readFileSync(file, "utf8");
    const parsedTasks = JSON.parse(fileContent);
    return parsedTasks;
}
export function generateTask(taskDescription) {
    return {
        id: Number(randomId),
        description: taskDescription,
        status: Status.Pending,
        createdAt: new Date().toISOString(),
    };
}
export function validateTaskId({ tasks, taskId, }) {
    const taskToDelete = tasks.find((task) => task.id === taskId);
    if (!taskToDelete)
        throw new Error(`Task with given id does not exist.`);
}
export function writeToFile(tasks) {
    fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
}
