// Dragging functions ---------------
var mouseBody;
var mouseConstraint;

function set_up_dragging_object() {
    mouseBody = new p2.Body();
    game.physics.p2.world.addBody(mouseBody);

    // attach pointer events
    game.input.onDown.add(click, this);
    game.input.onUp.add(release, this);
    game.input.addMoveCallback(move, this);
}

function click(pointer) {
    var bodies = game.physics.p2.hitTest(pointer.position, [auto_car.body, goal.body, obstacle1.body, obstacle2.body, obstacle3.body, obstacle4.body]);
    
    console.log('Position X: ', Math.round(pointer.position.x * 10) / 10, ' Position Y: ', Math.round(pointer.position.y * 10) / 10)
    // p2 uses different coordinate system, so convert the pointer position to p2's coordinate system
    var physicsPos = [game.physics.p2.pxmi(pointer.position.x), game.physics.p2.pxmi(pointer.position.y)];
    
    if (bodies.length){
        var clickedBody = bodies[0];
        
        var localPointInBody = [0, 0];
        // this function takes physicsPos and coverts it to the body's local coordinate system
        clickedBody.toLocalFrame(localPointInBody, physicsPos);
        
        // use a revoluteContraint to attach mouseBody to the clicked body
        mouseConstraint = this.game.physics.p2.createRevoluteConstraint(mouseBody, [0, 0], clickedBody, [game.physics.p2.mpxi(localPointInBody[0]), game.physics.p2.mpxi(localPointInBody[1]) ]);
    }   
}

function release() {
    // remove constraint from object's body
    game.physics.p2.removeConstraint(mouseConstraint);
}

function move(pointer) {
    // p2 uses different coordinate system, so convert the pointer position to p2's coordinate system
    mouseBody.position[0] = game.physics.p2.pxmi(pointer.position.x);
    mouseBody.position[1] = game.physics.p2.pxmi(pointer.position.y);
}

// set up screen
function set_up_screen() {
    game.stage.backgroundColor = '#ffffff';
    background = game.add.tileSprite(405, 0, 4450, 2250, 'background'); // Custom
    game.world.setBounds(0, 0, 4450, 2250); // Custom

    // Roads
    building_road();

    // Traffic light lines
    building_trafficLight();

    // Traffic light images
    building_trafficLightImg();

    // Obstacles
    creating_obstacles();

    // Goal
    creating_goal(200, 400);

    // Auto car
    creating_autocar(650, 692, 100);

    // Point positions
    // [489.4, 1183.9], //a
    // [628.9, 692.6], //b
    // [1230.2, 862.8], //c
    // [1102.6, 1391], //d
    // [1805.5, 1090.1], //e
    // [1706.5, 1565.9], //f
    // [2540.7, 1292], //g
    // [2389.2, 1783.2], //h
    // [3087.5, 1993.3], //i
    // [3191.8, 1485.3], //k
    // [3211.6, 1446.7], //m
    // [3331.7, 1425.4], //n
    // [3358.6, 1455.5], //o
    // [3291.8, 1596.7], //p
    // [3225.1, 1591.5], //q
    // [3401.3, 2097.6], //r
    // [4300.7, 1246.5], //s
    // [3319.7, 1756.9], //t
    // [3705.2, 1366], //u
    // [3913.6, 689], //v
    // [3617.1, 1066.9], //w
    // [3120.6, 1204.1], //x
    // [3025.6, 915.8], //y
    // [3536.9, 784.1], //z
    // [3650.8, 116.6], //aa
    // [3358.9, 169.4], //ab
    // [2880.2, 219.4], //ac
    // [2800.7, 226.2], //ad
    // [2789.9, 458], //ae
    // [2890.9, 450.4], //af
    // [2680.2, 805.8], //ag
    // [2600.5, 1088.8], //ah
    // [1854.5, 828], //ai
    // [1921, 330.2], //ak
    // [1961.8, 90], //am

    // Findding way button
    var button = game.add.button(48, 500, 'find', findingWayOnClick, this);
    button.scale.set(0.8);

    // Run
    var button = game.add.button(48, 650, 'run', startOnClick, this);
    button.scale.set(0.8);

    //Reload
    var button = game.add.button(48, 800, 'reload', reloadOnClick, this);
    button.scale.set(0.8);
    

    for (var i = 0; i < 45; i++){
        var bar = game.add.sprite(400, i*50, 'bar');
        bar.scale.set(0.5);
    }
    for (var i = 0; i < 9; i++){
        var bar = game.add.sprite(i*50, 1000, 'bar');
        bar.angle += 90
        bar.scale.set(0.5);
    }
}

