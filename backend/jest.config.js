module.exports = {
    testEnvironment: "node",
    testEnvironmentOptions: {
      NODE_ENV: "test",
    },
    restoreMocks: true,
    coveragePathIgnorePatterns: [
      "node_modules",
      "config",
      "app.js",
      "server.js",
      "tests",
    ],
    testTimeout: 30000,
    coverageReporters: ["text", "lcov", "clover", "html"],
  };