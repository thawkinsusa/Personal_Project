require('dotenv').config({ path: __dirname + '/../.env' });
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const uc = require('./controllers/userController');
const tc = require('./controllers/teamController');
const sc = require('./controllers/stripeController');
const initSession = require('./middleware/initSession');
const path = require('path');
const authCheck = require('./middleware/authCheck');
const hc = require('./controllers/heroController')
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;



const app = express();
console.log('hit express');
app.use(express.json());
console.log('hit jsong');

app.use(
  session({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365
    }
  })
);
console.log('session');
massive(CONNECTION_STRING).then(db => {
  console.log('db connection successful');
  app.set('db', db);

  app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
})
app.use(initSession);

// users
app.post('/api/signup', uc.signup);
app.post('/api/login', uc.login);
app.get('/api/user', authCheck, uc.getUser);
app.get('/api/users', uc.getUsers);
app.delete('/api/logout', uc.logout);
// team
app.post('/api/teamSignup', tc.create);
app.get('/api/teams/:id', tc.getTeam);
app.delete('/api/deleteTeamMember/:userId', tc.deleteTeamMember);
app.get('/api/allTeams', tc.getAllTeams);
app.get('/api/teamMembers/:id', tc.getTeamMembers);
app.put('/api/addTeamMember', tc.addTeamMember)
// stripe
app.post('/api/payment', sc.pay)
// heroes
app.get('/api/teamHeroesByUserId/:id', hc.getHeroesTeamByUserId);
app.delete('/api/deleteTeamHero/:heroId', hc.deleteTeamHero);
app.get('/api/allHeroes', hc.getAllHeroes);
app.get('/api/heroById/:id', hc.getHeroesById);
app.put('/api/addHeroMember', hc.addTeamHero)



app.use(express.static(__dirname + '/../build'));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../build/index.html')));


