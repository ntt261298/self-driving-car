// Adjacency matrix
var adj_matrix = [
    // x, a, b, c, d, e, f, g, h, i, k, l, m, n ,o, p, q, r, s, t, u, v
    [0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // x
    [3, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // a
    [0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // b
    [0, 3, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // c
    [0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // d
    [0, 0, 2, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // e
    [0, 0, 0, 0, 0, 2, 0, 3, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0], // f
    [0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // g
    [0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0], // h
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0], // i
    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0], // k
    [0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0], // l
    [0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // m
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0], // n
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0], // o
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 3, 0, 0, 0, 0, 0], // p
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4, 3, 0, 0, 0], // q
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 3, 0, 0], // r
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0], // s
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 2, 0], // t
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3], // u
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0], // v
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
    [280.9, 512.4], //x
    [477.7, 579.1], //a
    [533.4, 400.5], //b
    [658.3, 643.2], //c
    [711.9, 467], //d
    [637, 432], //e
    [684.2, 282.1], //f
    [715, 80.9], //g
    [1051.4, 126.3], //h
    [1149.4, 123.8], //i
    [891, 724.9], //k
    [959, 532.4], //l
    [999.4, 397.1], //m
    [1162.3, 600.2], //n
    [1109.4, 800.3], //o
    [1279.6, 841.2], //p
    [1261.4, 609.5], //q
    [1634.2, 489.2], //r
    [1184.2, 351.5], //s
    [1523.5, 277.4], //t
    [1430.5, 90.8], //u
    [1698.4, 63.7], //v
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
    x: {a: [[435, 566, 18, 'road']]},
    a: {b: [[496, 537, 109, 'road']], x: [[435, 566, 18, 'road']], c: [[524, 597, 18, 'road']]},
    b: {a: [[523, 444, 108, 'road']], e: [[592, 419, 32, 'road']]},
    c: {a: [[617, 628, 18, 'road']], d: [[675, 600, 109, 'road']], k: [[705, 658, 18, 'road']]},
    d: {e: [[693, 450, 38, 'road']], c: [[706, 502, 108, 'road']], l: [[737, 464, 164, 'road']]},
    e: {b: [[592, 419, 32, 'road']], d: [[693, 450, 38, 'road']], f:[[671, 394, 108, 'road_longer']]},
    f: {e: [[680, 337, 104, 'road_longer']], g: [[695, 240, 104, 'road_longer']], m:[[739, 300, 10, 'road']]},
    g: {f: [[695, 240, 104, 'road_longer']], h: [[1001.7, 120, 10, 'road']]},
    h: {i: [[1108.1, 126.7, 0, 'road']], m: [[1051.6, 172.7, 92, 'road_longer']], g:[[1001.7, 120, 10, 'road']]},
    i: {h: [[1108.1, 126.7, 0, 'road']], s: [[1156.1, 170.5, 88, 'road']], u:[[1198.3, 122.9, -4, 'road']]},
    k: {c: [[851, 708, 18, 'road']], l: [[912, 681, 109, 'road']], o:[[944, 741, 18, 'road']]},
    l: {d: [[913, 518, 26, 'road']], m: [[985, 494, 107, 'road']], k:[[942, 575, 108, 'road']], n: [[1014, 547, 30, 'road']]},
    m: {l: [[996, 445, 104, 'road']], f: [[953, 386, 12, 'road']], h: [[1015, 351, 104, 'road_longer']]},
    n: {l: [[1144, 587, 38, 'road']], o: [[1160, 633, 100, 'road']], q: [[1190, 591, -18, 'road']]},
    o: {k: [[1071, 784, 17, 'road']], n: [[1129, 756, 109, 'road']], p: [[1161, 816, 16, 'road']]},
    p: {o: [[1161, 816, 16, 'road']], q: [[1263, 642, 90, 'road']]},
    q: {n: [[1239, 601, 36, 'road']], p: [[1263, 642, 90, 'road']], s:[[1226, 554, 100, 'road']], r: [[1289, 600, -25, 'road']]},
    r: {q: [[1289, 600, -25, 'road']], t: [[1551.1, 320.9, 72, 'road_longest']]},
    s: {i: [[1178, 306, 80, 'road']], q: [[1195, 401, 82, 'road']], t: [[1232, 345, -10, 'road']]},
    t: {s: [[1470, 297, -30, 'road_longer']], u: [[1499, 231.1, 72, 'road_longest']], r: [[1551.1, 320.9, 72, 'road_longest']]},
    u: {i: [[1377.6, 101.3, -12, 'road']], t: [[1450, 139.3, 84, 'road_longest']], v: [[1492.4, 84, -15, 'road']]},
    v: {u: [[1492.4, 84, -15, 'road']]}
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

        console.log('cross_point', cross_point);
        console.log('letter_point(cross_point)', letter_point(cross_point))
        cross_way = cross_road[letter_point(cross_point)];
        console.log('cross_way', cross_way);

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
    const letters = ['x', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n' ,'o', 'p', 'q', 'r', 's', 't', 'u', 'v']
    return letters[n-1]
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