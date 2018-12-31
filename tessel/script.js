const Fireworks = require('../');
const C = Fireworks.color;

const simpleBurst = function (color, strand, stretch) {

    let colors = [0, 0, 0];
    colors[strand] = color;

    return [
        {
            type: 'launch',
            colors: colors,
            size: 10,
            audio: 'launch'
        },
        {
            type: 'burst',
            color: color,
            size: 15,
            audio: 'burst',
            stretch: stretch
        }
    ];
};


const simpleTails = function (color, strand, stretch) {

    let colors = [0, 0, 0];
    colors[strand] = color;

    return [
        {
            type: 'launch',
            colors: colors,
            size: 10,
            audio: 'launch',
            blanks: 10
        },
        {
            type: 'tails',
            color: color,
            size: 15,
            audio: 'burst',
            stretch: stretch
        }
    ];
};


const simpleCurve = function (color, location, strand) {

    let colors = [0, 0, 0];
    colors[strand] = color;

    return [
        {
            type: 'launch',
            colors: colors,
            size: 15,
            audio: 'launch'
        },
        {
            type: 'curve',
            duration: 40,
            colors: location === 'inner' ? [color, 0, 0] : [0, color, color],
            audio: 'sparkle'
        }
    ];
};


const whiteBurst = [
    {
        type: 'launch',
        colors: [C.white, 0, 0],
        size: 10,
        blanks: 15,
        audio: 'launch'
    },
    {
        type: 'overlay',
        offset: 'end',
        first: {
            type: 'burst',
            color: C.white,
            size: 5,
            audio: 'burst'
        },
        second: {
            type: 'tails',
            color: C.white,
            size: 5
        }
    }
];


const redStars = [
    {
        type: 'launch',
        colors: [0, C.red, 0],
        size: 10,
        blanks: 15,
        audio: 'launch'
    },
    {
        type: 'stars',
        location: 'inner',
        size: 8,
        color: C.red,
        audio: 'sparkle'
    },
    {
        type: 'stars',
        location: 'outter',
        size: 8,
        color: C.red,
        audio: 'sparkle'
    }
];


const blueCircles = [
    {
        type: 'launch',
        colors: [0, 0, C.blue],
        size: 10,
        blanks: 40,
        audio: 'launch'
    },
    {
        type: 'curve',
        duration: 30,
        color: C.blue,
        audio: 'burst'
    }
];


const fireStorm = [
    {
        type: 'launch',
        colors: [C.red, C.yellow, C.orange],
        size: 10,
        audio: 'launch'
    },
    {
        type: 'overlay',
        offset: 23,
        first: {
            type: 'overlay',
            offset: 'end',
            first: {
                type: 'burst',
                colors: [C.red, C.yellow, C.orange],
                size: 15,
                audio: 'burst'
            },
            second: {
                type: 'tails',
                colors: [C.red, C.yellow, C.orange],
                sizes: [8, 8, 8]
            }
        },
        second: {
            type: 'curve',
            duration: 30,
            colors: [C.yellow, 0, 0],
            audio: 'sparkle'
        }
    },
    {
        type: 'stars',
        location: 'inner',
        size: 8,
        colors: [C.red, C.yellow, C.orange],
        audio: 'sparkle'
    },
    {
        type: 'stars',
        location: 'outter',
        size: 8,
        colors: [C.red, C.yellow, C.orange],
        audio: 'burst'
    }
];


const stars = function (color, size, curve) {

    let set = [];
    let count = (curve === 'inner' ? 6 : 12);
    for (let i = 0; i < count; ++i) {
        let colors = count === 6 ? [0, 0, 0, 0, 0, 0] : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        colors[i] = color;

        let star = {
            type: 'stars',
            location: curve,
            size: size,
            colors: colors
        };

        if (!i) {
            star.audio = 'sparkle';
        }

        set.push(star);
    }

    return set;
};


