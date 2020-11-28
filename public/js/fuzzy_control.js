// avoid the obstacle
var temp_x = 0;
var temp_y = 0;
var hold_deviation = false
var turn_left = true;

function moving_by_fuzzy_logic() {
    // Deviation
    controlling_deviation()

    // Speed
    controlling_speed()  
}

// --------------------------------------------------------------
// ------------------- Deviation control ------------------------
function controlling_deviation() {    
    
    // ----------avoiding the obstacle-----------------------

    // thả denta, xe đã vượt qua vật cản -- calculate_temp_position tính khoảng cách đến chỗ xe đã vượt được vật cản
    if (hold_deviation === true && calculate_temp_position() > 120){
        // console.log("back : " + calculate_temp_position())
        hold_deviation = false
    }

    // Xác định hướng có thể vượt -- hold_deviation để giữ cho denta bị thay đổi trong 1 khoảng thời gian
    if (front <= 60 && front >= 40 && hold_deviation === false ) {
        
        if (front_x >= 140){ 
            hold_deviation = true
            temp_x = auto_car.x
            temp_y = auto_car.y
            turn_left = true        // turn left
        }else if (front_y >= 140){ 
            hold_deviation = true
            temp_x = auto_car.x
            temp_y = auto_car.y
            turn_left = false       // turn right
        }
    }

    //chỉnh denta để rẽ -- khi hold_deviation vẫn còn cho rẽ
    if(hold_deviation === true){
        if(turn_left && denta_x > 10){              // turn left
            denta_x *= 1.29
        }else if (!turn_left && denta_y > 10){                      // turn right
            denta_y *= 1.29
        }
    }

    // --------------------------------------------------------------

    // Deviation-steering
    deviation = denta_x/(denta_x+denta_y);
    // console.log("Deviation: " + deviation);
    
    var final_fuzzy = choosing_deviation_steering_rules(deviation);
    var angular = final_fuzzy * 3
    console.log("fuzzy steering result: " + (final_fuzzy+0.5));

    auto_car.body.angularVelocity = angular;
}

// Deviation-Steering Rules
// Step 1: caculate weight of each case
// Step 2: caculate the result for each case
// Step 3: The final result (average with weights for each one)
function choosing_deviation_steering_rules(deviation){
    var result_numerator = 0;
    var result_denominator = 0;

    // Step 1 and 2
    if(deviation < 0.4) {
        var [weight, result] = far_left_deviation(deviation);
        result_numerator += weight*result;
        result_denominator += weight
    }
    if(deviation > 0.25 && deviation < 0.5){
        var [weight, result] = left_deviation(deviation)
        result_numerator += weight*result;
        result_denominator += weight
    }
    if(deviation > 0.4 && deviation < 0.6){
        var [weight, result] = medium_deviation(deviation)
        result_numerator += weight*result;
        result_denominator += weight
    }
    if(deviation > 0.5 && deviation < 0.75){
        var [weight, result] = right_deviation(deviation)
        result_numerator += weight*result;
        result_denominator += weight
    }
    if(deviation > 0.6){
        var [weight, result] = far_right_deviation(deviation)
        result_numerator += weight*result;
        result_denominator += weight
    }

    // Step 3
    var final_fuzzy = 0.5;
    if (result_denominator !==  0){
        var final_fuzzy = result_numerator/result_denominator
    }

    return final_fuzzy - 0.5
}

// ------- Deviation rules -------------
function far_left_deviation(deviation) {
    // Step 1
    var u_FL = 0
    if (deviation <= 0.25){
        u_FL = 1
    }else{
        u_FL = (0.4-deviation)/0.15
    }

    // Step 2 (steering)
    result = hard_right_steering(u_FL)
    
    return [u_FL, result]
}

function left_deviation(deviation) {
    var u_L = 0
    if(deviation < 0.4){
        u_L = (deviation-0.25)/0.15
    }else{
        u_L = (0.5-deviation)/0.1
    }

    result = right_steering(u_L)

    return [u_L, result]
}

function medium_deviation(deviation) {
    var u_M = 0
    if(deviation < 0.5){
        u_M = (deviation-0.4)/0.1
    }else{
        u_M = (0.6-deviation)/0.1
    }

    result = medium_steering(u_M)

    return [u_M, result]
}

