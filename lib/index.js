const term = require('./term');
const termSummary = require('./summary');
const termQueue = require('./summary/queue');

module.exports = {
  summary: termSummary,
  queue: termQueue,
  ...term,
}