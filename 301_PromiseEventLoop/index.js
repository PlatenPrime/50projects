console.log("Starting...");

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("First Promise Timeout");
  }, 5000);
  resolve("First Promise Resolved");
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Second Promise");
    resolve("Second Promise Resolved");
  }, 3000);
});

const fpresult = firstPromise;

console.log(fpresult);

console.log(
  fpresult.then(() => {
    console.log("First Promise Resolved");
  })
);

const spresult = async () => await secondPromise;

async function needResult() {
    console.log("Need REsult");
  const result = await spresult();
  console.log("Need REsult", result);
}

needResult();

console.log("Ending");
