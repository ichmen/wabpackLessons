import { createLogger } from "../logger";

it("should put log text into log", () => {
  const newLogger = createLogger("New");
  newLogger.log("log-in2");
  expect(newLogger.getLogs()).toEqual(["log - New - log-in2"]);
});
it("should put log text into error", () => {
  const newLogger = createLogger("New");
  newLogger.error("error-log");
  expect(newLogger.getLogs()).toEqual(["error - New - error-log"]);
});

it("should return empty arr", () => {
  const newLogger = createLogger("New");
  expect(newLogger.getLogs()).toEqual([]);
});
