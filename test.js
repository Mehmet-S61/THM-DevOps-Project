const http = require('http');
const assert = require('assert');

http.get('http://localhost:3000', (res) => {
  assert.strictEqual(res.statusCode, 200);
  console.log('✅ Test erfolgreich: Webserver antwortet mit Status 200');
  process.exit(0);
}).on('error', (err) => {
  console.error('❌ Test fehlgeschlagen:', err.message);
  process.exit(1);
});