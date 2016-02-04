# Ember-wysihtml

This a simple ember component that wraps Wysihtml.js library.
A working demo can be found at [here](http://marcemira.com/ember-wysihtml).

## Instalation

Simply run `ember install ember-wysihtml` at your ember proyect root folder.
Or `npm install ember-wysihtml --save && ember g ember-wysihtml`.

## Example Usage

On a template:
```handlebars
{{wysi-editor
  content=someContent
  toolbar=myToolbar
  pasteHTML=true
  placeholder="This is a nice placeholder"
}}
```

## Contributing

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
