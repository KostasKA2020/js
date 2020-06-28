function boardChess(){
    let mainBlock = document.querySelector('.main-block');
    mainBlock.style.width = '560px';
    mainBlock.style.height = '560px';
    mainBlock.style.margin = '50px auto';
    mainBlock.style.border = '1px solid #ccc'
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
            block.style.width = '70px';
            block.style.height = '70px';
            block.style.float = 'left';

            if (flag) block.style.backgroundColor = '#ccc';
            else block.style.backgroundColor = '#fff';
            if (figure[i]!==undefined && figure[i][j]!==undefined){
                block.innerHTML = figure[i][j];
                block.style.fontFamily = 'Arial';
                block.style.fontSize = '60px';
                block.style.textAlign = 'center';
                block.style.lineHeight = '75px';
            }

            mainBlock.appendChild(block);
            flag = !flag;
        }
    }
}

boardChess();