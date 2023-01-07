var multiplier = 1;
var MMcount = 0;
var autoClick = 0;
var factories = 0;

function update() {
  document.getElementById('text').value = MMcount;
  document.title = MMcount + " M&M's";
  document.getElementById('amountAutoClick').innerHTML = "You own " + autoClick + " Auto Clickers";
  document.getElementById('costAutoClick').innerHTML = ((autoClick+1) * 12) + " M&M's";
  document.getElementById('amountFactory').innerHTML = "You own " +factories + " Factories";
  document.getElementById('costFactory').innerHTML = ((factories+1) * 15) + " M&M's";
  document.getElementById('cookiespersecond').innerHTML = "You are gaining " + (((autoClick) + (factories*2))*multiplier) + " M&M's per/s";
  document.getElementById('amountMultiplier').innerHTML = "Multiplier Upgrade x" + (multiplier+1);
  document.getElementById('amountMultiplier2').innerHTML = "x" + (multiplier+1);
  document.getElementById('costMultiplier').innerHTML = ((multiplier+1) * 100) + " M&M's";
  document.getElementById('currentMultiplier').innerHTML = "Your current Multiplier is x" + (multiplier);
}

function timer() {
  MMcount = MMcount + autoClick*multiplier;
  MMcount = MMcount + factories*2*multiplier;
  update();
}
setInterval(timer, 1000)

function add() {
  MMcount = MMcount + 1;
  document.getElementById('text').value = MMcount;
  document.title = MMcount + " M&M's";
  update()
}

function save() {
  localStorage.setItem("MMcount", MMcount);
  localStorage.setItem("autoClick", autoClick);
  localStorage.setItem("factories", factories);
  localStorage.setItem("multiplier", multiplier);
}

function load() {
  if (localStorage.getItem("MMcount") === null) {
    alert("Nothing to load!");
  } else {
    MMcount = localStorage.getItem("MMcount");
    MMcount = parseInt(MMcount);
    autoClick = localStorage.getItem("autoClick");
    autoClick = parseInt(autoClick);
    factories = localStorage.getItem("factories");
    factories = parseInt(factories);
    multiplier = localStorage.getItem("multiplier");
    multiplier = parseInt(multiplier);
    update();
  }
}

function buyAutoClick() {
  if (MMcount >= ((autoClick + 1) * 12)) {
    MMcount = MMcount - ((autoClick + 1) * 12);
    autoClick = autoClick + 1;
    update();
  }
}
function buyFactory() {
  if (MMcount >= ((factories+1) * 15)) {
    MMcount = MMcount - ((factories + 1) * 15);
    factories = factories + 1;
    update();
  }
}
function buyMultiplier() {
  if (MMcount >= ((multiplier+1) * 100)) {
    MMcount = MMcount - ((multiplier + 1) * 100);
    multiplier = multiplier + 1;
    update();
  }
}
function reset(){
  if (window.confirm('Are you sure you want to reset?'))
{
  localStorage.clear();
  multiplier = 1;
  MMcount = 0;
  autoClick = 0;
  factories = 0;
  update();
}
else
{
    // Nothing happens
}
}

window.onbeforeunload = function () {
    save();
};
