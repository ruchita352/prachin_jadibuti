// index.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const userRoutes = require('./routes/routes');
const categoryRoutes = require('./routes/category');
const medicineRoutes = require('./routes/medicineRoute');
const diseaseRoutes = require('./routes/disease');
const healthParameterRoutes = require('./routes/healthParameter')
const SubHealthParameterRoutes = require('./routes/subHealthParameter')

const app = express();
connectDB();

app.use(bodyParser.json());
app.get('/', (a, b) => b.send('coding cloud!'))
// Use the user routes
app.use('/healthcare', userRoutes);

app.use('/healthcare', categoryRoutes);
app.use('/healthcare', medicineRoutes);
app.use('/healthcare', diseaseRoutes);

app.use('/healthcare', healthParameterRoutes);
app.use('/healthcare', SubHealthParameterRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
