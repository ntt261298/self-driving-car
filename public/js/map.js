// Building road (x, y, angle, 'image')
function building_road() {
    obstacle_group = game.add.group(); 
}

// Automatic car
function creating_autocar(x, y, angle) {
    auto_car = game.add.sprite(x, y, 'auto_car');
    auto_car.anchor.set(0.5);
    auto_car.scale.set(0.14);

    game.physics.p2.enable(auto_car, false);
    auto_car.body.angle = angle;
    auto_car.body.setCollisionGroup(carCollisionGroup);
    auto_car.body.collides(obstacleCollisionGroup, car_obstacle_collisionHandler, this);
    auto_car.body.collides(goalCollisionGroup, get_to_goal_collisionHandler, this)
}

// Goal
function creating_goal(x, y) {
    goal = game.add.sprite(x, y, 'goal');
    goal.anchor.set(0.5);
    goal.scale.set(0.3);
    
    game.physics.p2.enable(goal, false);
    goal.body.setCollisionGroup(goalCollisionGroup);
    goal.body.collides(carCollisionGroup);

    goal.body.setZeroDamping();
    goal.body.fixedRotation = true;
}

// Fences to make road
function create_a_fence(road_map){
    var fence = game.add.sprite(road_map[0], road_map[1], road_map[3]);
    fence.anchor.set(0.5);
    fence.scale.set(0.5);

    game.physics.p2.enable(fence, false);
    fence.body.angle += road_map[2];
    fence.body.static = true
    
    fence.body.setCollisionGroup(obstacleCollisionGroup);
    fence.body.collides([carCollisionGroup, obstacleCollisionGroup, signalXCollistionGroup, signalYCollistionGroup, signalFrontCollistionGroup, signalFrontXCollistionGroup, signalFrontYCollistionGroup]);
    
    obstacle_group.add(fence);
}

// Creating traffic lights -----------
const greenLight = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
const redLight   = [10,11,12,13,14,15,16,17,18,19,0,1,2,3,4,5,6,7,8,9];

var trafficLight_position = [
    // d
    [375, 425, 90, greenLight], [425, 425, 90, greenLight], //a
    [350, 400, 0, redLight], // b
    [375, 375, 90, greenLight], [425, 375, 90, greenLight], // e
    [450, 400, 0, redLight], // i

    //e
    [350, 300, 0, redLight], //c
    [375, 325, 90, greenLight], [425, 325, 90, greenLight], //d
    [375, 275, 90, greenLight], [425, 275, 90, greenLight], //f
    [450, 300, 0, redLight], //j

    //i
    [500, 400, 0, redLight], //d
    [525, 425, 90, greenLight], //h
    [525, 375, 90, greenLight], //j
    [550, 400, 0, redLight], //k

    //n
    [700, 350, 0, redLight], //k
    [725, 375, 90, greenLight], //l
    [750, 350, 0, redLight], //m
    [725, 325, 90, greenLight], //o
];

function building_trafficLight() {
    trafficLight_group = game.add.group();
    
    for (var i = 0; i < trafficLight_position.length; i++){
        create_trafficLight(trafficLight_position[i])
    }
}

function create_trafficLight(light_map) {
    var light = game.add.sprite(light_map[0], light_map[1], 'traffic_light_test');
    light.anchor.set(0.5);
    light.scale.set(0.5);

    light.animations.add('light',  light_map[3], 2, true); // 1 = 1 frames in a second
    light.animations.play('light');

    game.physics.p2.enable(light, false);
    light.body.angle += light_map[2];
    light.body.static = true
    
    light.body.setCollisionGroup(trafficLightCollisionGroup);
    light.body.collides([trafficSignalCollistionGroup]);
    
    obstacle_group.add(light);
}

// ----------------- Creating obstacles  -------------
var obstacle1;
var obstacle2;
var obstacle3;
var obstacle4;

function creating_obstacles(x, y) {
   obstacle1 = game.add.sprite(25, 50, 'obstacle');
   obstacle1.scale.set(0.25);

   obstacle2 = game.add.sprite(75, 50, 'obstacle');
   obstacle2.scale.set(0.25);

   obstacle3 = game.add.sprite(125, 50, 'obstacle');
   obstacle3.scale.set(0.25);
   
   obstacle4 = game.add.sprite(175, 50, 'obstacle');
   obstacle4.scale.set(0.25);
   
   game.physics.p2.enable([obstacle1, obstacle2, obstacle3, obstacle4], false);
   
   set_up_object_collision(obstacle1)
   set_up_object_collision(obstacle2)
   set_up_object_collision(obstacle3)
   set_up_object_collision(obstacle4)
}

function set_up_object_collision(object) {
    object.body.setCollisionGroup(obstacleCollisionGroup);
    object.body.collides([carCollisionGroup,
        signalXCollistionGroup, signalYCollistionGroup, signalFrontCollistionGroup, signalFrontXCollistionGroup, signalFrontYCollistionGroup])
    object.body.setZeroDamping();
    object.body.fixedRotation = true;
}

