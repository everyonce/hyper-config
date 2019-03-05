exports.decorateConfig = config => {
    return Object.assign({}, config, {
        shell: 'C:\\Windows\\System32\\bash.exe',
        shellArgs: ['--login','-i']
    })
  }