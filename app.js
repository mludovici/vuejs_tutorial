new Vue({
    el: "#vue-app",
    data: {
        name: 'Marc',
        test: 'Test',
        job: 'Ninja',
        age: 25,
        x: 0,
        y: 0,
        website: 'http://www.thenetninja.com',
        websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>'
    },
    methods: {
        greet: function(time) {
            return 'Good '+ time + ' ' + this.name;
        },
        add: function(number) {
            return this.age+=number;
        },
        subtract: function(number) {
            return this.age-=number;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function(event) {            
            alert("You clicked me");
        }
    }
});

new Vue({
    el: "#events",
    data: {
        name: "",
        age: "",
    },
    methods: {
        logName: function(event) {
        },
        logAge: function() {
        }        
    }
});

new Vue({
    el: "#cp",
    data: {
        age: 20,
        a: 0,
        b: 0,
        available: false,
        nearby: false
    },/*
    methods: {
     addToA: function() {
         return this.a + this.age;
     },
     addToB: function() {
        return this.b + this.age;
        }
    },*/
    computed: {
        addToA: function() {
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function() {          
            console.log('addToB');
           return this.b + this.age;
           },
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});

new Vue({
    el: "#conditionals",
    data: {
        error: false,
        success: false
    },
    methods: {

    },
    computed: {

    }
})