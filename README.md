[![Ember Observer Score](http://emberobserver.com/badges/ember-wysihtml.svg)](http://emberobserver.com/addons/ember-wysihtml)

# Ember-wysihtml

This a simple ember component that wraps Wysihtml.js library.
A working demo can be found at [here](http://marcemira.com/ember-wysihtml).

## Instalation

Simply run `ember install ember-wysihtml` at your ember project root folder.
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

On a controller/component:
```javascript
  myToolbar: [
    { command: 'bold', title: 'Ctrl+B', iconClass: 'fa fa-bold', iconAlt:'Bold'},
    { command: 'italic', title: 'Ctrl+I', iconClass: 'fa fa-italic', iconAlt:'Italic' },
    { command: 'underline', title: 'Ctrl+U', iconClass: 'fa fa-underline', iconAlt:'Underline' }
  ]
```

## Component Parameters
```handlebars
{{wysi-editor
  content=someContent
  toolbar=myToolbar
  customToolbarClasses="my-custom-toolbar",
  toolbarCustomBtnClass="wysi-btn"
  pasteHTML=false
  placeholder="Some nice place holder"
  ...  
}}
```

## Toolbar setup

A toolbar is an `Array` of objects defined like this:

```javascript
  myToolbar: [
    ...
    { 
      command: 'someValidCommand', // data-wysihtml5-command
      commandValue: someValue      // data-wysihtml5-command-value
      commandValueBlank: true      // data-wysihtml5-command-blank-value (boolean)
      action: 'someValidAction',   // data-wysihtml5-action
      title: 'A title',
      iconClass: 'my-icon-class', 
      iconAlt:'Alt if iconClass not used'
    },
    ...
  ]
```

Check valid command and actions at [https://github.com/Voog/wysihtml/blob/master/examples/advanced.html](https://github.com/Voog/wysihtml/blob/master/examples/advanced.html)

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
