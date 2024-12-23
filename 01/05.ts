export class CustomError {
  private display: Function;

  constructor() {
    this.display = (firstInput: string, ...additionalInputs: string[]) => {
      let output: string = firstInput;

      for (let i = 0; i < additionalInputs.length; i++) {
        // Display can add multiple things together, separated with an "or"
        // Display should require descriptor string at the end not preceded by an "or"
        output += ` ${i === additionalInputs.length - 1 ? "" : "or "}${additionalInputs[i]}`;
      }

      console.log(output);
    };
  }

  empty(firstInput: string, ...additionalInputs: string[]) {
    this.display(firstInput, ...additionalInputs, "is empty.");
  }

  short(firstInput: string, ...additionalInputs: string[]) {
    this.display(firstInput, ...additionalInputs, "is too short.");
  }

  // Valid is a generic error with no parameters required.
  static valid = () => {
    console.log("Valid");
  };
}

function validate(username: string, password: string): void {
  if (username.length < 1 || password.length < 1) {
    new CustomError().empty("username", "password");
    return;
  }

  if (password.length < 8) {
    new CustomError().short("password");
    return;
  }

  CustomError.valid();
}

validate("Budi", "123");