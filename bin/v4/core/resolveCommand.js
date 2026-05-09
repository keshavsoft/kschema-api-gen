import StartEndPoint from "../commands/startEndPoint.js";
import AddSubRoute from "../commands/addSubRoute.js";
import AddTableName from "../commands/addTableName.js";

// resolveCommand.js
const map = {
    StartEndPoint,
    AddSubRoute,
    AddTableName
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};