function right_deviation(deviation) {
    var u_R = 0
    if(deviation < 0.6){
        u_R = (deviation-0.5)/0.1
    }else{
        u_R = (0.75-deviation)/0.15
    }

    result = left_steering(u_R)

    return [u_R, result]
}

function far_right_deviation(deviation) {
    var u_FR = 0
    if (deviation >= 0.75){
        u_FR = 1
    }else{
        u_FR = (deviation-0.6)/0.15
    }

    result = hard_left_steering(u_FR)

    return [u_FR, result]
}

// ------- Steering rules-------------
function hard_right_steering(weight) {
    var a = 1;
    var b = weight*0.15+0.6;

    return (a+b)/2
}

function right_steering(weight) {
    var a = weight*0.1+0.5;
    var b = 0.75-weight*0.15;

    return (a+b)/2
}

function medium_steering(weight) {
    var a = weight*0.1+0.4;
    var b = 0.6-weight*0.1;

    return (a+b)/2
}

function left_steering(weight) {
    var a = weight*0.15+0.25;
    var b = 0.5-weight*0.1;

    return (a+b)/2
}

function hard_left_steering(weight) {
    var a = 0;
    var b = 0.4-weight*0.15;

    return (a+b)/2
}

// --------------------------------------------------------------
// ------------------- Speed control ------------------------
function controlling_speed(){
    
  
    var distance = front;                   // between car and the obstacle in front of car
    var light_distance = traffic_distance;  // between car and the traffic light in front of car
    var light_status = traffic_time;

    var final_fuzzy = choosing_distance_trafficlight_speed_rules(distance, light_distance, light_status);
    console.log("fuzzy speed: " + final_fuzzy)

    var velocity = final_fuzzy;
    auto_car.body.velocity.x = velocity*Math.sin(auto_car.body.angle*Math.PI/180);
    auto_car.body.velocity.y = -velocity*Math.cos(auto_car.body.angle*Math.PI/180);
}

