// next.config.js (correct syntax)
export default {
    webpack(config, { isServer }) {
      // Add custom rule for video files
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'videos/',  // Specify the output path for videos
          },
        },
      });
  
      return config;
    },
  };
  