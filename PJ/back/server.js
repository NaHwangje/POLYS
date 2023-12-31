const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const adminLoginRouter = require('./routes/adminLogin'); 
app.use('/api/adminLogin', adminLoginRouter); 
const registRouter = require('./routes/regist'); 
app.use('/api/regist', registRouter);
const loginRouter = require('./routes/login'); 
app.use('/api/login', loginRouter);
const loginAttendRouter = require('./routes/loginAttend'); 
app.use('/api/loginAttend', loginAttendRouter);
const getAttendRouter = require('./routes/getAttend'); 
app.use('/api/getAttend', getAttendRouter);
const studentListRouter = require('./routes/studentList'); 
app.use('/api/studentList', studentListRouter);
const todayAttendRouter = require('./routes/todayAttend'); 
app.use('/api/todayAttend', todayAttendRouter);
const guestLoginRouter = require('./routes/guestLogin'); 
app.use('/api/guestLogin', guestLoginRouter);

//식단표 부분
const todayMenuRouter = require('./routes/todayMenu'); 
app.use('/api/todayMenu', todayMenuRouter);

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});