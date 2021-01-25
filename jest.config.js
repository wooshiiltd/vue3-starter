const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

/** @typedef {import('ts-jest/dist/types')} */
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
    preset: 'ts-jest',
    rootDir: './',
    testEnvironment: "@happy-dom/jest-environment",
    testMatch: [
        '**/?(*.)+(test).([tj]s?(x)|vue)',
    ],
    moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
    "moduleDirectories": [
        "node_modules",
        "src"
    ],
    "roots": [
        "<rootDir>",
    ],
    modulePaths: ["<rootDir>/app/"],
    transform: {
        "^.+\\.js$": "babel-jest",
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.[t]sx?$': 'ts-jest',
        '.+\\.(css|styl|less|sass|scss|jpg|jpeg|png|svg|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub'
    },
    transformIgnorePatterns: ['/node_modules/'],
    snapshotSerializers: [
        'jest-serializer-vue'
    ],
    globals: {
        'ts-jest': {
            // https://kulshekhar.github.io/ts-jest/docs/options#options
        },
    },
};
