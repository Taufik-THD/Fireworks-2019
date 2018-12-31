var internals = {};

exports.strands = {
    count: 3,
    length: 420
};

exports.mark = {
    launcher: [0, 89],
    burst1: [90, 149],
    burst2: [150, 209],
    tail1: [210, 239],
    tail2: [240, 269],
    curve: [270, 419],
    star: {
        inner: [
            [
                [0, 270, 1],
                [0, 418, -1],
                [0, 114, 1],
                [0, 112, -1]
            ],
            [
                [0, 395, 1],
                [0, 393, -1],
                [2, 174, 1],
                [2, 172, -1]
            ],
            [
                [0, 370, 1],
                [0, 368, -1],
                [2, 114, 1],
                [2, 112, -1]
            ],
            [
                [0, 345, 1],
                [0, 343, -1],
                [1, 174, 1],
                [1, 172, -1]
            ],
            [
                [0, 320, 1],
                [0, 318, -1],
                [1, 114, 1],
                [1, 112, -1]
            ],
            [
                [0, 295, 1],
                [0, 293, -1],
                [0, 174, 1],
                [0, 172, -1],
            ],
        ],
        outter: [
            [
                [1, 270, 1],
                [2, 418, -1],
                [0, 138, 1],
                [0, 136, -1]
            ],
            [
                [2, 395, 1],
                [2, 393, -1],
                [2, 228, 1],
                [2, 226, -1]
            ],
            [
                [2, 370, 1],
                [2, 368, -1],
                [2, 198, 1],
                [2, 196, -1]
            ],
            [
                [2, 345, 1],
                [2, 343, -1],
                [2, 258, 1],
                [2, 256, -1]
            ],
            [
                [2, 320, 1],
                [2, 318, -1],
                [2, 138, 1],
                [2, 136, -1]
            ],
            [
                [2, 295, 1],
                [2, 293, -1],
                [1, 228, 1],
                [1, 226, -1]
            ],
            [
                [2, 270, 1],
                [1, 418, -1],
                [1, 198, 1],
                [1, 196, -1]
            ],
            [
                [1, 395, 1],
                [1, 393, -1],
                [1, 258, 1],
                [1, 256, -1]
            ],
            [
                [1, 370, 1],
                [1, 368, -1],
                [1, 138, 1],
                [1, 136, -1]
            ],
            [
                [1, 345, 1],
                [1, 343, -1],
                [0, 228, 1],
                [0, 226, -1]
            ],
            [
                [1, 320, 1],
                [1, 318, -1],
                [0, 198, 1],
                [0, 196, -1]
            ],
            [
                [1, 295, 1],
                [1, 293, -1],
                [0, 258, 1],
                [0, 256, -1]
            ],
        ]
    }
};