// set up collision group
function set_up_collision_group() {
    // Collision
    carCollisionGroup            = game.physics.p2.createCollisionGroup();
    obstacleCollisionGroup       = game.physics.p2.createCollisionGroup();
    goalCollisionGroup           = game.physics.p2.createCollisionGroup();
    trafficLightCollisionGroup   = game.physics.p2.createCollisionGroup();
    //Signal collision
    signalXCollistionGroup       = game.physics.p2.createCollisionGroup();
    signalYCollistionGroup       = game.physics.p2.createCollisionGroup();
    signalFrontCollistionGroup   = game.physics.p2.createCollisionGroup();
    signalFrontXCollistionGroup  = game.physics.p2.createCollisionGroup();
    signalFrontYCollistionGroup  = game.physics.p2.createCollisionGroup();
    trafficSignalCollistionGroup = game.physics.p2.createCollisionGroup();
}

// self driving with keyboard input------------------------------------
function self_driving() {
    var velocity = 100; 
    var angularVelocity = 2

    auto_car.body.velocity.x = 0;
    auto_car.body.velocity.y = 0;
    auto_car.body.angularVelocity = 0;

    if (cursors.left.isDown){
        auto_car.body.angularVelocity = -angularVelocity;
    }
    else if (cursors.right.isDown){
        auto_car.body.angularVelocity = angularVelocity;
    }

    if (cursors.up.isDown){
        auto_car.body.velocity.x = velocity*Math.sin(auto_car.body.angle*Math.PI/180);
        auto_car.body.velocity.y = -velocity*Math.cos(auto_car.body.angle*Math.PI/180);
    }
    else if (cursors.down.isDown){
        auto_car.body.velocity.x = -velocity*Math.sin(auto_car.body.angle*Math.PI/180);
        auto_car.body.velocity.y = velocity*Math.cos(auto_car.body.angle*Math.PI/180);
    }
}

// functions calculating distances 
var error_x = 13.301691198200878;
var error_y = 18.901691198200878;

function calculate_dentaX() {
    var a = auto_car.x - signal_x.x;
    var b = auto_car.y - signal_x.y;

    return Math.sqrt((a * a) + (b * b)) - error_x;
}

function calculate_dentaY() {
    var a = auto_car.x - signal_y.x;
    var b = auto_car.y - signal_y.y;

    return Math.sqrt((a * a) + (b * b)) - error_x;
}

function calculate_front() {
    var [x, y] = reset_point();
    var a = x - signal_front.x;
    var b = y - signal_front.y;
 
    return Math.sqrt((a * a) + (b * b)) - 6;
}

function calculate_frontX() {
    var [x, y] = reset_point();
    var a = x - signal_frontx.x;
    var b = y - signal_frontx.y;

    return Math.sqrt((a * a) + (b * b)) - 5.2;
}

function calculate_frontY() {
    var [x, y] = reset_point();
    var a = x - signal_fronty.x;
    var b = y - signal_fronty.y;

    return Math.sqrt((a * a) + (b * b)) - 5.2;
}

function calculate_trafficLight() {
    var a = auto_car.x - traffic_signal.x;
    var b = auto_car.y - traffic_signal.y;

    return Math.sqrt((a * a) + (b * b));
}

function reset_point() {
    var x = auto_car.x + error_y * Math.sin(car_angle*Math.PI/180);
    var y = auto_car.y - error_y * Math.cos(car_angle*Math.PI/180);
    
    return [x, y]
}

function calculate_temp_position(){
    var a = auto_car.x - temp_x;
    var b = auto_car.y - temp_y;

    return Math.sqrt((a * a) + (b * b));
}