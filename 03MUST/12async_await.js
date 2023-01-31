function promises() {
  const successfullPromise = timeout(100).then(result => `success: ${result}`);
  const failingPromise = timeout(200, true).then(null, error =>
    Promise.reject(`niepowodzenie: ${error}`),
  )
  const recoveredPromise = timeout(300, true).then(null, error =>
    Promise.resolve(`nie powiodło sie i odzyskano: ${error}`),
  )
  successfullPromise.then(log, logError)
  failingPromise.then(log, logError)
  recoveredPromise.then(log, logError)
}

function asyncAwaits() {
  async function successfullAsyncAwait() {
    const result = await timeout(100);
    return `sukces: ${result}`;
  }

  async function failedSyncAwait() {
    const result = await timeout(200, true);
    return `nie powiodło się: ${result}`;
  }

  async function recoveredSyncAwait() {
    let result;
    try {
      result = await timeout(300, true);
      return `nie powiodło się: ${result}`;
    } catch (error) {
      return `nie powiodło się i odzyskano ${error}`;
    }
  }
  successfullAsyncAwait().then(log, logError);
  failedSyncAwait().then(log, logError);
  recoveredSyncAwait.then(log, logError);
}

function log(...args) {
  console.log(...args);
}

function logError(...args) {
  console.log(...args);
}

function timeout(duration = 0, shouldRejected = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldRejected) {
        reject(`rejected after ${duration}ms`);
      } else {
        resolve(`resolve rejected ${duration}ms`);
      }
    }, duration)
  })
}

