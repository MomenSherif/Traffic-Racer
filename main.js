Splitting();
let currentPlayer = 1;
let players = [];
const Player = function (name, color) {
    this.Playername = name;
    this.favColor = color;
}
$(document).on('keydown', function (e) {
    if (e.keyCode === 40) {
        $(".fa-arrow-right").css('top', 56 + "%");
        currentPlayer = $("#btn-2").data("player");
        $("#btn-2").css('box-shadow', '0 0 15px gainsboro');
        $("#btn-1").css('box-shadow', '0 0 15px transparent');
    }
    else if (e.keyCode === 38) {
        $(".fa-arrow-right").css('top', 6 + "%");
        currentPlayer = $("#btn-1").data("player");
        $("#btn-1").css('box-shadow', '0 0 15px gainsboro');
        $("#btn-2").css('box-shadow', '0 0 15px transparent');
    }
    else if (e.keyCode === 13) {
        $(".main-sec").css('display', 'none');
        if (currentPlayer === 1) {
            $(".players-sec").css('display', 'block');
            $(".verLine").css('display', 'none');
            $(".pl-2").css('display', 'none');
            $(".pl").css('justify-content', 'center');
        }
        else if (currentPlayer === 2) {
            $(".players-sec").css('display', 'block');
        }
        localStorage.setItem('currentPlayer',`${currentPlayer}`);

    }
});
$('#btn-start').on('click', function () {
    let count = 0;
    for (let i = 0; i < currentPlayer; i++) {
        if ($('#player-' + Number(i + 1))[0].value === "") {
            $('#p-' + Number(i + 1)).text('Please fill out this area');
        }
        else {
            $('#p-' + Number(i + 1)).text('');
            players[i] = new Player($('#player-' + Number(i + 1))[0].value, $('#play-' + Number(i + 1))[0].value);
            count += 1;
        }
    }
    localStorage.setItem('count',`${count}`);
    localStorage.setItem('players',JSON.stringify(players));
    if (count === currentPlayer) {
        $(".players-sec").css('display', 'none');

    }
});

