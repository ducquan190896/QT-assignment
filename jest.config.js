// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'jest-environment-jsdom',
//   setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
// };

export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',  // Process TypeScript files with ts-jest
    '^.+\\.(ts|tsx|js)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '^swiper/react$': 'swiper/react',
    '^swiper$': 'swiper',
    '^swiper/react/jsx-runtime': 'swiper/react/jsx-runtime',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(swiper-react)/)',
    // '/node_modules/(?!swiper|ssr-window|dom7)'
  ],
}