let log = [];
let db = { X: 0, Y: 0 };
let checkpointIndex = null;
const logDiv = document.getElementById('log');

function append(msg) {
  log.push(msg);
  const div = document.createElement('div');
  div.textContent = msg;
  logDiv.appendChild(div);
  logDiv.scrollTop = logDiv.scrollHeight;
}

function startTransaction(tid) {
  append(`START ${tid}`);
}

function write(tid, varName) {
  const oldVal = db[varName];
  const newVal = oldVal + 10;
  append(`WRITE ${tid}, ${varName}=${newVal} (old=${oldVal})`);
  db[varName] = newVal;
  updateDisplay();
}

function checkpoint() {
  checkpointIndex = log.length - 1;
  append(`--- CHECKPOINT ---`);
}

function crash() {
  append(`💥 SYSTEM CRASH 💥`);
  append(`(Log and DB saved; transactions may be incomplete.)`);
}

function recover() {
  append(`🔁 RECOVERY STARTED`);
  let activeTx = new Set();
  let start = checkpointIndex !== null ? checkpointIndex : 0;
  append(`Using checkpoint at log index ${start}`);

  for (let i = start; i < log.length; i++) {
    const entry = log[i];
    if (entry.startsWith('START')) activeTx.add(entry.split(' ')[1]);
  }

  append(`Rolling back uncommitted transactions: ${[...activeTx].join(', ') || 'none'}`);

  for (let tx of activeTx) {
    if (tx === 'T1' && db.X !== 0) db.X -= 10;
    if (tx === 'T2' && db.Y !== 0) db.Y -= 10;
  }

  append(`Recovery complete.`);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('xval').textContent = db.X;
  document.getElementById('yval').textContent = db.Y;
}
