module.exports = {
  appName: 'Canopy',
  showLogs: true,
  serverUrl: 'https://landgeyesapi.applitools.com',
  proxy: process.env.PROXY_USER ? {url: 'lgproxy.landg.net:80', username: process.env.PROXY_USER, password: process.env.PROXY_PASS, isHttpOnly: true} : undefined,
  batchName: process.env.BRANCH ? process.env.BRANCH : 'Local'
}