const forest = [
    {
        type: 'launch',
        colors: [C.green, C.lightgreen, C.olive],
        size: 10,
        audio: 'launch'
    },
    {
        type: 'burst',
        color: C.green,
        size: 5,
        slice: [5, 15],
        audio: 'burst'
    },
    {
        type: 'timeline',
        sets: [
            [0, {
                type: 'random',
                duration: 15,
                offset: 8,
                sets: stars(C.green, 7, 'outter')
            }],
            [0, {
                type: 'random',
                duration: 15,
                offset: 8,
                sets: stars(C.green, 7, 'inner')
            }],
            [5, {
                type: 'random',
                duration: 15,
                offset: 8,
                sets: stars(C.lightgreen, 7, 'outter')
            }],
            [5, {
                type: 'random',
                duration: 15,
                offset: 8,
                sets: stars(C.lightgreen, 7, 'inner')
            }],
            [10, {
                type: 'random',
                duration: 15,
                offset: 8,
                sets: stars(C.olive, 7, 'outter')
            }],
            [10, {
                type: 'random',
                duration: 15,
                offset: 8,
                sets: stars(C.olive, 7, 'inner')
            }]
        ]
    }
];


const rainbow = [
    {
        type: 'launch',
        colors: [0, [C.purple, C.blue, C.green, C.yellow, C.orange, C.red], 0],
        size: 6,
        audio: 'launch',
        blanks: 5
    },
    {
        type: 'timeline',
        sets: [
            [0, {
                type: 'stars',
                location: 'outter',
                size: 10,
                color: [C.purple, C.blue, C.green, C.yellow, C.orange, C.red],
                audio: 'burst',
                stretch: 7
            }],
            [0, {
                type: 'stars',
                location: 'inner',
                size: 10,
                color: [C.purple, C.blue, C.green, C.yellow, C.orange, C.red],
                stretch: 7
            }]
        ]
    }
];


const whirl = [
    {
        type: 'whirl',
        color: C.white,
        size: 20,
        audio: 'whirl'
    },
    {
        type: 'timeline',
        sets: [
            [0, {
                type: 'burst',
                color: C.white,
                size: 15,
                audio: 'burst'
            }],
            [10, {
                type: 'tails',
                color: C.white,
                size: 15,
                stretch: 2
            }],
            [10, {
                type: 'burst',
                color: C.white,
                size: 15,
                audio: 'burst'
            }],
            [10, {
                type: 'tails',
                color: C.white,
                size: 15,
                stretch: 2
            }]
        ]
    }
];


const spinElement = function (color, location, offset) {

    return {
        type: 'spin',
        location: location,
        color: color,
        size: 15,
        steps: 15,
        offset: offset
    };
};


const spin = [
    {
        type: 'whirl',
        color: C.white,
        size: 20,
        audio: 'whirl'
    },
    {
        type: 'timeline',
        sets: [
            [0, spinElement(C.white, 'inner', 0)],
            [0, spinElement(C.white, 'inner', 75)],
            [0, spinElement(C.white, 'outter', 0)],
            [0, spinElement(C.white, 'outter', 225)],
            [10, spinElement(C.white, 'inner', 75)],
            [0, spinElement(C.white, 'inner', 125)],
            [0, spinElement(C.white, 'outter', 75)],
            [0, spinElement(C.white, 'outter', 300)],
            [10, spinElement(C.white, 'inner', 150)],
            [0, spinElement(C.white, 'inner', 200)],
            [0, spinElement(C.white, 'outter', 150)],
            [0, spinElement(C.white, 'outter', 300)]
        ]
    }
];


const instructions = {
    type: 'timeline',
    sets: [
        [50, whirl],
        [100, spin],
        [100, simpleBurst(C.purple, 0)],
        [15, simpleTails(C.pink, 2, 3)],
        [15, simpleBurst(C.pink, 1)],
        [70, simpleCurve(C.yellow, 'inner', 0)],
        [15, simpleCurve(C.orange, 'outter', 2)],
        [50, whiteBurst],
        [15, blueCircles],
        [10, whiteBurst],
        [15, redStars],
        [10, whiteBurst],
        [15, redStars],
        [130, fireStorm],
        [130, forest],
        [200, rainbow]
    ]
};


const solid = {
    type: 'timeline',
    sets: [
        [0, {
            type: 'solid',
            colors: [[C.red], 0, 0]
        }],
        [0, {
            type: 'solid',
            colors: [0, [C.green], 0]
        }],
        [0, {
            type: 'solid',
            colors: [0, 0, [C.blue]]
        }]
    ]
};


exports.animation = Fireworks.compile(whiteBurst);
