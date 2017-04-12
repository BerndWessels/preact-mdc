# preact-mdc

## Overview

This is a [preact](https://github.com/developit/preact) integration of the awesome [material-components-web](https://github.com/material-components/material-components-web) material design components library.

## material-design-components-web

This library is the successor of the awesome but now depricated [material-design-lite](https://github.com/google/material-design-lite) library. 

## Goals

We try to provide all available components from `material-design-components-web` as pure `preact` components.
We try to not use any of the MDC `javascript` code but only use the MDC `sass` styles.

## Components

- Button
- Card
  - CardAction
  - CardActions
  - CardHorizontalBlock
  - CardMedia
  - CardMediaItem
  - CardPrimary
  - CardSubtitle
  - CardSupportingText
  - CardTitle
- Checkbox
- CheckboxLabel
- Drawer
  - DrawerContent
  - DrawerHeader
  - DrawerToolbarSpacer
- Fab
- FormField
- IconToggle
- List
  - ListDivider
  - ListGroup
  - ListGroupDivider
  - ListGroupHeader
  - ListItem
  - ListItemDetail
  - ListItemText
  - ListItemTextPrimary
  - ListItemTextSecondary
- Radio
- Snackbar
- Switch
- TextField
- Toolbar
  - ToolbarRow
  - ToolbarSection
  - ToolbarTitle

## Demo

- Here is a [demo project](https://github.com/BerndWessels/preact-mdc-demo) showing all the components and how to use them.
- Here is a [live demo](https://berndwessels.github.io/preact-mdc-demo/) of that project.

## Usage

At the moment we directly provide the components written in ES6 as individual modules.

- Add this library to your project

` npm install --save preact-mdc`

This requires the following depenencies in your project:
```json
    "material-components-web": "0.8.0",
    "material-design-icons": "^3.0.0",
```

### ES6 NPM webpack

Since `preact-mdc` components are ES6 components and used directly from the npm package you might need to tweak your `webpack.config`.
 
Here is an example:

```js
    module: {
      noParse: /\.min\.js/,
      rules: [{
        test: /\.jsx?$/,
        exclude: [/node_modules(?![\/\\]preact-mdc)/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', {loose: true, modules: false}]
            ],
            plugins: [
              'transform-class-properties',
              'transform-object-rest-spread',
              ['transform-react-jsx', {pragma: 'h'}]
            ]
          },
        }]
      }
```


# Contributing

You are very welcome to report issues, make PRs and become a contributor.
