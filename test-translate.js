```javascript
const http = require('http');

const data = JSON.stringify({
    text: "Привет, мир!",
    targetLang: "en"
});

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/translate',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = http.request(options, (res) => {
    let responseData = '';

    res.on('data', (chunk) => {
        responseData += chunk;
    });

    res.on('end', () => {
        console.log('Response:', responseData);
    });
});

req.on('error', (error) => {
    console.error('Error:', error.message);
});

req.write(data);
req.end();
```
