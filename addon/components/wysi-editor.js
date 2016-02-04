import Ember from 'ember';
import layout from '../templates/components/wysi-editor';
/* global wysihtml5, wysihtml5ParserRules */

const { on, computed } = Ember;

export default Ember.Component.extend({
  
  layout,
  editor: null,
  toolbar: [],

  changeEvents: [
    'change',
    'paste',
    'aftercommand:composer',
    'newword:composer',
    'undo:composer',
    'redo:composer'
  ],

  toolbarCustomBtnClass: 'wysi-btn',

  setupEditor: on('didInsertElement', function() {
    const content = this.getAttr('content'),
          pasteHTML = this.getAttr('pasteHTML'),
          placeholder = this.getAttr('placeholder') || null,
          editorNode = this.$().find('.wysi-editor').get(0),
          toolbarNode = this.$().find('.wysi-toolbar').get(0),
          changeEvents = this.get('changeEvents');

    const editor = new wysihtml5.Editor(editorNode, {
      toolbar: toolbarNode,
      parserRules:  pasteHTML ? wysihtml5ParserRules : undefined,
      placeholderText: placeholder
    });

    editorNode.innerHTML = content;

    editorNode.addEventListener('input', () => {
      this.send('updateContent');
    }, false);

    changeEvents.forEach( event => {
      editor.on(event, () => {
        this.send('updateContent');
      });
    });
    
    this.set('editor', editor);
  }),

  toolbarClasses: computed('customToolbarClasses', function(){
    const customToolbarClasses = this.getAttr('customToolbarClasses') || '';
    return `wysi-toolbar ${customToolbarClasses}`;
  }),

  actions: {

    updateContent(){
      const editorNode = this.$().find('.wysi-editor').get(0);
      const newContent = editorNode.innerHTML;
      this.setAttr('content', newContent);
    }

  },

  destroyEditor: on('willDestroyElement', function(){
    const editor = this.get('editor'),
          editorNode = this.$().find('.wysi-editor').get(0),
          changeEvents = this.get('changeEvents');

    changeEvents.forEach( event => {
      editor.off(event, () => {
        this.send('updateContent');
      });
    });

    editorNode.removeEventListener('input', null, false);

    editor.destroy();
  })

});
