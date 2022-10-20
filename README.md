# `postcss-custom-properties` reproducer

The PR https://github.com/csstools/postcss-plugins/pull/620 broke our
PostCSS setup for globally imported stylesheets that use custom properties.

To see it working before PR 620:

* clone this repository and run `yarn install`
* run `yarn serve`
* visit http://localhost:8080 and check in dev tools that `animation-duration` is set to `1s`

To reproduce the issue:

* change the resolution entry for `postcss-custom-properties` in the `package.json` to `12.1.9`
* run `yarn install` and `yarn serve` again
* visit http://localhost:8080 and observe that `animation-duration` tries to resolve a non-existant custom property

