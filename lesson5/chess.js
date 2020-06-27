var i, j, clas;
for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
        clas = '';

        if (j === 0) clas = 'first ';
        else if (j === 7) clas = 'last ';
        clas += (i % 2 == j % 2) ? 'white' : 'black';

        var field = document.createElement('div');
        field.className = clas;
        document.body.appendChild(field);
    }
}