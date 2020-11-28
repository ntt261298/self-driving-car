// Adjacency matrix
var adj_matrix = [
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 6, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 2, 0, 3, 0],
    [0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
]

// Test for dijistra algorithm (remove the number "1" in name)
var adj_matrix1 = [
    [0, 3, 2, 0, 0],
    [3, 0, 5, 3, 0],
    [2, 5, 0, 0, 20],
    [0, 3, 0, 0, 4],
    [0, 0, 20, 4, 0],
]

// ---- The algorithm is used to find way -----
function dijkstra_algorithm(start) {
    var passed_point = [start]
    var close_point = Array(adj_matrix.length).fill(start); 

    var shortest_way = adj_matrix[start-1];
    for (var i = 0; i < shortest_way.length-1; i++) {

        // Find the point which close to the recent point
        var min = 1000;
        var min_point = 0;
        for (var j = 0; j < shortest_way.length; j++) {
            if (shortest_way[j] !== 0 && shortest_way[j] < min && !passed_point.includes(j+1)) {
                min_point = j;
                min = shortest_way[j];
            }
        }
        passed_point.push(min_point+1);
        
        // Add the distances of this point that be just finded
        var choices_point = adj_matrix[min_point];
        for (var k = 0; k < choices_point.length; k++) {

            if (!passed_point.includes(k+1)) {
                if (choices_point[k] !== 0) {

                    var new_distance = choices_point[k] +  shortest_way[min_point];
                    if (new_distance < shortest_way[k]){
                        shortest_way[k] = new_distance;
                        close_point[k] = min_point + 1

                    }
                    if (shortest_way[k] === 0) {
                        shortest_way[k] = new_distance;
                        close_point[k] = min_point + 1
                    }
                }
            }
        }
        start = k + 1;
    }

    console.log("Shortest distance: " + shortest_way)
    console.log("Closest point: " + close_point)
    return close_point
}

// -------------------------------
// get the start and finish point 
var crossroad_coordinate = [
    [400, 500], //a
    [300, 400], //b
    [300, 300], //c
    [400, 400], //d
    [400, 300], //e
    [400, 200], //f
    [400, 100], //g
    [500, 500], //h
    [500, 400], //i
    [500, 300], //j
    [600, 350], //k
    [700, 500], //l
    [800, 350], //m
    [700, 350], //n
    [700, 200], //o
    [700, 100], //p
]

function get_point(object) {
    var result;
    var min = 1000000;

    for (var i = 0; i < crossroad_coordinate.length; i++) {
        var distance = euclid_distance(crossroad_coordinate[i], [object.x, object.y])
        if (distance < min) {
            result = i
            min = distance
        }
    }

    return result + 1;
}

// --------------------------------
// Crossroads
var cross_road = {
    d: {a: [[375, 425, 90, 'road'], [425, 425, 90, 'road']], b: [[350, 400, 0, 'road']], e: [[375, 375, 90, 'road'], [425, 375, 90, 'road']], i: [[450, 400, 0, 'road']]},
    e: {c: [[350, 300, 0, 'road']], d: [[375, 325, 90, 'road'], [425, 325, 90, 'road']], f: [[375, 275, 90, 'road'], [425, 275, 90, 'road']], j: [[450, 300, 0, 'road']]},
    f: {e: [[375, 225, 90, 'road'], [425, 225, 90, 'road']], g: [[375, 175, 90, 'road'], [425, 175, 90, 'road']], o: [[450, 200, 0, 'road']]},
    i: {d: [[500, 400, 0, 'road']], h: [[525, 425, 90, 'road']], j: [[525, 375, 90, 'road']], k: [[550, 400, 0, 'road']]},
    j: {e: [[500, 300, 0, 'road']], i: [[525, 325, 90, 'road']], k: [[550, 300, 0, 'road']]},
    k: {i: [[625, 362.5, -63.435, 'diagonal_road']], j: [[625, 337.5, 63.435, 'diagonal_road']], n: [[650, 350, 0, 'road']]},
    n: {k: [[700, 350, 0, 'road']], l: [[725, 375, 90, 'road']], m: [[750, 350, 0, 'road']], o: [[725, 325, 90, 'road']]},
    o: {f: [[700, 200, 0, 'road']], n: [[725, 225, 90, 'road']], p: [[725, 175, 90, 'road']]},
};

//find way
function find_way() {
    car_location = get_point(auto_car);
    goal_location = get_point(goal);

    console.log("car: " + car_location);
    console.log("goal: " + goal_location);
    make_way(car_location, goal_location);
}

// find points which will be passed to get finishing point
function make_way(start, finish) {
    var close_point = dijkstra_algorithm(start)

    for (var i = 0; i < close_point.length; i++) {
        var cross_point = close_point[finish-1];
        
        if (cross_point === start) {
            break;
        }

        var passed_point = close_point[cross_point-1];

        cross_way = cross_road[letter_point(cross_point)];

        accepted_ways = [letter_point(finish), letter_point(passed_point)];
        disaccepted_ways = minus_two_array(Object.keys(cross_way), accepted_ways)

        for (var j = 0; j < disaccepted_ways.length; j++) {
            make_barrier(cross_way[disaccepted_ways[j]])
        }

        finish = cross_point
    }
}

// erect barriers to block some road
function make_barrier(barriers) {
    // var barriers = cross_road["n"]["o"]
    for (var i = 0; i < barriers.length; i++){
        create_a_fence(barriers[i])
    }
}

function letter_point(n) {
    return String.fromCharCode(96 + n)
}

function minus_two_array(m, n){
    var result = [];

    for (var j = 0; j < m.length; j++) {
        if (!n.includes(m[j])) {
            result.push(m[j])
        }
    }
    return result
}

function euclid_distance(point1, point2) {
    var a = point1[0] - point2[0];
    var b = point1[1] - point2[1];

    return Math.sqrt( a*a + b*b );
}