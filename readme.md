# mpv-wrapper

**Let an [`mpv`](https://mpv.io/) instance play media.**

[![npm version](https://img.shields.io/npm/v/mpv-wrapper.svg)](https://www.npmjs.com/package/mpv-wrapper)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/mpv-wrapper.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installing

```shell
npm install mpv-wrapper
```


## Usage

```js
const createPlayer = require('mpv-wrapper')

createPlayer((err, player) => {
	if (err) return console.error(err)

	player.observeProperty('filename', val => console.log('filename', val))
	player.onIdle(() => player.quit())
	player.loadfile('/path/to/audio.ogg')
})
```

Check out [a more detailed example](example/index.js).


## Related

- [`mpv-ipc`](https://github.com/Shizmob/mpv-ipc.js) – A simple, mostly dumb, client for `mpv`'s IPC interface. `mpv-wrapper` is based on this.
- [`mplayer-wrapper`](https://github.com/derhuerst/mplayer-wrapper) – Let an `mplayer` instance play media.


## Contributing

If you have a question or have difficulties using `mpv-wrapper`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/mpv-wrapper/issues).
