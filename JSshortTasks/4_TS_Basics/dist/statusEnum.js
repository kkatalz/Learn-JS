"use strict";
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Completed"] = 2] = "Completed";
    Status[Status["Failed"] = 3] = "Failed";
})(Status || (Status = {}));
function getStatusMessage(status) {
    switch (status) {
        case Status.Pending:
            return "Status is pending";
        case Status.InProgress:
            return "Status is in progress";
        case Status.Completed:
            return "Status is in completed";
        case Status.Failed:
            return "Status is in failed";
    }
}
console.log(getStatusMessage(Status.Pending));
