# turtle-ui

> A small collection of react components with styles.

[![NPM](https://img.shields.io/npm/v/turtle-ui.svg)](https://www.npmjs.com/package/turtle-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save turtle-ui
```

## Usage

#### Button

```jsx
import {Button}  from 'turtle-ui'

class Example extends Component {
  render () {
    return (
      <div>
        <Button>Neutral</Button>
        <Button classes="brand">Brand</Button>
        <Button classes="accent">Accent</Button>

        <Button classes="plain">Neutral</Button>
        <Button classes="brand plain">Brand</Button>
        <Button classes="accent plain">Accent</Button>

        <Button classes="text plain">Neutral</Button>
        <Button classes="brand text plain">Brand</Button>
        <Button classes="accent text plain">Accent</Button>
      </div>
    )
  }
}
```

See [./example/app/](https://github.com/anothrNick/turtle-ui/tree/master/example/src/app) for more usage samples.

## Run Demo Site
This project was bootstrapped with create-react-library so...

Local development is broken into two parts.

First, you'll run rollup to watch your src/ module and automatically recompile it into dist/ whenever you make changes.

```bash
npm start # runs rollup with watch flag 
```

The second part will be running the example/ create-react-app that's linked to the local version of your module.

```bash
# (in another tab) 
cd example
npm link <your-module-name> # optional if using yarn 
npm start # runs create-react-app dev server 
```

Now, anytime you make a change to your component in src/ or to the example app's example/src, create-react-app will live-reload your local dev server so you can iterate on your component in real-time.

#### Components
* Buttons
* Dropdowns
* Forms
* Cards
* Tables
* Modals
* Navs

#### Styles
* Grid
* Typography
* Utility

## TODO
* Responsiveness
* Don't use props as initial state
* Convert styles to be CSS Modules
* Document each component with sample code

## License

MIT © [anothrNick](https://github.com/anothrNick)
