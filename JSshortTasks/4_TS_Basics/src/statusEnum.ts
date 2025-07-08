enum Status {
  Pending,
  InProgress,
  Completed,
  Failed,
}

function getStatusMessage(status: Status): string {
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
