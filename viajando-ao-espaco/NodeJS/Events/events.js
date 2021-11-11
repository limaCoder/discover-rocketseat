const { EventEmitter } = require('events')
const { inherits } = require('util')
const ev = new EventEmitter()

ev.on('saySomething', (name) => {
  console.log('Eu ouvi você: ', name)
})

// ouvindo uma única vez
/* ev.on('saySomething', (name) => {
  console.log('Eu ouvi você: ', name)
}) */

ev.emit('saySomething', 'Mario')
ev.emit('saySomething', 'Mikael')
ev.emit('saySomething', 'Vic')

/* --------------------------------------------------------------------------- */

class Character extends EventEmitter {
  constructor(name) {
    super()
    this.name = name;
  }
}

const chapolin = new Character('Chapolin Colorado');
chapolin.on('help', () => console.log(`Eu! O ${chapolin.name}`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')