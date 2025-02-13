# Changes

## [3.2.0](https://github.com/prantlf/r.js/compare/v3.1.0...v3.2.0) (2024-07-25)

### Features

* Upgrade meriyah ([24d4eb6](https://github.com/prantlf/r.js/commit/24d4eb6b90573cbda01e98c6ac806fc0983cfff5))

## [3.1.0](https://github.com/prantlf/r.js/compare/v3.0.2...v3.1.0) (2024-07-22)

### Features

* Upgrade dependencies ([5595927](https://github.com/prantlf/r.js/commit/5595927ac1c0860bb118bb1dc891f3184066bc88))

### Bug Fixes

* Fixes requirejs/requirejs#1854, prototype pollution ([da8c9f8](https://github.com/prantlf/r.js/commit/da8c9f8a9fffe540e29574bbf0146a0ed7763e9e))

## [3.0.2](https://github.com/prantlf/r.js/compare/v3.0.1...v3.0.2) (2023-04-23)

### Bug Fixes

* Fix the "Cannot read property 'type' of undefined" bug ([62acd22](https://github.com/prantlf/r.js/commit/62acd22ea159a157eaf02e780f7dc02c6c6aafe6))

## [3.0.1](https://github.com/prantlf/r.js/compare/v3.0.0...v3.0.1) (2023-04-23)

### Bug Fixes

* Upgrade meriyah ([d89978c](https://github.com/prantlf/r.js/commit/d89978c59ccef7d5939822a00b04853cb265a99a))

## [3.0.0](https://github.com/prantlf/r.js/compare/v2.5.0...v3.0.0) (2022-04-08)

### Bug Fixes

* Replace Esprima with Meriyah ([01ebd7b](https://github.com/prantlf/r.js/commit/01ebd7b521f9a03bb736db886c37cbf6f21b2f9c))

### BREAKING CHANGES

* Changing the parser library might break an existing code.
Although it is not expected, because both parsers implement the ESTree AST,
it might happen.

## [2.5.0](https://github.com/prantlf/r.js/compare/v2.4.8...v2.5.0) (2022-02-21)

### Features

* Let the application process the root-level dependencies by a callback ([0e285f3](https://github.com/prantlf/r.js/commit/0e285f3124f60c861c15db1b64922d4d4645be58))

## [2.4.8](https://github.com/prantlf/r.js/compare/v2.4.7...v2.4.8) (2022-02-13)

### Bug Fixes

* Work around invalid original mappings ([1bcda37](https://github.com/prantlf/r.js/commit/1bcda3751103ece36b835a955ca7d3676abf9616))

## [2.4.7](https://github.com/prantlf/r.js/compare/v2.4.6...v2.4.7) (2022-02-13)

### Bug Fixes

* Include esprima and source-map with a modified UMD wrapper ([b7624a1](https://github.com/prantlf/r.js/commit/b7624a1785e7eba4a602ee84fdc33c18b8d2910a))

## [2.4.6](https://github.com/prantlf/r.js/compare/v2.4.5...v2.4.6) (2022-02-13)

### Bug Fixes

* Fix loading esprima ([f8433bc](https://github.com/prantlf/r.js/commit/f8433bc09420d543e013b9922c200747f5d434ab))

## [2.4.5](https://github.com/prantlf/r.js/compare/v2.4.4...v2.4.5) (2022-02-12)

### Bug Fixes

* Upgrade source-map ([787b5df](https://github.com/prantlf/r.js/commit/787b5df0f89ee94ce3d8a2f241af6aebab373a93))

## [2.4.4](https://github.com/prantlf/r.js/compare/v2.4.3...v2.4.4) (2022-02-11)

### Bug Fixes

* Avoid prototype polution when creating a new context ([3e9eb74](https://github.com/prantlf/r.js/commit/3e9eb743f6d8d5c077bef4f24893dd59d8fafe33))
* Upgrade esprima ([242041b](https://github.com/prantlf/r.js/commit/242041b8620a366ca476095ea8b5e8e90891630a))

## [2.4.3](https://github.com/prantlf/r.js/compare/v2.4.2...v2.4.3) (2022-02-11)

### Bug Fixes

* Fix loading of source maps from an external file ([a4b2137](https://github.com/prantlf/r.js/commit/a4b2137aedfd3a164ffac42b8959dbedd972bd93))

## [2.4.2](https://github.com/prantlf/r.js/compare/v2.4.1...v2.4.2) (2022-01-09)

### Bug Fixes

* Log errors from source map parsing, unify sourcer map wiring up ([3f43fde](https://github.com/prantlf/r.js/commit/3f43fde7e4ed3092f8fe6c6ee306a6cf22bee7ed))

## [2.4.1](https://github.com/prantlf/r.js/compare/v2.4.0...v2.4.1) (2022-01-03)

### Bug Fixes

* Update dist/r.js ([a92da6c](https://github.com/prantlf/r.js/commit/a92da6c61cfe24b47a25420e3df9fea069161472))

## [2.4.0](https://github.com/prantlf/r.js/compare/2.3.6...v2.4.0) (2022-01-03)

### Features

* Wire up source maps from transpiled modules to the bundle source map ([02fe77c](https://github.com/prantlf/r.js/commit/02fe77cd43eb1816205d395a9a5b25225ae8a844))

The first release after forking the original project.
