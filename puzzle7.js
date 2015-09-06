var color;
function godown()
	{
    getColor();
    var count= 0;
    while (getColor() != "red")
    	{
        down();
      }
  }
function goup()
	{
    getColor();
    var count= 0;
    while (getColor() != "red")
    	{
        up();
      }
  }
function doubleR()
	{
  	right();
  	right();
  
	}
godown();
doubleR();
goup();
doubleR();
godown();
doubleR();
goup();
doubleR();
godown();
right();
