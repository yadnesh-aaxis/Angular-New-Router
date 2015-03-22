angular.module('myapp.notes')

    .service('notesData', function() {
    return {
        notesList: [

        {
            id: 1,
            title: "Deep Linking",
            content: "A deep link reflects where the user is in the app, this is useful so users can bookmark and email links to locations within apps. Round trip apps get this automatically, but AJAX apps by their nature do not. AngularJS combines the benefits of deep link with desktop app-like behavior."
        },
        {
            id: 2,
            title: "Form Validation",
            content: "Client-side form validation is an important part of great user experience. AngularJS lets you declare the validation rules of the form without having to write JavaScript code. Write less code, go have beer sooner. "
        },
        {
            id: 3,
            title: "Server Communication",
            content: "AngularJS provides built-in services on top of XHR as well as various other backends using third party libraries. Promises further simplify your code by handling asynchronous return of data."
        },

        ]
    }
  });