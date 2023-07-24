module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], 
    plugins: ['@babel/plugin-proposal-unicode-property-regex'],
    presets: ['expo-router/babel'],presets: ['babel-preset-expo'],
    
  };
};
