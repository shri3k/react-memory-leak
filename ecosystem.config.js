module.exports = {
  apps : [{
    name: 'leak',
    script: 'index.js',
    instances: '1',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
  }],

};
