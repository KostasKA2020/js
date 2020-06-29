function boardChess(){
    let chessBlock = document.createElement('div');
        chessBlock.className = 'chess-block';
        main_border.append(chessBlock);
    let block;
    let flag = true;
    let figure = {
        0 : ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;','&#9821;', '&#9822;','&#9820;'],
        1 : ['&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;','&#9823;', '&#9823;','&#9823;'],
        6 : ['&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;','&#9817;', '&#9817;','&#9817;'],
        7 : ['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;','&#9815;', '&#9816;','&#9814;'],
    };

    for (let i = 0; i<8; i++){
        for (let j = 0; j<8; j++){
            if (j==0) flag = !flag;

            block = document.createElement('div');

            if (flag) block.className = 'block black';
            else block.className = 'block white';

            if (figure[i]!==undefined && figure[i][j]!==undefined){
                block.innerHTML = figure[i][j];
                if (flag) block.className = 'block black figure';
                else block.className = 'block white figure';
                // block.className = 'block figure';
                // block.style.fontFamily = 'Arial';
                // block.style.fontSize = '60px';
                // block.style.textAlign = 'center';
                // block.style.lineHeight = '75px';
            }

            chessBlock.appendChild(block);
            flag = !flag;
        }
    }
}

let main_border = document.createElement('div');
main_border.className = 'border';
document.body.append(main_border);
boardChess();