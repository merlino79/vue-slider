const app = new Vue({

    el: '#app',
    data: {
        counterPhoto: 0,
        photos: [
            'img/gighen.jpg',
            'img/lupen.jpg',
            'img/ragazza.jpg',
            'img/zenigada.jpg',
        ]

    },
    methods: {
        nextPhoto() {
            this.counterPhoto++
                if (this.counterPhoto === this.photos.length) this.counterPhoto = 0;
        },
        prevPhoto() {
            this.counterPhoto--
                if (this.counterPhoto < 0) this.counterPhoto = this.photos.length - 1;
        },
        resetPlay: function() {
            clearInterval(this.timer);
            //this.play();
        },
        play: function() {
            let app = this;
            this.timer = setInterval(function() {
                app.nextPhoto();
            }, 800);
        },







    },
    // created: function() {
    //     //this.play();
    // }






});
//console.log(app);