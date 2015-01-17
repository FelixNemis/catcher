    /*
     * Automatically Included properties:
     * this.game;		//	a reference to the currently running game
     * this.add;		//	used to add sprites, text, groups, etc
     * this.camera;	//	a reference to the game camera
     * this.cache;		//	the game cache
     * this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
     * this.load;		//	for preloading assets
     * this.math;		//	lots of useful common math operations
     * this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
     * this.stage;		//	the game stage
     * this.time;		//	the clock
     * this.tweens;	//	the tween manager
     * this.world;		//	the game world
     * this.particles;	//	the particle manager
     * this.physics;	//	the physics manager
     * this.rnd;		//	the repeatable random number generator
     */
CatcherGame.Game = function () {
    "use strict";
};

CatcherGame.Game.prototype = {
	create: function () {
        "use strict";
        this.DEBUG_MODE = true;
        this.stage.backgroundColor = '#222222';
        //this.add.sprite(0, 0, 'background');
        this.physics.startSystem(Phaser.Physics.ARCADE);

        this.game.add.sprite(this.world.centerX, this.world.centerY, 'targets').anchor.setTo(0.5, 0.5);
        this.rod = this.game.add.sprite(this.world.centerX, this.world.centerY, 'rod');
        this.rod.anchor.setTo(0.5, 0.8888);

        this.keys = {
            'R': this.input.keyboard.addKey(Phaser.Keyboard.R)
        };
	},

	update: function () {
        "use strict";
        /*
        if (!this.mutePushed && this.keys.M.isDown) {
            this.mutePushed = true;
            if (this.sound.mute) {
                this.sound.mute = false;
                this.soundIcon.loadTexture('soundOn');
            } else if (this.game.musicMute) {
                this.sound.mute = true;
                this.music.volume = 0.8;
                this.game.musicMute = false;
                this.soundIcon.loadTexture('muted');
            } else {
                this.music.volume = 0;
                this.game.musicMute = true;
                this.soundIcon.loadTexture('noMusic');
            }
        }

        if (!this.keys.M.isDown) {
            this.mutePushed = false;
        }
        */
        var rod = this.rod;

        rod.angle++;

        if (this.keys.R.isDown) {
            this.reset();
        }
	},

    reset: function () {
        "use strict";
        this.music.stop();
        this.game.state.start('Game');
    },

    gameOver: function () {
        "use strict";
        this.gameOverText.visible = true;
    }
};
