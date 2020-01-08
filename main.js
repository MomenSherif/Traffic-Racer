Splitting();
let currentPlayer = 1;
let players = [];
let audio = new Audio('air.mp3');
const Player = function(name,color)
{
    this.Playername = name;
    this.favColor = color;
}
$(document).on('keydown',function(e)
{
    if(e.keyCode === 40)
    {
        $(".fa-arrow-right").css('top',56+"%");
        currentPlayer = $("#btn-2").data("player");
        $("#btn-2").css('box-shadow','0 0 15px gainsboro');
        $("#btn-1").css('box-shadow','0 0 15px transparent');
    }
    else if(e.keyCode === 38)
    {
        $(".fa-arrow-right").css('top',6+"%");
        currentPlayer = $("#btn-1").data("player");
        $("#btn-1").css('box-shadow','0 0 15px gainsboro');
        $("#btn-2").css('box-shadow','0 0 15px transparent');
    }
    else if(e.keyCode === 13)
    {
        $(".main-sec").css('display','none');
        if(currentPlayer === 1)
        {
          $(".players-sec").css('display','block');
          $(".verLine").css('display','none');
          $(".pl-2").css('display','none');
          $(".pl").css('justify-content','center');
        }
        else if(currentPlayer === 2)
        {
            $(".players-sec").css('display','block');
        }
        
    }
});
$('#btn-start').on('click',function()
{
    let count = 0;
    for(let i = 0; i < currentPlayer;i++)
    {
        if($('#player-'+Number(i+1))[0].value ==="")
        {
            $('#p-'+Number(i+1)).text('Please fill out this area');
        }
        else
        {
            $('#p-'+Number(i+1)).text('');
            players[i] = new Player($('#player-'+Number(i+1))[0].value,$('#play-'+Number(i+1))[0].value);
            count+=1;
        }
    }
    if(count === currentPlayer)
    {
        $(".players-sec").css('display','none');   
        $("#raceSec").css('display','block');
        let distance = 11;
        let x = setInterval(function() 
       {
         distance -= 1;
         $('#count').text(distance);
         if (distance < 0) 
            {
            $('#count').text('');
            audio.play();
            clearInterval(x);
            }
        },1000);
        if(count > 1)
        {
            $("#container").css('width',50+"%");
            $('#car-2').css('display','block');
            $('#lines').css('display','block');
            $('#plData-2').css('display','block');
            $('.R1').addClass('road');
            for(let i = 0; i < count; i++)
            {
                $('#car-'+Number(i+1)).css('background-color',players[i].favColor);
                $('#plData-'+Number(i+1)).find('p').text(players[i].Playername);
            }
        }
        else
        {
            $('#car-1').css('background-color',players[0].favColor);
            $('#plData-1').find('p').text(players[0].Playername);
            $("#container").css('left',40+"%");
        }       

    }
});

/////////////////////////////////////////////////////////////
const data = {
    carSpeed: 5,
  }
  
  const Car = function (selector) {
    this.el = $(selector);
  
    this.ableToMove = {
      left: true,
      right: true,
      up: true,
      down: true
    }
  }
  audio.addEventListener('ended',function()
  {
  Car.prototype.moveLeft = function () {
    this.el.css('left', `-=${data.carSpeed}`);
    this.ableToMove.left = requestAnimationFrame(this.moveLeft.bind(this));
  }
  
  Car.prototype.stopLeft = function () {
    cancelAnimationFrame(this.ableToMove.left);
    this.ableToMove.left = true;
  }
  
  Car.prototype.moveRight = function () {
    this.el.css('left', `+=${data.carSpeed}`);
    this.ableToMove.right = requestAnimationFrame(this.moveRight.bind(this));
  }
  
  Car.prototype.stopRight = function () {
    cancelAnimationFrame(this.ableToMove.right);
    this.ableToMove.right = true;
  }
  
  Car.prototype.moveUp = function () {
    this.el.css('top', `-=${data.carSpeed}`);
    this.ableToMove.up = requestAnimationFrame(this.moveUp.bind(this));
  }
  
  Car.prototype.stopUp = function () {
    cancelAnimationFrame(this.ableToMove.up);
    this.ableToMove.up = true;
  }
  
  Car.prototype.moveDown = function () {
    this.el.css('top', `+=${data.carSpeed}`);
    this.ableToMove.down = requestAnimationFrame(this.moveDown.bind(this));
  }
  
  Car.prototype.stopDown = function () {
    cancelAnimationFrame(this.ableToMove.down);
    this.ableToMove.down = true;
  }
  
  
  const car = new Car('#car-1');
  const car2 = new Car('#car-2');
  
  $(document).on('keydown', function (e) {
    if (e.keyCode === 37 && car.ableToMove.left === true) {
      car.moveLeft();
    } else if (e.keyCode === 39 && car.ableToMove.right === true) {
      car.moveRight();
    } else if (e.keyCode === 38 && car.ableToMove.up === true) {
      car.moveUp();
    } else if (e.keyCode === 40 && car.ableToMove.down === true) {
      car.moveDown();
    } else if (e.keyCode === 65 && car2.ableToMove.left === true) {
      car2.moveLeft();
    } else if (e.keyCode === 68 && car2.ableToMove.right === true) {
      car2.moveRight();
    } else if (e.keyCode === 87 && car2.ableToMove.up === true) {
      car2.moveUp();
    } else if (e.keyCode === 83 && car2.ableToMove.down === true) {
      car2.moveDown();
    }
  });
  
  $(document).on('keyup', function (e) {
    if (e.keyCode === 37) {
      car.stopLeft();
    } else if (e.keyCode === 39) {
      car.stopRight();
    } else if (e.keyCode === 38) {
      car.stopUp();
    } else if (e.keyCode === 40) {
      car.stopDown();
    } else if (e.keyCode === 65) {
      car2.stopLeft();
    } else if (e.keyCode === 68) {
      car2.stopRight();
    } else if (e.keyCode === 87) {
      car2.stopUp();
    } else if (e.keyCode === 83) {
      car2.stopDown();
    }
  
  });
});