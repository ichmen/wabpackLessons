export const createLogger = (loggerName) => {
  const logsArr = [];
  return {
    getLogs() {
      return logsArr;
    },
    log(message) {
      logsArr.push(`log - ${loggerName} - ${message}`);
    },
    error(errorText) {
      logsArr.push(`error - ${loggerName} - ${errorText}`);
    },
  };
};
