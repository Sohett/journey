// This allows us to whitelist some classes that are used in concatenation or interpolation in our code
// base, and that would otherwise be purged. Doc: https://purgecss.com/configuration.html#configuration-file

const purgeCssWhitelistedClasses = [
  // 'example',
]

module.exports = purgeCssWhitelistedClasses;
