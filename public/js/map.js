// Building road (x, y, angle, 'image')
function building_road() {
    const road_map = [
        // [435, 566, 18, 'road'], //1
        // [496, 537, 109, 'road'], //2
        // [524, 597, 18, 'road'], //3
        // [617, 628, 18, 'road'], //4
        // [675, 600, 109, 'road'], //5
        // [705, 658, 18, 'road'], //6
        // [851, 708, 18, 'road'], //7
        // [912, 681, 109, 'road'], //8
        // [944, 741, 18, 'road'], //9
        // [1071, 784, 17, 'road'], //10
        // [1129, 756, 109, 'road'], //11
        // [1161, 816, 16, 'road'], //12
        // [523, 444, 108, 'road'], //13
        // [592, 419, 32, 'road'], //14
        // [671, 394, 108, 'road_longer'], //15
        // [693, 450, 38, 'road'], //16
        // [706, 502, 108, 'road'], //17
        // [737, 464, 164, 'road'], //18
        // [913, 518, 26, 'road'], //19
        // [942, 575, 108, 'road'], //20
        // [985, 494, 107, 'road'], //21
        // [1014, 547, 30, 'road'], //22
        // [1144, 587, 38, 'road'], //23
        // [1160, 633, 100, 'road'], //24
        // [1190, 591, -18, 'road'], // 25
        // [1226, 554, 100, 'road'], // 26
        // [1239, 601, 36, 'road'], // 27
        // [1263, 642, 90, 'road'], // 28
        // [1289, 600, -25, 'road'], // 29
        // [680, 337, 104, 'road_longer'], // 30
        // [695, 240, 104, 'road_longer'], // 31
        // [739, 300, 10, 'road'], // 32
        // [953, 386, 12, 'road'], // 33
        // [996, 445, 104, 'road'], // 34
        // [1015, 351, 104, 'road_longer'], // 35
        // [1178, 306, 80, 'road'], // 36
        // [1195, 401, 82, 'road'], // 37
        // [1232, 345, -10, 'road'], // 38
        // [1470, 297, -30, 'road_longer'], // 39      

        // [1499, 231.1, 72, 'road_longest'], // 40
        // [1551.1, 320.9, 72, 'road_longest'], // 41
        // [1001.7, 120, 10, 'road'], // 42
        // [1051.6, 172.7, 92, 'road_longer'], //43
        // [1108.1, 126.7, 0, 'road'], // 44
        // [1156.1, 170.5, 88, 'road'], // 45
        // [1198.3, 122.9, -4, 'road'], // 46
        // [1377.6, 101.3, -12, 'road'], // 47
        // [1450, 139.3, 84, 'road_longest'], // 48
        // [1492.4, 84, -15, 'road'], // 49
    ]
    obstacle_group = game.add.group(); 
    for (var i = 0; i < road_map.length; i++){
        create_a_fence(road_map[i])
    }
}

// Automatic car
function creating_autocar(x, y, angle) {
    auto_car = game.add.sprite(x, y, 'auto_car');
    auto_car.anchor.set(0.5);
    auto_car.scale.set(0.1);

    game.physics.p2.enable(auto_car, false);
    game.camera.follow(auto_car, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

    auto_car.body.angle = angle;
    auto_car.body.setCollisionGroup(carCollisionGroup);
    auto_car.body.collides(obstacleCollisionGroup, car_obstacle_collisionHandler, this);
    auto_car.body.collides(goalCollisionGroup, get_to_goal_collisionHandler, this)
}

// Goal
function creating_goal(x, y) {
    goal = game.add.sprite(x, y, 'goal');
    goal.anchor.set(0.5);
    goal.scale.set(0.5);
    
    game.physics.p2.enable(goal, false);
    goal.body.setCollisionGroup(goalCollisionGroup);
    goal.body.collides(carCollisionGroup);

    goal.body.setZeroDamping();
    goal.body.fixedRotation = true;

    game.camera.follow(auto_car); // Custom
}

// Fences to make road
function create_a_fence(road_map){
    var fence = game.add.sprite(road_map[0], road_map[1], road_map[3]);
    fence.anchor.set(0.5);
    fence.scale.set(1);

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

function creating_obstacles() {
   obstacle1 = game.add.sprite(200, 200, 'obstacle');
   obstacle1.scale.set(0.25);

   obstacle2 = game.add.sprite(200, 300, 'obstacle');
   obstacle2.scale.set(0.25);

   obstacle3 = game.add.sprite(200, 400, 'obstacle');
   obstacle3.scale.set(0.25);
   
   obstacle4 = game.add.sprite(200, 500, 'obstacle');
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

