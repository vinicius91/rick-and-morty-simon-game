module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/flow'],
  plugins: [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-modules-commonjs'
  ]
};
