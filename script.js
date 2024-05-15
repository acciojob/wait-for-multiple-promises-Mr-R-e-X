//your JS code here. If required.
function createRandomPromise(min, max) {
  let aPromise = new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;
    setTimeout(() => {
      resolve(delay);
    }, delay * 1000);
  });
  return aPromise;
}

function updateTable(promises) {
  const tableBody = document.getElementById("output");
  tableBody.innerHTML = "";
  let totalTime = 0;
  promises.forEach((promise, index) => {
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    if (index === promise.length - 1) {
      cell1.textContent = "Total";
      cell2.textContent = totalTime.toFixed(3);
    } else {
      cell1.textContent = `Promise ${index + 1}`;
      cell2.textContent = promise.toFixed(3);
      totalTime += promise;
    }
    row.appendChild(cell1);
    row.appendChild(cell2);
    tableBody.appendChild(row);
  });
}

document.getElementById("output").innerHTML = `
<tr>
  <td>loading</td>
</tr>
`;

const promises = [
  createRandomPromise(1, 3),
  createRandomPromise(1, 3),
  createRandomPromise(1, 3),
];

Promise.all(promises).then((results) => {
  updateTable([...results, results.reduce((acc, curr) => acc + curr, 0)]);
});
