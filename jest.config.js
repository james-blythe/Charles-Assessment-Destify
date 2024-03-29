module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less)$':
      '<rootDir>/__mocks__/fileMock.ts',
    "\\.(css|scss)$": "<rootDir>/__mocks__/fileMock.ts",
    "axios": "<rootDir>/node_modules/axios/dist/node/axios.cjs",
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
