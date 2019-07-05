module.exports = {
    transform: {
        '^.+\\.ts$': 'ts-jest'
    },
    testEnvironment: 'jsdom',
    testRegex: '/tests/.*\\.(spec)?\\.(ts|js)$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node']
}
