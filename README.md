# ember-advanced-tutorial

## How I generated this repo boilerplate

Since my process for creating an base level ember app is being parsed from a few different sources, I thought it would be nice to have them in one place incase I need to do this again.

I liked that the `init` command let you do your own git repo/process. Almost all the docs recommend `ember new`, which adds a `.git` setup for you.

**Update/Amendment**:  
It looks like you can also run `ember new` with `--skip-git ` or `-sg` for short. Please note, my README here (at this time) is solely for helping me remember things. What I understand and assert is subject to change as I learn more.

1. In GitHub, created a new empty repo called "ember-advanced-tutorial" .
2. Locally, when in dir of choice, ran my global ember command: `ember init`
3. Added all generated files to GitHub and pushed it up
4. created a new branch for typescript/vscode configs
5. ran ` ember install ember-cli-typescript@latest`
6. ran `ember g component -gc welcome` (**note:** _see below if your confused by the output_)
7. Add eslint/prettier or any further tsconfig if needed
8. For better accessibility, add your preferred lang via the lang attribute in the html tag inside `app/index.html` (e.g. `<html lang="en">`) (_**note:** happens automatically when using `ember new` (referenced here:_ <a href="https://guides.emberjs.com/release/tutorial/part-1/orientation/#toc_creating-a-new-ember-app-with-ember-cli" target="_blank" rel="noopener noreferrer">#toc_creating-a-new-ember-app-with-ember-cli</a>))

### More on the welcome component generation

Minor, but frustrating. You might think your ts setup is wrong when you see js files being generated. It's not. To further the confusion, there are tutorials that show ts files being generated with this command (without the `-ts` flag). I believe if you update your `.ember-cli` file to include ` "isTypeScriptProject": true` it should include `-ts` flag by default, but it appears squash the help warning that the flag gives you. Until I learn more about ember, I plan to use the `-ts` flag version for better insight. That version looks like this: `ember g component -ts -gc welcome`

Example output with ts flag:

```
bgwest:ember-advanced-tutorial bgwest$ ember g component -gc welcome
installing component
  identical app/components/welcome.js
  identical app/components/welcome.hbs
installing component-test
  identical tests/integration/components/welcome-test.js
```

Example output without ts flag

```
bgwest-mac:ember-advanced-tutorial bgwest$ ember g component -gc -ts welcome
installing component
You passed the '--typescript' flag but there is no TypeScript blueprint available. A JavaScript blueprint will be generated instead.
You passed the '--typescript' flag but there is no TypeScript blueprint available. A JavaScript blueprint will be generated instead.
  identical app/components/welcome.js
  identical app/components/welcome.hbs
installing component-test
You passed the '--typescript' flag but there is no TypeScript blueprint available. A JavaScript blueprint will be generated instead.
  identical tests/integration/components/welcome-test.js
bgwest-mac:ember-advanced-tutorial bgwest$
```

# Generated By Ember Init

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://cli.emberjs.com/release/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd ember-advanced-tutorial`
- `npm install`

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `ember test`
- `ember test --server`

### Linting

- `npm run lint`
- `npm run lint:fix`

### Building

- `ember build` (development)
- `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://cli.emberjs.com/release/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
