function boardChess(){
    let chessBlock = document.createElement('div');
        chessBlock.className = 'chess-block';
        document.body.append(chessBlock);
        // main_border.append(chessBlock);
    let block;
    let flag = true;
    let figure = {
        0 : ['', 'A', 'B', 'C', 'D','E', 'F','G', 'H', ''],
        1 : ['8','&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;','&#9821;', '&#9822;','&#9820;','8'],
        2 : ['7','&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;','&#9823;', '&#9823;','&#9823;','7'],
        3 : ['6','', '', '', '', '','', '','','6'],
        4 : ['5','', '', '', '', '','', '','','5'],
        5 : ['4','', '', '', '', '','', '','','4'],
        6 : ['3','', '', '', '', '','', '','','3'],
        7 : ['2','&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;','&#9817;', '&#9817;','&#9817;','2'],
        8 : ['1','&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;','&#9815;', '&#9816;','&#9814;','1'],
        9 : ['', 'A', 'B', 'C', 'D','E', 'F','G', 'H', ''],
    };

    for (let i = 0; i<10; i++){
        for (let j = 0; j<10; j++){
            if (j==0) flag = !flag;

            block = document.createElement('div');

            if (flag) block.className = 'block black';
            else block.className = 'block white';

            if (figure[i]!==undefined && figure[i][j]!==undefined){
                block.innerHTML = figure[i][j];
                if ((i==0 && j==0) || (i==0 && j==9) || (i==9 && j==0) || (i==9 && j==9)) {
                    block.className = 'block border-text numbers letters';
                } else if (i==0 || i==9) {
                    if (i==0) block.className = 'block border-text letters rotate';
                    else block.className = 'block border-text letters';
                } else if (j==0 || j==9) {
                    if (j==9) block.className = 'block border-text numbers rotate';
                    else block.className = 'block border-text numbers';
                } else {
                    if (flag) block.className = 'block black figure';
                    else block.className = 'block white figure';
                }
            }

            chessBlock.appendChild(block);
            flag = !flag;
        }
    }
}

// let main_border = document.createElement('div');
// main_border.className = 'border';
// document.body.append(main_border);
boardChess();