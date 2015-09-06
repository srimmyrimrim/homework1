function go(times)
	{
    var count= 0;
    while (count<times)
    	{
  
   			 down();
    		count = count + 1;
        
      }
    
   	count=0;
    right();
    right();
    
    while(count<times-1)
    	{
    			up();
      	count= count+1;
    	}
    
    count=0;
    right();
    right();
    
    while(count<times-1)
    	{
    		down();
    		count= count+1;
    	}
    
    count=0;
    right();
    right();
    
    while(count<times-1)
    	{
   			up();
    		count= count+1;
    	}
    
    count=0;
    right();
    right();
    
    while(count<times-1)
   	 {
    		down();
   	 		count= count+1;
   	 }
    right();
  }

go(8);
