// Building road (x, y, angle, 'image')
function building_road() {
    const road_map = [
        // start creating road
        [544, 923, 16, '780road'],
        [895, 731, 105, '780road'],
        [1828, 881, 10, '330road'],
        [1875, 558, 7, '330road'],
        [1921, 232, 9, '330road'],
        [2365, 140, 100, '780road'],
        [2765, 208, 90, '35road'],
        [1965, 70, 95, '35road'],
        [2363, 170, 100, '780road'],
        [2766, 237, 90, '35road'],
        [1960, 208, 9, '216road'],
        [2328, 370, 98.5, '780road'],
        [2730, 431, 101, '35road'],
        [2755, 435, 101, '35road'],
        [2780, 284, 4, '90road'],
        [2775, 372, 4, '90road'],
        [2772, 420, 4, '35road'],
        [2820, 284, 4, '90road'],
        [2814, 372, 4, '90road'],
        [2810, 417, 4, '35road'],
        [2865, 280, 1, '90road'],
        [2866, 364, -2, '90road'],
        [2868, 411, -2, '35road'],
        [2848, 202, 87, '216road'],
        [2844, 236, 86, '35road'],
        [2828, 432, 86, '35road'],
        [2852, 431, 86, '35road'],
        [2325, 401, 98.5, '780road'],
        [2723, 461, 99.5, '90road'],
        [2707, 659, 17, '400road'],
        [2620, 952, 16, '216road'],
        [2591, 1050, 16, '35road'],
        [1913, 540, 7.5, '400road'],
        [1881, 769, 8, '90road'],
        [2065, 880, 109, '400road'],
        [2349, 980, 110, '216road'],
        [2484, 1028, 110, '216road'],
        [2060, 908, 109.5, '400road'],
        [2342, 1008, 110, '216road'],
        [2477, 1056, 110, '216road'],
        [1853, 948, 10, '216road'],
        [2028, 1109, 105, '400road'],
        [2341, 1196, 107, '400road'],
        [2011, 1170, 105, '400road'],
        [2320, 1259, 107, '400road'],
        [2755, 633, 17, '330road'],
        [2641, 1012, 16, '400road'],
        [2580, 1225, 16, '90road'],
        [2565, 1137, 16, '90road'],
        [2544, 1211, 16, '90road'],
        [2820, 472, 85, '35road'],
        [2855, 468, 84, '35road'],
        [3100, 180, 84, '400road'],
        [3390, 147, 82, '216road'],
        [3580, 112, 77, '216road'],
        [3099, 207, 84, '400road'],
        [3304, 185, 84, '90road'],
        [3484, 161, 81, '216road'],
        [3604, 140, 74, '35road'],
        [2904, 335, -2, '216road'],
        [2965, 635, -16.5, '400road'],
        [3030, 855, -16.5, '90road'],
        [2930, 657, -17, '400road'],
        [2989, 851, -17, '90road'],
        [2809, 826, 108.5, '216road'],
        [2955, 876, 108.5, '90road'],
        [2856, 875, 108.5, '330road'],
        [3402, 372, -16, '400road'],
        [3488, 667, -16, '216road'],
        [3435, 371, -16.5, '400road'],
        [3520, 661, -16, '216road'],
        [3700, 318, -24, '400road'],
        [3821, 585, -25, '216road'],
        [3826, 400, -24.8, '780road'],
        [4223, 1062, -37.3, '780road'],
        [3987, 886, -32, '400road'],
        [4135, 1071, -39, '400road'],
        [4096, 1241, 84, '330road'],
        [3874, 1290, 76, '330road'],
        [4112, 1308, 78, '780road'],
        [3710, 724, 76, '330road'],
        [3722, 753, 76, '330road'],
        [3323, 822, 75, '400road'],
        [3088, 884, 74, '90road'],
        [3336, 852, 75, '400road'],
        [3100, 915, 75, '90road'],
        [3406, 1109, 75, '400road'],
        [3174, 1172, 75, '90road'],
        [3410, 1141, 75, '400road'],
        [3182, 1202, 75, '90road'],
        [3522, 1373, 75.5, '330road'],
        [3540, 1441, 76, '330road'],
        [3368, 1485, 76, '35road'],
        [3557, 905, -15, '216road'],
        [3587, 1013, -15, '90road'],
        [3612, 983, -15.5, '400road'],
        [3682, 1227, -16, '216road'],
        [3650, 1225, -16, '216road'],
        [3088, 1030, -17, '216road'],
        [3120, 1139, -16, '90road'],
        [3069, 1119, -16, '400road'],
        [3124, 1274, -20, '330road'],
        [3172, 1412, -29, '90road'],
        [3178, 1312, -20.5, '216road'],
        [3222, 1422, -30, '35road'],
        [3249, 1432, 75, '35road'],
        [3277, 1429, 92, '35road'],
        [3426, 1285, 41.5, '400road'],
        [3571, 1124, 42, '90road'],
        [3485, 1270, 41, '400road'],
        [3346, 1532, 10, '90road'],
        [3326, 1577, 45, '35road'],
        [3702, 1417, -8, '35road'],
        [3707, 1450, -5, '35road'],
        [3698, 1510, 12, '90road'],
        [3688, 1573, -5, '90road'],
        [3738, 1499, -2, '216road'],
        [3567, 1767, 58, '90road'],
        [3638, 1714, 48, '90road'],
        [3682, 1642, 14, '90road'],
        [3709, 1674, 28, '90road'],
        [3723, 1610, 5, '90road'],
        [3728, 1530, 12, '90road'],
        [3661, 1740, 48, '90road'],
        [3591, 1794, 58, '90road'],
        [3485, 1784, 100, '90road'],
        [3512, 1819, 96, '90road'],
        [3436, 1807, 102, '90road'],
        [3415, 1768, 105, '90road'],
        [3376, 1790, 110, '35road'],
        [3357, 1749, 113, '35road'],
        [3353, 1781, 110, '35road'],
        [3332, 1699, -10, '90road'],
        [3321, 1634, -10, '90road'],
        [3375, 1935, -13, '330road'],
        [3414, 2102, -13, '35road'],
        [3330, 1879, -13, '400road'],
        [3280, 1640, -8, '90road'],
        [3271, 2036, 109, '216road'],
        [3158, 1997, 108.6, '90road'],
        [3184, 1782, 18, '400road'],
        [3122, 1970, 18, '35road'],
        [3143, 1745, 18, '400road'],
        [3076, 1952, 18, '35road'],
        [3201, 1540, -13, '35road'],
        [2880, 1907, 107.6, '400road'],
        [2570, 1813, 106.6, '330road'],
        [3000, 1395, 106, '400road'],
        [2727, 1315, 107, '330road'],
        [3005, 1469, 106, '400road'],
        [2704, 1379, 107, '330road'],
        [2489, 1520, 17, '400road'],
        [2426, 1725, 17, '90road'],
        [2452, 1510, 17, '400road'],
        [2390, 1714, 17, '90road'],
        [1778.5, 1315, 12, '400road'],
        [1738, 1510, 12, '90road'],
        [1742, 1303, 12, '400road'],
        [1702, 1496, 12, '90road'],
        [2185, 1695, 107.5, '400road'],
        [1887, 1602, 107, '330road'],
        [2005, 1681, 107.5, '780road'],
        [1286, 1460, 107, '780road'],
        [726, 1283, 108.5, '400road'],
        [499, 1207, 108.5, '90road'],
        [1502, 1484, 106.5, '400road'],
        [1232, 1404, 106.5, '216road'],
        [904, 1300, 108.3, '400road'],
        [617, 1204, 109, '216road'],
        [1027, 839, 106.5, '400road'],
        [748, 760, 105, '216road'],
        [1599, 1037, 110.5, '400road'],
        [1355, 946, 110, '216road'],
        [1435, 907, 110.5, '780road'],
        [1212, 1108, 16.8, '400road'],
        [1144, 1332, 17, '90road'],
        [1150, 1171, 17, '400road'],
        [1252, 952, 5, '90road'],
        [1213, 937, 5, '90road'],
        [587, 921, 16, '400road'],
        [528, 1128, 16, '90road'],
        [3260, 1592, 100, '35road'],
        [2740, 1910, 107.2, '780road'],
        [3248, 2072, 107.2, '400road'],
        [3252, 1510, 0, '35road'],
        [3268, 1492, 90, '35road'],
        [3268, 1527, 90, '35road'],
        [3284, 1510, 0, '35road'],
        // finish creating road

        //start creating barrier

    ]
    obstacle_group = game.add.group();
    for (var i = 0; i < road_map.length; i++) {
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
function create_a_fence(road_map) {
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
const greenLight = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const redLight = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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

    for (var i = 0; i < trafficLight_position.length; i++) {
        create_trafficLight(trafficLight_position[i])
    }
}

function create_trafficLight(light_map) {
    var light = game.add.sprite(light_map[0], light_map[1], 'traffic_light_test');
    light.anchor.set(0.5);
    light.scale.set(0.5);

    light.animations.add('light', light_map[3], 2, true); // 1 = 1 frames in a second
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

