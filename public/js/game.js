var game = new Phaser.Game(4450, 2250, Phaser.CANVAS, 'automatic_car', { preload: preload, create: create, update: update });

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
function preload() {
    game.load.image('background', '../assets/images/map.png');
    game.load.image('obstacle', '../assets/images/obstacle.jpg');
    game.load.image('auto_car', '../assets/images/auto_car.jpg');
    game.load.image('diagonal_road', '../assets/images/diagonal_road.jpg');
    game.load.image('35road', '../assets/images/35road.jpg');
    game.load.image('90road', '../assets/images/90road.jpg');
    game.load.image('216road', '../assets/images/216road.jpg');
    game.load.image('330road', '../assets/images/330road.jpg');
    game.load.image('400road', '../assets/images/400road.jpg');
    game.load.image('780road', '../assets/images/780road.jpg');
    game.load.image('bar', '../assets/images/bar.jpg');
    game.load.image('goal', '../assets/images/goal.jpg');
    game.load.image('run', '../assets/images/run.png');
    game.load.image('find', '../assets/images/find.png');
    game.load.image('reload', '../assets/images/reload.png');
    game.load.image('kaboom', '../assets/images/kaboom.jpg');
    game.load.image('signal', '../assets/images/signal.jpg');
    game.load.spritesheet('traffic_light_test', '../assets/images/traffic_light.png', 10, 100, 20);
}

// Creating some objects in the map
function create() {
    // game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
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
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.refresh();
    if (switch_auto_driving === false) {
        // driving by yourself
        self_driving();
    } else {
        //keep box obstacle imovable after dragging
        obstacle1.body.static = true
        obstacle2.body.static = true
        obstacle3.body.static = true
        obstacle4.body.static = true
        //automatic driving
        automatic_finding_way()
    }

    if (cursors.up.isDown) {
        auto_car.body.moveUp(300)
    }
    else if (cursors.down.isDown) {
        auto_car.body.moveDown(300);
    }

    if (cursors.left.isDown) {
        auto_car.body.velocity.x = -300;
    }
    else if (cursors.right.isDown) {
        auto_car.body.moveRight(300);
    }

}


// ----------support function ------------
function findingWayOnClick() {
    find_way();
}

function startOnClick() {
    // to be updated
    switch_auto_driving = true;
}

function reloadOnClick() {
    location.reload();
}

// Collision function
function get_to_goal_collisionHandler(body1, body2) {
    console.log("Finished !!")
    goal.kill();

    game_over(goal);
}
function car_obstacle_collisionHandler(body1, body2) {
    console.log("Boommmm !!")
    // auto_car.kill();

    // game_over(auto_car);
}

// When automatic car was destroyed
function game_over(object) {
    switch_auto_driving = false;

    var explosion = game.add.sprite(object.x, object.y, 'kaboom');
    explosion.anchor.set(0.5);
    explosion.scale.set(0.3);
    setTimeout(function () {
        explosion.kill();
    }, 700);
}
