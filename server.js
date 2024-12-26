const express = require('express');
const app = express();

const storage = [];

app.post('/storing/:data', (req, res) => {
    storage.push(data);
    res.send('Data stored successfully!');
});
app.get('/data', (req, res) => {
    res.send(storage.join(', '));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});