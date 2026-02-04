const http = require('http');

const data = JSON.stringify({
    text: "Привет",
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

console.log('Testing /api/translate...');

const req = http.request(options, (res) => {
    let responseData = '';

    console.log('Status:', res.statusCode);

    res.on('data', (chunk) => {
        responseData += chunk;
    });

    res.on('end', () => {
        console.log('Response:', responseData);
        try {
            const json = JSON.parse(responseData);
            console.log('Parsed:', json);
        } catch (e) {
            console.error('Failed to parse JSON');
        }
    });
});

req.on('error', (error) => {
    console.error('Error:', error.message);
});

req.write(data);
req.end();
