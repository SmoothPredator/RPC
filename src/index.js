module.exports = {
  version: require('../package.json').version,
  Client: require('./RPCClient'),
  Rest: require('./RESTClient'),
  Constants: require('./Constants')
}

if (typeof window !== 'undefined') window.DiscordRPC = module.exports;
