module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel"],
    plugins: ['@babel/plugin-proposal-unicode-property-regex'],
  };
};
