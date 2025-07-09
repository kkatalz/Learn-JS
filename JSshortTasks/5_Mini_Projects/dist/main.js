import { argv } from "node:process";
import { commandConfig } from "./commandConfig";
function main() {
    const command = argv[2];
    const element = commandConfig.find((configElement) => configElement.key === command);
    if (!element)
        throw new Error("Element does not exist.");
    element?.command();
}
main();
