
// In order to create objects we need to give it a position i.e x and y location and a size i.e width, height

// I need to have an ant appear on screen
// I can put theings on a screen 

// Gassests- Game Assets( Things to be put on the screen.)

// A Gassets has a size and position.

// A position is a two  numbers representing the x and y coordinate from
//  the bottom left of the visible screen as origin.

function create_gasset(xpos, ypos, wd, ht){
    function create_pos(x, y){
        return { x: x, y: y };
    }

    function create_size(width, height){
        return {width: width, height: height};
    }

    function pos_size(pos, size){
        return {pos: pos, size: size};
    }
     return pos_size(create_pos(xpos, ypos), create_size(wd, ht));

}

function create_asset(src, xpos, ypos, wd, ht){
    const gasset = create_gasset(xpos, ypos, wd, ht);
    return {...gasset,image: src}
}

function gasset_position(gasset){
    return gasset.pos;
}

function gasset_size(gasset){
    return gasset.size;
}

function create_screen(wd,ht){
    function create_canvas(width,height){
        const canvas = document.createElement("canvas");
        canvas.id = "screen";
        canvas.width = wd;
        canvas.height = ht;
        canvas.style = "border: black 20px solid"
        return canvas;
    }
    function run_screen(canvas){
        document.body.appendChild(canvas);
    }
    function get_context(canvas){
        return canvas.getContext("2d")
    }
    c = create_canvas(wd,ht);
    run_screen(c);
    return {ctx: get_context(c), canvas: c}
}

function place_asset(asset,screen){
    // const img = new Image();
    // //Images dont show for some reason idk?
    // img.onload =function() {
    //     screen.ctx.drawImage(img,asset.pos.x,asset.pos.y);
    //     document.appendChild(img)
    // }
    
    screen.ctx.fillRect(
        asset.pos.x, 
        asset.pos.y, 
        asset.size.width, 
        asset.size.height);


}

function create_score(){
    var score = document.createElement("h1");
    score.id = "score";
    score.innerHTML = 0;
    document.body.appendChild(score);
    return score;
}


function addClickHandler(screen,getAnts,incr_score){
    function getMousePosition(event){
        var rect = screen.canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }
    function dis(pos,pos2){
        const xDis = pos2.x - pos.x
        const yDis = pos2.y - pos.y
        return Math.hypot(xDis , yDis)
    }
    
    screen.canvas.addEventListener('click',(ev) =>{
        const r = 50;
        const mopos = getMousePosition(ev);
        const ants = getAnts();
        ants.forEach(ant => {
            if(dis(mopos,ant.pos) < r){
                incr_score();
                //incr_ant()
            }
        });

        
    })


}

function start_game(){
   var score = create_score();
   const screen =  create_screen(900,900);
   
   var ants = [create_asset(
    '/Users/blackeuler/antsmasher/assets/ant2.jpeg',
    200,
    20,
    30,
    30)]
    ants.every(ant => place_asset(ant,screen));
    function get_ants(){
        return ants
    }
    function incr_score(){
        const num = score.innerText;
        score.innerText = Number.parseInt(num) + 1;
    }
    function one_more_ant(){
        ants.push(create_gasset(20,40,20,200))
    }
    addClickHandler(screen,get_ants,incr_score);
}


start_game();



//module.exports = {create_gasset, gasset_position, gasset_size};