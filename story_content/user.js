function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Y7ZRE5JV2d":
        Script1();
        break;
      case "6Iy1rspZk5w":
        Script2();
        break;
      case "65DCDtLxd0x":
        Script3();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script3()
{
  $("#tab-customlink").show();
}

