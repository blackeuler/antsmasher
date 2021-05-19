const {create_gasset,gasset_position, gasset_size} = require('../js/index')

test('it should create a game asset with appropiate structure',()=>{
    const example = {
        pos: {
            x: 1,
            y: 1
        },
        size: {
            width:  1,
            height: 1
        }
    }
    expect(create_gasset(1,1,1,1)).toStrictEqual(example);})

    

    test('it should get postion',()=>{
        const example = {
            pos: {
                x: 1,
                y: 1
            },
            size: {
                width:  1,
                height: 1
            }
        }
        expect(gasset_position(create_gasset(1,1,1,1))).toStrictEqual({x:1,y:1});
    })


    test('it should get size',()=>{
        const example = {
            pos: {
                x: 1,
                y: 1
            },
            size: {
                width:  1,
                height: 1
            }
        }
        expect(gasset_size(create_gasset(1,1,1,1))).toStrictEqual({width:1,height:1});
    })