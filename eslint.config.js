import neostandard from 'neostandard'

export default [
  { ignores: ['app/assets/builds/*', 'public/assets/*'] },
  ...neostandard({ env: ['browser'] })
]
