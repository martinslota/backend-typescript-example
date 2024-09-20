import pTimeout from "p-timeout";

async function slowGreeting() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return "Hello world!";
}

export function hello() {
  return pTimeout(slowGreeting(), { milliseconds: 1000 });
}
