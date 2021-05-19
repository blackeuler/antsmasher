
// In order to create objects we need to give it a position i.e x and y location and a size i.e width, height

// I need to have an ant appear on screen
// I can put theings on a screen 

// Gassests- Game Assets( Things to be put on the screen.)

// A Gassets has a size and position.

// A position is a two  numbers representing the x and y coordinate from
//  the bottom left of the visible screen as origin.

function create_gasset(xpos, ypos, wd, ht){
    function create_pos(x,y){
        return {x:x,y:y};
    }

    function create_size(width,height){
        return {width:width,height:height};
    }

    function pos_size(pos,size){
        return {pos:pos,size:size};
    }
     return pos_size(create_pos(xpos,ypos),create_size(wd,ht));

}

function gasset_position(gasset){
    return gasset.pos;
}

function gasset_size(gasset){
    return gasset.size;
}






module.exports = {create_gasset, gasset_position, gasset_size};