var game = new Phaser.Game(1800, 900, Phaser.CANVAS, 'automatic_car', { preload: preload, create: create, update: update});

var cursors;

var auto_car;
var obstacle_group;
var trafficLight_group;
var goal;
var switch_auto_driving = false;

// Collision
var obstacleCollisionGroup;
var trafficLightCollisionGroup;
var carCollisionGroup;
var goalCollisionGroup;

// Reloading all resources of the game
function preload () {
    game.load.image('background', '../assets/images/background.png');
    game.load.image('obstacle', '../assets/images/obstacle.jpg');
    game.load.image('auto_car', '../assets/images/auto_car.jpg');
    game.load.image('diagonal_road', '../assets/images/diagonal_road.jpg');
    game.load.image('road', '../assets/images/road.jpg');
    game.load.image('road_longer', '../assets/images/road_longer.jpg');
    game.load.image('road_longest', '../assets/images/road_longest.jpg');
    game.load.image('bar', '../assets/images/bar.jpg');
    game.load.image('goal', '../assets/images/goal.jpg');
    game.load.image('button', '../assets/images/button.png');
    game.load.image('findwaw_button', '../assets/images/findwaw_button.png');

    game.load.image('kaboom', '../assets/images/kaboom.jpg');
    game.load.image('signal', '../assets/images/signal.jpg');
    game.load.spritesheet('traffic_light_test', '../assets/images/traffic_light.png', 10, 100, 20);
}

// Creating some objects in the map
function create () {
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.setImpactEvents(true);
    game.physics.p2.restitution = 0;

    set_up_collision_group()

    set_up_screen()
    set_up_dragging_object()
    // set up signal to automatic finding way
    set_up_signal()

    cursors = game.input.keyboard.createCursorKeys();
}

// Updating objects and map when we have something changed
function update() {
    if (switch_auto_driving === false) {
        // driving by yourself
        self_driving();
    }else{
        //keep box obstacle imovable after dragging
        obstacle1.body.static = true
        obstacle2.body.static = true
        obstacle3.body.static = true
        obstacle4.body.static = true
        //automatic driving
        automatic_finding_way ()
    }

}


// ----------support function ------------
function findingWayOnClick() {
    find_way();
}

function startOnClick () {
    switch_auto_driving = true;
}

// Collision function
function get_to_goal_collisionHandler (body1, body2) {
    console.log("Finished !!")
    goal.kill();

    game_over(goal);
}
function car_obstacle_collisionHandler (body1, body2) {
    console.log("Boommmm !!")
    // auto_car.kill();

    // game_over(auto_car);
}

// When automatic car was destroyed
function game_over(object) {
    switch_auto_driving = false;

    var explosion = game.add.sprite(object.x, object.y, 'kaboom');
    explosion.anchor.set(0.5);
    explosion.scale.set(0.2);
    setTimeout(function () {
        explosion.kill();
    }, 700);
}
