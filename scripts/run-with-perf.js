const { exec } = require('child_process');
const { performance } = require('perf_hooks');
const path = require('path');

const fileToExecute = process.argv[2];
const projectRoot = path.resolve(__dirname, '..');
const resolvedPath = path.join(projectRoot, fileToExecute);

/**
 * 1 Kilobyte (KB) = 1024 bytes
 * 1 Megabyte (MB) = 1024 Kilobytes
 *
 * So, to convert 10 MB to bytes:
 *  First, convert MB to KB: 10 MB * 1024 KB/MB = 10240 KB
 *  Then, convert KB to bytes: 10240 KB * 1024 bytes/KB = 10485760 bytes
 */
const bufferSizes = {
  '1KB': 1 * 1024,
  '10KB': 10 * 1024,
  '100KB': 100 * 1024,
  '200KB': 200 * 1024,
  '500KB': 500 * 1024,
  '1MB': 1 * 1024 * 1024,
  '5MB': 5 * 1024 * 1024,
  '10MB': 10 * 1024 * 1024,
  '50MB': 50 * 1024 * 1024,
  '100MB': 100 * 1024 * 1024,
  '200MB': 200 * 1024 * 1024,
  '500MB': 500 * 1024 * 1024,
  '1GB': 1 * 1024 * 1024 * 1024,
};

const execOptions = {
  maxBuffer: bufferSizes['10MB'],
};

/**
 * Convert bytes to a human-readable format
 */
function formatBytes(bytes) {
  const sizes = ['bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 bytes';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${
    sizes[i]
  } (actual: ${bytes} bytes)`;
}

/**
 * Convert milliseconds to a human-readable format
 */
function formatMilliseconds(milliseconds) {
  if (milliseconds < 1000) return `${milliseconds.toFixed(1)} milliseconds`;
  const seconds = milliseconds / 1000;
  return `${seconds.toFixed(1)} seconds (actual: ${Math.round(
    milliseconds
  )} milliseconds)`;
}

// Measure memory usage before execution
const initialMemoryUsage = process.memoryUsage().heapUsed;

// Measure start time
const startTime = performance.now();

exec(`npx babel-node ${resolvedPath}`, execOptions, (error, stdout, stderr) => {
  // Measure end time
  const endTime = performance.now();

  // Measure memory usage after execution
  const finalMemoryUsage = process.memoryUsage().heapUsed;

  // Calculate memory used and time taken
  const memoryUsed = finalMemoryUsage - initialMemoryUsage;
  const timeTaken = endTime - startTime;

  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(stdout);
  console.log(`Memory used: ${formatBytes(memoryUsed)}`);
  console.log(`Time taken: ${formatMilliseconds(timeTaken)}`);
});
