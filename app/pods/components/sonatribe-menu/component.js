import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['menu-wrap'],
  didInsertElement() {
      this._super();
      Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);

    },
  afterRenderEvent() {


    var bodyEl = document.body,
    		content = document.querySelector( '.content-wrap' ),
    		openbtn = document.getElementById( 'open-button' ),
    		closebtn = document.getElementById( 'close-button' ),
    		isOpen = false;

    	function init() {
    		initEvents();
    	}

    	function initEvents() {
    		openbtn.addEventListener( 'click', toggleMenu );
    		if( closebtn ) {
    			closebtn.addEventListener( 'click', toggleMenu );
    		}

    		// close the menu element if the target it´s not the menu element or one of its descendants..
    		content.addEventListener( 'click', function(ev) {
    			var target = ev.target;
    			if( isOpen && target !== openbtn ) {
    				toggleMenu();
    			}
    		} );
    	}

    	function toggleMenu() {
    		if( isOpen ) {
    			classie.remove( bodyEl, 'show-menu' );
    		}
    		else {
    			classie.add( bodyEl, 'show-menu' );
    		}
    		isOpen = !isOpen;
    	}

    	init();
  }
});
