// Adjacency matrix
var adj_matrix = [
    //a, b, c, d, e, f, g, h, i, k, m, n ,o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, ae, af, ag, ah, ai, ak, am
    [0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // a
    [4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // b
    [0, 4, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // c
    [4, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // d
    [0, 0, 4, 0, 0, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0], // e
    [0, 0, 0, 4, 4, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // f
    [0, 0, 0, 0, 5, 0, 0, 4, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0], // g
    [0, 0, 0, 0, 0, 5, 4, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // h
    [0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // i
    [0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // k
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // m
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // n
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // o
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // p
    [0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // q
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // r
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // s
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 3, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // t
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 4, 5, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // u
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // v
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // w
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // x
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 3, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0], // y
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 3, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0], // z
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], // aa
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0], // ab
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 1, 0, 2, 0, 0, 0, 0, 0], // ac
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 5], // ad
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 3, 0, 0, 5, 0], // ae
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0], // af
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 0], // ag
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 5, 0, 0], // ah
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 4, 0], // ai
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 4, 0, 2], // ak
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 2, 0], // am
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
    var passed_point = [start];
    var close_point = Array(adj_matrix.length).fill(start);

    var shortest_way = adj_matrix[start - 1];
    for (var i = 0; i < shortest_way.length - 1; i++) {

        // Find the point which close to the recent point
        var min = 1000;
        var min_point = 0;
        for (var j = 0; j < shortest_way.length; j++) {
            if (shortest_way[j] !== 0 && shortest_way[j] < min && !passed_point.includes(j + 1)) {
                min_point = j;
                min = shortest_way[j];
            }
        }
        passed_point.push(min_point + 1);

        // Add the distances of this point that be just found
        var choices_point = adj_matrix[min_point];
        for (var k = 0; k < choices_point.length; k++) {

            if (!passed_point.includes(k + 1)) {
                if (choices_point[k] !== 0) {

                    var new_distance = choices_point[k] + shortest_way[min_point];
                    if (new_distance < shortest_way[k]) {
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
    [489.4, 1183.9], //a
    [628.9, 692.6], //b
    [1230.2, 862.8], //c
    [1102.6, 1391], //d
    [1805.5, 1090.1], //e
    [1706.5, 1565.9], //f
    [2540.7, 1292], //g
    [2389.2, 1783.2], //h
    [3087.5, 1993.3], //i
    [3191.8, 1485.3], //k
    [3211.6, 1446.7], //m
    [3331.7, 1425.4], //n
    [3358.6, 1455.5], //o
    [3291.8, 1596.7], //p
    [3225.1, 1591.5], //q
    [3401.3, 2097.6], //r
    [4300.7, 1246.5], //s
    [3319.7, 1756.9], //t
    [3705.2, 1366], //u
    [3913.6, 689], //v
    [3617.1, 1066.9], //w
    [3120.6, 1204.1], //x
    [3025.6, 915.8], //y
    [3536.9, 784.1], //z
    [3650.8, 116.6], //aa
    [3358.9, 169.4], //ab
    [2880.2, 219.4], //ac
    [2800.7, 226.2], //ad
    [2789.9, 458], //ae
    [2890.9, 450.4], //af
    [2680.2, 805.8], //ag
    [2600.5, 1088.8], //ah
    [1854.5, 828], //ai
    [1921, 330.2], //ak
    [1961.8, 90], //am
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
    a: { b: [[494, 1168, 106, '35road']], d: [[510, 1189, 15, '35road']] },
    b: { a: [[622, 726, 106, '35road']], c: [[650, 700, 15, '90road']] },
    c: { b: [[1214, 860, -5, '90road']], e: [[1248, 866, -5, '90road']], d: [[1235, 903, 105, '35road']] },
    d: { a: [[1088, 1381, 15, '35road']], c: [[1111, 1368, 106, '35road']], f: [[1125, 1392, 15, '35road']] },
    e: { c: [[1791, 1073, 12, '90road']], f: [[1801, 1116, 105, '35road']], g: [[1828, 1088, 12, '90road']], ai: [[1816, 1051, 105, '35road']] },
    f: { d: [[1689, 1560, 10, '35road']], e: [[1710, 1550, 105, '35road']], h: [[1726, 1573, 10, '35road']] },
    g: { h: [[2528, 1326, 108, '35road']], k: [[2557, 1300, 17, '90road']], ah: [[2548, 1260, 108, '35road']], e: [[2521, 1287, 17, '90road']] },
    h: { g: [[2394, 1761, 108, '35road']], f: [[2369, 1775, 20, '35road']], i: [[2404, 1786, 20, '35road']] },
    i: { q: [[3092, 1975, 108, '90road']], h: [[3065, 1988, 20, '35road']], r: [[3106, 2002, 20, '35road']] },
    k: { g: [[3195, 1487, -5, '90road']], m: [[3222, 1472, -55, '90road']], q: [[3226, 1510, 75, '90road']] },
    m: { k: [[3222, 1472, -55, '90road']], x: [[3213, 1444, 78, '35road']], n: [[3237, 1455, -26, '90road']] },
    n: { m: [[3292, 1452, 20, '90road']], w: [[3325, 1422, 80, '90road']], o: [[3356, 1417, 43, '216road']] },
    o: { n: [[3356, 1417, 43, '216road']], u: [[3357, 1458, 10, '90road']], p: [[3330, 1492, 80, '90road']] },
    p: { o: [[3298, 1559, 160, '90road']], t: [[3295, 1596, 85, '35road']], q: [[3279, 1562, 5, '90road']] },
    q: { p: [[3248, 1558, 5, '90road']], i: [[3217, 1586, 100, '90road']], k: [[3225, 1555, 45, '90road']] },
    r: { i: [[3106, 2002, 20, '35road']], t: [[3322, 1769, 110, '35road']] },
    s: { v: [[4305, 1228, 100, '90road']], u: [[4265, 1240, -32, '90road']] },
    t: { p: [[3314, 1736, 110, '35road']], r: [[322, 1769, 110, '35road']], u: [[3339, 1758, -18, '35road']] },
    u: { o: [[3689, 1367, -15, '90road']], t: [[3715, 1400, 80, '35road']], s: [[3721, 1358, -18, '90road']], w: [[3696, 1334, 80, '35road']] },
    v: { s: [[3919, 700, 74, '90road']], z: [[3872, 699, -25, '35road']], aa: [[3907, 676, 74, '90road']] },
    w: { u: [[3627, 1105, 43, '35road']], n: [[3610, 1105, -15, '35road']], x: [[3601, 1074, -15, '35road']], z: [[3614, 1054, 80, '35road']] },
    x: { m: [[3123, 1218, 80, '35road']], w: [[3137, 1199, -15, '35road']], y: [[3114, 1187, 74, '35road']] },
    y: { x: [[3036, 930, 90, '35road']], z: [[3050, 910, -20, '35road']], ag: [[3007, 909, -18, '35road']], af: [[3023, 896, 100, '35road']] },
    z: { v: [[3554, 779, -15, '35road']], y: [[3521, 785, -15, '35road']], w: [[3542, 797, 78, '35road']], ab: [[3534, 767, 78, '35road']] },
    aa: { ab: [[3612, 120, -20, '35road']], v: [[3662, 128, 75, '90road']] },
    ab: { z: [[3363, 183, 80, '35road']], aa: [[3375, 166, -15, '35road']], ac: [[3345, 169, -10, '35road']] },
    ac: { ab: [[2901, 216, 7, '35road']], ad: [[2867, 218, 7, '35road']], af: [[2882, 235, 90, '35road']] },
    ad: { ac: [[2820, 222, -10, '35road']], ae: [[2803, 239, 90, '35road']], am: [[2781, 223, -8, '35road']] },
    ae: { ad: [[2791, 438, 85, '35road']], af: [[2807, 456, 10, '35road']], ak: [[2768, 453, 10, '35road']], ag: [[2784, 472, 90, '35road']] },
    af: { y: [[2893, 465, 85, '35road']], ac: [[2888, 430, 85, '35road']], ae: [[2870, 448, -7, '35road']] },
    ag: { y: [[2702, 808, 18, '35road']], ae: [[2687, 785, 104, '35road']], ah: [[2678, 815, 104, '35road']] },
    ah: { g: [[2596, 1103, 110, '35road']], ai: [[2582, 1080, 17, '35road']], ag: [[2607, 1070, 110, '35road']] },
    ai: { e: [[1852, 840, 105, '35road']], ah: [[1872, 829, 8, '35road']], ak: [[1860, 810, 105, '35road']] },
    ak: { ae: [[1941, 328, 8, '35road']], ai: [[1920, 343, 98, '35road']], am: [[1924, 308, 98, '35road']] },
    am: { ad: [[1980, 89, 8, '35road']], ak: [[1958, 100, 98, '35road']] },
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
    var is_start_checked = false;

    for (var i = 0; i < close_point.length; i++) {
        var cross_point = close_point[finish - 1];

        var passed_point = close_point[cross_point - 1];

        cross_way = cross_road[letter_point(cross_point)];

        if (cross_point === start) {
            if (!is_start_checked) {
                passed_point = close_point[finish-2];
                is_start_checked = true;
            } else {
                break;
            }
        }

        accepted_ways = [letter_point(finish), letter_point(passed_point)];
        disaccepted_ways = minus_two_array(Object.keys(cross_way), accepted_ways);

        for (var j = 0; j < disaccepted_ways.length; j++) {
            make_barrier(cross_way[disaccepted_ways[j]])
        }

        finish = cross_point
    }
}

// erect barriers to block some road
function make_barrier(barriers) {
    // var barriers = cross_road["n"]["o"]
    for (var i = 0; i < barriers.length; i++) {
        create_a_fence(barriers[i])
    }
}

function letter_point(n) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'ak', 'am']
    return letters[n - 1]
}

function minus_two_array(m, n) {
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

    return Math.sqrt(a * a + b * b);
}