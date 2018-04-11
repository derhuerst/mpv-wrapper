'use strict'

const {join} = require('path')

const createPlayer = require('..')

createPlayer({
	args: [
		'--no-config',
		'--no-video',
		'--volume=100'
	]
}, (err, player) => {
	if (err) {
		console.error(err)
		process.exit(1)
	}

	player.observeProperty('filename', val => console.log('filename', val))
	player.observeProperty('duration', val => console.log('duration', val))

	player.loadfile(join(__dirname, 'c-major.ogg'), 'append-play')
	player.loadfile(join(__dirname, `'f-major.ogg`), 'append-play')
	player.loadfile(join(__dirname, 'g-major.ogg'), 'append-play')
	player.loadfile(join(__dirname, 'c-major.ogg'), 'append-play')

	player.onIdle(() => {
		console.error('idle')
		player.quit()
	})
})
