var mysql = require('mysql2');


var drop = 'TRUNCATE TABLE agents';
var seedQuery = 'INSERT INTO agents (title, photo, about) VALUES ( "globus", "/images/photo-globus.png", "Наша компания предоставляет возможность путешествовать по всему земному шару, без каких-либо ограничений."), ("kartinka", "/images/photo-kartinka.png", "Вы можете выбрать любое вам удобное средство передвижение(начиная от автомобилей и самолётов, заканчивая пароходом)"), ("travel-agency", "/images/travel-agency.png", "Наша компания обеспечит вам достойный и комфортный отдых в любом уголке мира, на самых престижных курортах и пляжах с предоставлением полного комлекса услуг и высочайшего сервиса.");'



var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : 'root',
database: 'touragency'
});
connection.connect()



console.log("Running SQL seed...")


// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})
