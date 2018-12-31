const Path = require('path');
const Hapi = require('hapi');
const Hoek = require('hoek');
const Script = require('./script.js');
const internals = {};
const server = new Hapi.Server(8000);
const countdown = require('countdown.to')
const chalk = require('chalk')
const figlet = require('figlet')
const log = console.log
const show = chalk.cyan.bold
const clear = console.clear
const path = require('path');
const openBrowsers = require('open-browsers');
const countD = chalk.red.bold.underline

server.route({ method: 'GET', path: '/{p*}', handler: { directory: { path: __dirname + '/static' } } });
server.route({ method: 'GET', path: '/audio/{p*}', handler: { directory: { path: Path.join(__dirname, '../sounds') } } });
server.route({ method: 'GET', path: '/data.js', handler: function (request, reply) { reply('var animation = ' + JSON.stringify(Script.animation) + ';').type('application/javascript'); } });

let count = 100

const checkValue = (val) => {
  return val.length == 1 ? `0${val}` : val
}

const timer = new countdown('2019-01-01 00:00:20', { onCalculateRemainingTime: function() {

    const arrTime = this.timeRemainingForDisplay().split(' ')
    const hours = checkValue(arrTime[0])
    const minutes = checkValue(arrTime[2])
    const seconds = checkValue(arrTime[4])
    const time = show((figlet.textSync(`${hours} : ${minutes} : ${seconds}`)))
    const Count = countD((`Count Down :`))

    clear()
    log(`\n\n\n ${Count} \n ${time}`)

    if (seconds == 35) {

      return server.start(function (err) {

          Hoek.assert(!err);

          console.log('Started at: ' + server.info.uri)

          openBrowsers(server.info.uri)

      })

    }

  }

})
