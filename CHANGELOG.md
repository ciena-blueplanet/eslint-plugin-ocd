# 1.0.8 (2018-07-20)

* .  `Fixed` issue where plugin would break when it encounters a spread operator when destructuring an object


# 1.0.7 (2018-07-20)

* **Fixed** Travis API key.


# 1.0.6 (2018-03-07)
* **Updated** pull request and issue templates to remove unrelated specifics
* **Updated** to use version 3 of `pr-bumper`
* **Updated** CI to run node version `8.1.2`
* **Added** `package-lock.json` file

# 1.0.5 (2018-03-06)
* **Updated** the repository.url value in package.json


# 1.0.4 (2018-03-06)
* **Updated** `PULL_REQUEST_TEMPLATE.md`
* **Added** `ISSUE_TEMPLATE.md`
* **Added** slack channel integration

# 1.0.3 (2017-12-18)
* **Updated** babel-eslint to ^8.0.3 (verified)
* **Updated** pin eslint-plugin-promise @ 3.6.0 (verified)
* **Updated** pin eslint-plugin-standard @ 3.0.1 (verified)
* **Updated** pin eslint-config-standard @ 10.2.1 (verified)
* **Updated** pin eslint-plugin-import @ 2.8.0 (verified)
* **Updated** pin eslint-plugin-node @ 5.2.1 (verified)


# 1.0.2 (2017-11-21)
* **Updated** engine node version to `>= 6.0.0`


# 1.0.1 (2017-11-21)
* **Updated** to `pr-bumper` version 2
* **Updated** `PULL_REQUEST_TEMPLATE.md` with support for `pr-bumper #none#` option
* **Updated** the node engine version to `6.11.0`

# 1.0.0 (2017-11-20)
Updates from PR that did not publish: https://github.com/ciena-blueplanet/eslint-plugin-ocd/pull/15
* **Updated** scripts used in travis CI for publishing
Updates from PR that did not publish: https://github.com/ciena-blueplanet/eslint-plugin-ocd/pull/14
* **Updated** into separate dependencies and devDependencies
* **Updated** to version 4 of `eslint`  
* **Updated** to version 4 of `mocha`
* **Updated** to version 8 of `babel-eslint`
* **Updated** to version 10 of `eslint-config-standard`
* **Added** now needed `eslint-plugin-import` dependency
* **Added** now needed `eslint-plugin-node` dependency
* **Updated** to version 3 of `eslint-plugin-standard`
* **Updated** to version 4 of `remark-cli`
* **Updated** to version 6 of `remark-lint`
* **Updated** version of node to `>= 6.9.1`
* **Removed** running of node versions 4 and 5 from travis CI

# 0.0.6

* **Fixed** typo.


# 0.0.5

* **Added** option to `sort-imports` rule to allow separating local and external packages, with each group being properly sorted.


# 0.0.4

* **Added** `sort-import-declaration-specifiers` rule to sort import declaration specifiers alphabetically.


# 0.0.3

* **Added** `sort-variable-declarator-properties` rule to make sure variable declarator properties are sorted alphabetically.
* **Renamed** `sort-imports` rule to `sort-import-declarations`.


# 0.0.2

* **Fixed** `sort-imports` rule to have deterministic sort.


# 0.0.1

* **Added** missing documentation for `sort-imports` rule.
* **Fixed** build so it will actually publish to npm.


