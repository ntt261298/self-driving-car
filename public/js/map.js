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
        // [510, 1189, 15, '35road'], // 1
        // [494, 1168, 106, '35road'], // 2
        // [622, 726, 106, '35road'], // 3
        // [650, 700, 15, '90road'], //4
        // [1214, 860, -5, '90road'], //5
        // [1248, 866, -5, '90road'], //6
        // [1235, 903, 105, '35road'], //7
        // [1111, 1368, 106, '35road'], //8
        // [1088, 1381, 15, '35road'], //9
        // [1125, 1392, 15, '35road'], //10
        // [1689, 1560, 10, '35road'], //11
        // [1710, 1550, 105, '35road'], //12
        // [1726, 1573, 10, '35road'], //13
        // [1791, 1073, 12, '90road'], //14
        // [1801, 1116, 105, '35road'], //15
        // [1828, 1088, 12, '90road'], //16
        // [1816, 1051, 105, '35road'], //17
        // [1852, 840, 105, '35road'], //18
        // [1872, 829, 8, '35road'], //19
        // [1860, 810, 105, '35road'], //20
        // [1920, 343, 98, '35road'], //21
        // [1941, 328, 8, '35road'], //22
        // [1924, 308, 98, '35road'], //23 
        // [1958, 100, 98, '35road'], //24
        // [1980, 89, 8, '35road'], //25
        // [2781, 223, -8, '35road'], //26
        // [2820, 222, -10, '35road'], //27
        // [2867, 218, 7, '35road'], //28
        // [2803, 239, 90, '35road'], //29
        // [2901, 216, 7, '35road'], //30
        // [2882, 235, 90, '35road'], //31
        // [2791, 438, 85, '35road'], //32
        // [2768, 453, 10, '35road'], //33
        // [2807, 456, 10, '35road'], //34
        // [2870, 448, -7, '35road'], //35
        // [2888, 430, 85, '35road'], //36
        // [2893, 465, 85, '35road'], //37
        // [2784, 472, 90, '35road'], //38
        // [3345, 169, -10, '35road'], //39
        // [3375, 166, -15, '35road'], //40
        // [3363, 183, 80, '35road'], //41
        // [3612, 120, -20, '35road'], //42
        // [3662, 128, 75, '90road'], //43
        // [3872, 699, -25, '35road'], //44
        // [4305, 1228, 100, '90road'], //45
        // [4265, 1240, -32, '90road'], //46
        // [3721, 1358, -18, '90road'], //47
        // [3715, 1400, 80, '35road'], //48
        // [3689, 1367, -15, '90road'], //49
        // [3696, 1334, 80, '35road'], //50
        // [3627, 1105, 43, '35road'], //51
        // [3618, 1082, 80, '35road'], //51a
        // [3610, 1105, -15, '35road'], //52
        // [3601, 1074, -15, '35road'], //53
        // [3542, 797, 78, '35road'], //54
        // [3554, 779, -15, '35road'], //55
        // [3521, 785, -15, '35road'], //56
        // [3534, 767, 78, '35road'], //57
        // [3050, 910, -20, '35road'], //58
        // [3023, 896, 100, '35road'], //59
        // [3007, 909, -18, '35road'], //60
        // [3036, 930, 90, '35road'], //61
        // [2702, 808, 18, '35road'], //62
        // [3137, 1199, -15, '35road'], //63
        // [3123, 1218, 80, '35road'], //64
        // [3213, 1444, 78, '35road'], //65
        // [3237, 1455, -26, '90road'], //66
        // [3292, 1452, 20, '90road'], //67
        // [3325, 1422, 80, '90road'], //68
        // [3356, 1417, 43, '216road'], //69
        // [3357, 1458, 10, '90road'], //70
        // [3330, 1492, 80, '90road'], //71
        // [3298, 1559, 160, '90road'], //72
        // [3295, 1596, 85, '35road'], //73
        // [3279, 1562, 5, '90road'], //74
        // [3248, 1558, 5, '90road'], //75
        // [3217, 1586, 100, '90road'], //76
        // [3225, 1555, 45, '90road'], //77
        // [3226, 1510, 75, '90road'], //78
        // [3195, 1487, -5, '90road'], //79
        // [3222, 1472, -55, '90road'], //80
        // [3092, 1975, 108, '90road'], //81
        // [2394, 1761, 108, '35road'], //82
        // [2528, 1326, 108, '35road'], //83
        // [2557, 1300, 17, '90road'], //84
        // [2548, 1260, 108, '35road'], //85
        // [2521, 1287, 17, '90road'], //86
        // [2582, 1080, 17, '35road'], //87
        // [2596, 1103, 110, '35road'], //88
        // [2607, 1070, 110, '35road'], //89
        // [2687, 785, 104, '35road'], //90
        // [2678, 815, 104, '35road'], //91
        // [3614, 1054, 80, '35road'], //92
        // [3907, 676, 74, '90road'], //93
        // [3919, 700, 74, '90road'], //94
        // [3114, 1187, 74, '35road'], //95
        // [2369, 1775, 20, '35road'], //96
        // [2404, 1786, 20, '35road'], //97
        // [3065, 1988, 20, '35road'], //98
        // [3106, 2002, 20, '35road'], //99
        // [3322, 1769, 110, '35road'], //100
        // [3314, 1736, 110, '35road'], //101
        // [3339, 1758, -18, '35road'], //102       
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

// Creating traffic lights ----------- 1-9: green, 10-11: yellow, 12-21: red
const greenLight = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
const yellowLight = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const redLight = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var trafficLight_position = [
    //e
    [1789, 1072, 10, greenLight],
    [1817, 1049, 110, greenLight],
    [1832, 1088, 10, greenLight],
    [1801, 1110, 110, greenLight],
    //f
    [1689, 1560, 10, yellowLight],
    [1710, 1545, 105, yellowLight],
    [1726, 1573, 10, yellowLight],
    //g 
    [2528, 1324, 108, redLight],
    [2557, 1300, 17, redLight],
    [2548, 1262, 108, redLight],
    [2521, 1287, 17, redLight],
    //y
    [3050, 910, -20, greenLight],
    [3023, 896, 100, greenLight],
    [3007, 909, -18, greenLight],
    [3036, 930, 90, greenLight],
    //ae
    [2791, 438, 85, yellowLight],
    [2768, 453, 10, yellowLight],
    [2807, 456, 10, yellowLight],
    [2784, 472, 90, yellowLight],

];

var trafficLightImg_position = [
    //e
    [1775, 982, 0, greenLight],
    //f
    [1676, 1472, 0, yellowLight],
    //g
    [2510, 1189, 0, redLight],
    //y
    [3061, 838, 0, greenLight],
    //ae
    [2739, 372, 0, yellowLight],
];

function building_trafficLight() {
    trafficLight_group = game.add.group();

    for (var i = 0; i < trafficLight_position.length; i++) {
        create_trafficLight(trafficLight_position[i])
    }
}

function building_trafficLightImg() {
    trafficLightImg_group = game.add.group();

    for (var i = 0; i < trafficLightImg_position.length; i++) {
        create_trafficLightImg(trafficLightImg_position[i])
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

function create_trafficLightImg(light_map) {
    var light = game.add.sprite(light_map[0], light_map[1], 'traffic_light_img');
    light.anchor.set(0.5);
    light.scale.set(1);

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

