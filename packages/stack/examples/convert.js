import { Stack } from "../src";

// 辗转相除法
export default function convert(decNumber, base = 2) {
  const remStack = new Stack();
  let number = decNumber;
  let str = "";
  let baseString = "0123456789ABCDEF";

  while (number > 0) {
    remStack.push(number % base);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    str += baseString[remStack.pop()];
  }

  return str;
}
