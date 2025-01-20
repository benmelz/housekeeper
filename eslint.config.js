import neostandard from 'neostandard'

export default [
  { ignores: ['app/assets/builds/*', 'app/javascript/controllers/index.js', 'coverage/*', 'public/assets/*'] },
  ...neostandard({ env: ['browser'] })
]
