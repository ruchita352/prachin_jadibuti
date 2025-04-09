// index.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const userRoutes = require('./routes/routes');
const categoryRoutes = require('./routes/category');
const medicineRoutes = require('./routes/medicineRoute');
const app = express();
connectDB();

app.use(bodyParser.json());
app.get('/',(a,b)=>b.send('coding cloud!'))
// Use the user routes
app.use('/healthcare', userRoutes);

app.use('/healthcare', categoryRoutes);
app.use('/healthcare', medicineRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
