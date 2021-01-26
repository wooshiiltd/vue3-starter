import { pathsToModuleNameMapper } from 'ts-jest/utils';
import { compilerOptions } from './tsconfig.json';

export default {
    preset: 'ts-jest',
    rootDir: './',
    testEnvironment: 'jsdom',
    testMatch: [
        '**/?(*.)+(test).([tj]s?(x)|vue)'
    ],
    // moduleNameMapper: pathsToModuleNameMapper(compilerOptions?.paths ?? {}, { prefix: '<rootDir>' }),
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\js$': 'babel-jest',
        // '^.+\\.[t]sx?$': 'ts-jest',
        // '.+\\.(css|styl|less|sass|scss|jpg|jpeg|png|svg|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        //     'jest-transform-stub'
    },
    moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    // transformIgnorePatterns: ['/node_modules/'],
    // snapshotSerializers: [
    //     'jest-serializer-vue'
    // ],
    // globals: {
    //     'vue-jest': {
    //         // https://github.com/vuejs/vue-jest#global-jest-options
    //         tsConfig: './tests/tsconfig.json'
    //     },
    //     'ts-jest': {
    //         // https://kulshekhar.github.io/ts-jest/docs/options#options
    //         tsconfig: './tests/tsconfig.json'
    //     }
    // }
};
