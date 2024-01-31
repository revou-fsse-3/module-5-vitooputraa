module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@components(.*)$': '<rootDir>/src/components/$1',
    }
}