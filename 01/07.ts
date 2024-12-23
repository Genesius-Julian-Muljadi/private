function parseLog(str: string): string[] {
  return str.split(" ");
}

function validateLog(arr: string[]): boolean {
  return arr.length === 2;
}

function displayLog(log: string[]): void {
  if (!validateLog(log)) {
    console.log("Invalid log");
    return;
  }

  console.log(`Date: ${log[0]}, Message: ${log[1]}`);
}

function displayLogs(logs: string[]): void {
  for (let k in logs) {
    const parsedLog: string[] = parseLog(logs[k]);
    displayLog(parsedLog);
  }
}

displayLogs(["2024-12-01 Error", "2024-12-02 Info"]);
