$(function() {

    var bbData = [
        {Id: 1, Name: 'Ball Handling'},
        {Id: 2, Name: 'Passing'},
        {Id: 3, Name: 'Shooting'},
        {Id: 4, Name: 'Rebounding'},
        {Id: 5, Name: 'Transition'},
        {Id: 6, Name: 'Defense'},
        {Id: 7, Name: 'Team Offense'},
        {Id: 8, Name: 'Team Deffense'}
    ];

    var bbModel = {
        //data
        tags: ko.observableArray(bbData),
        tagToAdd: ko.observable(''),
        //behaviours
        addTag: function() {
            this.tags.push({Name: this.tagToAdd()});
            this.tagToAdd('');
        }
    };

    ko.applyBindings(bbModel, document.getElementById('bb'));





























    var observableModel = {
        name: ko.observable('Bob'),
        changeName: function(){
            this.name('Steve');
        },
        nameVisible: ko.observable(true)
    };

    observableModel.displayName = ko.computed(function(){
        return this.name() + ' is' + (!this.nameVisible() ? ' not' : '') + ' visible';
    }, observableModel);

    ko.applyBindings(observableModel, document.getElementById('observable'));

    var data = [{name: 'Bob'}, {name: 'Joe'}, {name: 'John'}];
    var observableArrayModel = {
        list: ko.observableArray(data),

        addItem: function(){
            this.list.push({name: 'Steve'});
        },

        removeItem: function(){
            this.list.pop();
        }
    };

    ko.applyBindings(observableArrayModel, document.getElementById('observableArray'));
});