(function() {
'use strict';

	/**
	 * Notes Controller
	 */
	angular
	  .module('myapp.notes')
	  		.controller('NotesController', Controller);

	
	function Controller(notesData) {
	  
		var vm = this;

		vm.notes = notesData.notesList;

		vm.newNote = {};
	    vm.newNote.title = "";
	    vm.newNote.content = "";

	    vm.addNote = function() {     

	        notesData.notesList.push({title: this.newNote.title, content:this.newNote.content});

	        vm.newNote = {};

	        return;

	    };

		vm.deleteNote = function(item) {

		    notesData.notesList.splice(item, 1 );

		    return;
		};

	}

})();