// Distance - Light distance - light status
function choosing_distance_trafficlight_speed_rules(distance, light_distance, light_status){
    var result_numerator = 0;
    var result_denominator = 0;

    var must_stop = false

    // Step 1,2
    if (is_green(light_status)) {
        if(is_far(light_distance)){
            if(is_far(distance)) {
                var [weight, result] = rule1(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
            if(is_medium(distance)){
                var [weight, result] = rule2(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
            if(is_close(distance)){
                var [weight, result] = rule3(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
        }
        if(is_medium(light_distance)){
            if(is_far(distance)) {
                var [weight, result] = rule4(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
            if(is_medium(distance)){
                var [weight, result] = rule5(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
            if(is_close(distance)){
                var [weight, result] = rule6(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
        }
        if(is_close(light_distance)){
            if(is_far(distance)) {
                var [weight, result] = rule7(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
            if(is_medium(distance)){
                var [weight, result] = rule8(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
            if(is_close(distance)){
                var [weight, result] = rule9(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
        }
    }
    if (is_lessgreen(light_status)){
        if(is_far(light_distance)){
            if(is_far(distance)) {
                var [weight, result] = rule10(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
            if(is_medium(distance)){
                var [weight, result] = rule11(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
            if(is_close(distance)){
                var [weight, result] = rule12(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
        }
        if(is_medium(light_distance)){
            if(is_far(distance)) {
                var [weight, result] = rule13(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
            if(is_medium(distance)){
                var [weight, result] = rule14(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
            if(is_close(distance)){
                var [weight, result] = rule15(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
        }
        if(is_close(light_distance)){
            if(is_far(distance)) {
                var [weight, result] = rule16(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
            if(is_medium(distance)){
                var [weight, result] = rule17(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
            if(is_close(distance)){
                var [weight, result] = rule18(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
        }
    }
    if(is_red(light_status)){
        if(is_far(light_distance)){
            if(is_far(distance)) {
                var [weight, result] = rule19(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
            if(is_medium(distance)){
                var [weight, result] = rule20(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
            if(is_close(distance)){
                var [weight, result] = rule21(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
        }
        if(is_medium(light_distance)){
            if(is_far(distance)) {
                var [weight, result] = rule22(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
            if(is_medium(distance)){
                var [weight, result] = rule23(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
            if(is_close(distance)){
                var [weight, result] = rule24(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
        }
        if(is_close(light_distance)){

            if(is_far(distance)) {
                var [weight, result] = rule25(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
            if(is_medium(distance)){
                var [weight, result] = rule26(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }
            if(is_close(distance)){
                var [weight, result] = rule27(distance, light_distance, light_status);
                result_numerator += weight*result;
                result_denominator += weight
            }

            must_stop = close_distance(light_distance) === 1 && lock_signal === true
        }
    }

    // Step 3
    var final_fuzzy = 30;
    if (result_denominator !==  0){
        var final_fuzzy = result_numerator/result_denominator
    }
    if (must_stop === true) {
        final_fuzzy = 0
    }

    return final_fuzzy
}

// the lists of speed rules
//             LS         LD         D     ->     Speed
// rule 1:   green        far        far           medium
// rule 2:   green        far        medium        slow
// rule 3:   green        far        close         stop
// rule 4:   green        medium      far          medium
// rule 5:   green        medium     medium        slow
// rule 6:   green        medium     clse          stop
// rule 7:   green        close      far           medium
// rule 8:   green        close      medium        slow
// rule 9:   green        close      close         stop
// rule 10:  lessgreen    far        far           medium
// rule 11:  lessgreen    far        medium        slow
// rule 12:  lessgreen    far        close         stop
// rule 13:  lessgreen    medium     far           fast
// rule 14:  lessgreen    medium     medium        medium
// rule 15:  lessgreen    medium     close         stop
// rule 16:  lessgreen    close      far           fast
// rule 17:  lessgreen    close      medium        medium
// rule 18:  lessgreen    close      close         stop
// rule 19:    red        far        far           medium
// rule 20:    red        far        medium        slow
// rule 21:    red        far        close         stop
// rule 22:    red        medium     far           medium
// rule 23:    red        medium     medium        slow
// rule 24:    red        medium     close         stop
// rule 25:    red        close      far           stop
// rule 26:    red        close      medium        stop
// rule 27:    red        close      close         stop


function rule1(distance, light_distance, light_status){
    var u_LD = far_distance(light_distance);
    var u_LS = green_light(light_status);
    var u_D  = far_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = medium_speed(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule2(distance, light_distance, light_status){
    var u_LD = far_distance(light_distance);
    var u_LS = green_light(light_status);
    var u_D  = medium_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = slow_speed(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule3(distance, light_distance, light_status){
    var u_LD = far_distance(light_distance);
    var u_LS = green_light(light_status);
    var u_D  = close_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = stop(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule4(distance, light_distance, light_status){
    var u_LD = medium_distance(light_distance);
    var u_LS = green_light(light_status);
    var u_D  = far_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = medium_speed(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule5(distance, light_distance, light_status){
    var u_LD = medium_distance(light_distance);
    var u_LS = green_light(light_status);
    var u_D  = medium_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = slow_speed(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule6(distance, light_distance, light_status){
    var u_LD = medium_distance(light_distance);
    var u_LS = green_light(light_status);
    var u_D  = close_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = stop(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule7(distance, light_distance, light_status){
    var u_LD = close_distance(light_distance);
    var u_LS = green_light(light_status);
    var u_D  = far_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = medium_speed(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule8(distance, light_distance, light_status){
    var u_LD = close_distance(light_distance);
    var u_LS = green_light(light_status);
    var u_D  = medium_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = slow_speed(u);
    
    return [u_LD*u_LS*u_D, result]
}
function rule9(distance, light_distance, light_status){
    var u_LD = close_distance(light_distance);
    var u_LS = green_light(light_status);
    var u_D  = close_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = stop(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule10(distance, light_distance, light_status){
    var u_LD = far_distance(light_distance);
    var u_LS = lessgreen_light(light_status);
    var u_D  = far_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = medium_speed(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule11(distance, light_distance, light_status){
    var u_LD = far_distance(light_distance);
    var u_LS = lessgreen_light(light_status);
    var u_D  = medium_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = slow_speed(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule12(distance, light_distance, light_status){
    var u_LD = far_distance(light_distance);
    var u_LS = lessgreen_light(light_status);
    var u_D  = close_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = stop(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule13(distance, light_distance, light_status){
    var u_LD = medium_distance(light_distance);
    var u_LS = lessgreen_light(light_status);
    var u_D  = far_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = fast_speed(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule14(distance, light_distance, light_status){
    var u_LD = medium_distance(light_distance);
    var u_LS = lessgreen_light(light_status);
    var u_D  = medium_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = medium_speed(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule15(distance, light_distance, light_status){
    var u_LD = medium_distance(light_distance);
    var u_LS = lessgreen_light(light_status);
    var u_D  = close_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = stop(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule16(distance, light_distance, light_status){
    var u_LD = close_distance(light_distance);
    var u_LS = lessgreen_light(light_status);
    var u_D  = far_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = fast_speed(u);
    
    return [u_LD*u_LS*u_D, result]
}
function rule17(distance, light_distance, light_status){
    var u_LD = close_distance(light_distance);
    var u_LS = lessgreen_light(light_status);
    var u_D  = medium_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = medium_speed(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule18(distance, light_distance, light_status){
    var u_LD = close_distance(light_distance);
    var u_LS = lessgreen_light(light_status);
    var u_D  = close_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = stop(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule19(distance, light_distance, light_status){
    var u_LD = far_distance(light_distance);
    var u_LS = red_light(light_status);
    var u_D  = far_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = medium_speed(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule20(distance, light_distance, light_status){
    var u_LD = far_distance(light_distance);
    var u_LS = red_light(light_status);
    var u_D  = medium_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = slow_speed(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule21(distance, light_distance, light_status){
    var u_LD = far_distance(light_distance);
    var u_LS = red_light(light_status);
    var u_D  = close_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = stop(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule22(distance, light_distance, light_status){
    var u_LD = medium_distance(light_distance);
    var u_LS = red_light(light_status);
    var u_D  = far_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = medium_speed(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule23(distance, light_distance, light_status){
    var u_LD = medium_distance(light_distance);
    var u_LS = red_light(light_status);
    var u_D  = medium_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = slow_speed(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule24(distance, light_distance, light_status){
    var u_LD = medium_distance(light_distance);
    var u_LS = red_light(light_status);
    var u_D  = close_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = stop(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule25(distance, light_distance, light_status){
    var u_LD = close_distance(light_distance);
    var u_LS = red_light(light_status);
    var u_D  = far_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = stop(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule26(distance, light_distance, light_status){
    var u_LD = close_distance(light_distance);
    var u_LS = red_light(light_status);
    var u_D  = medium_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = stop(u);
    
    return [u_LD*u_LS*u_D, result]
}

function rule27(distance, light_distance, light_status){
    var u_LD = close_distance(light_distance);
    var u_LS = red_light(light_status);
    var u_D  = close_distance(distance);

    var u = Math.min(u_LD, u_LS, u_D)
    result = stop(u);
    
    return [u_LD*u_LS*u_D, result]
}

// Speed
function fast_speed(weight) {
    var a = 100
    var b = weight*20+70

    return (a+b)/2
}

function medium_speed(weight) {
    var a = weight*30+30
    var b = 80-weight*20

    return (a+b)/2
}
function slow_speed(weight) {
    var a = weight*20
    var b = 50-weight*30

    return (a+b)/2
}
function stop(weight) {
    var a = 0
    var b = weight*10

    return (a+b)/2
}

// ------------ support function ---------------

// distance
function far_distance(d) {
    var u = 0
    if (d < 125){
        u = (d-100)/25;
    }else {
        u = 1;
    }

    return u
}
function medium_distance(d) {
    var u = 0
    if (d <= 50){
        u = (d-15)/35;
    }else if (d > 100){
        u = (125-d)/25
    }else {
        u = 1
    }

    return u
}
function close_distance(d) {
    var u = 0
    if (d <= 15){
        u = 1;
    }else {
        u = (30-d)/15;
    }

    return u
}

// traffic light
function green_light(light_status) {
    var u = 0
    if (light_status <= 5){
        u = 1;
    }else {
        u = (10-light_status)/5;
    }

    return u
}
function lessgreen_light(light_status) {
    var u = 0
    if (light_status <= 10){
        u = (light_status-5)/5;
    }else {
        u = (15-light_status)/5;
    }

    return u
}
function red_light(light_status) {
    var u = 0
    if (light_status >= 15){
        u = 1;
    }else {
        u = (light_status-10)/5;
    }

    return u
}

// ---
function is_red(ls) {
    return ls > 10
}
function is_green(ls) {
    return ls < 10
}
function is_lessgreen(ls) {
    return ls < 15 && ls > 5
}

function is_close (d) {
    return d < 30
}
function is_medium (d) {
    return d > 10 && d < 125
}
function is_far(d) {
    return d > 100
}