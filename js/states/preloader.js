/* Define a Preloader state for our game
 * The preloader state will load all of our assets that are used in our game,
 * load and create all of our states, and when it is done, it will start
 * the main menu.
 */
var Preloader = function () {};
Preloader.prototype = {

    init: function () {
        /* initialize our progress bar and logo */
        this.loadingBar = game.make.sprite(game.world.centerX-(387/2), 400, "loadingBar");
        this.status = game.make.text(game.world.centerX, 380, 'Loading...', {fill: 'white'});
        utils.centerGameObjects([this.status]);
    },

    preload: function () {
        /* display lime for this state */
        this.stage.backgroundColor = '#000000';
        /* display our progress bar and logo */
        game.add.existing(this.loadingBar);
        game.add.existing(this.status);
        this.load.setPreloadSprite(this.loadingBar);
        /* load the assets for our states */
        this.game.load.script('menu', 'js/states/menu.js');
        this.game.load.script('game', 'js/states/game.js');
        this.game.load.script('gameover', 'js/states/gameover.js');
        /* load all of the assets for our game */
        this.game.load.tilemap('level1', 'assets/images/level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tilesheet1', 'assets/images/tilesheet1.png');
        this.game.load.spritesheet('phaser', 'assets/images/tilesheet1.png', 16, 16);
        this.game.load.image('fire', 'assets/images/fire.png');
        this.game.load.image('background', 'assets/images/forest.png');
        this.game.load.image('spear', 'assets/images/spear.png');
        this.game.load.image('spearHead', 'assets/images/spearHead.png');
        this.game.load.image('stick', 'assets/images/stick.png');
        this.game.load.spritesheet('caveman', 'assets/images/spritesheet_caveman.png', 32, 32);
        this.game.load.spritesheet('birds', 'assets/images/birds.png', 32, 32, 12);
        /* load the audio for our game */
        this.game.load.audio('bgMusic', 'assets/audio/Overworld.mp3');
        this.game.load.audio('menuMusic', 'assets/audio/MenuFinal.mp3');
        this.game.load.script('style', 'js/style.js');
    },

    create: function () {
        /* add the rest of our states to our game */
        game.state.add('MainMenu', MainMenu);
        game.state.add('Game', Game);
        game.state.add('GameOver', GameOver);
        /* start the main menu state */
        setTimeout(function () {
            this.game.state.start('MainMenu');
            //this.game.state.start('Game');
        }, 500);
    }

};
