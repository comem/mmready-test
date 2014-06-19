 ////////////////////////////////////////////////////////////////////////
    console.log('why so serious');
    console.log('**********************');
    console.log('start coding..');
    console.log('**********************');
    ///////////////////////////////////////////////////////////////////////


/////////// TEST DE CONNECTION AU SERVEUR//////////////////////////////////////////
 $.ajax({
        url: URLSERVEURsuccess
    }).done(function() {
        ONLINE = true;
    }).fail(function() {
        ONLINE = false;
    }).always(function(data, txtStatus) {
        if(ONLINE){
            console.log("statut: online");
                    }else{
                       console.log("statut: offline");
                    }
                    
//                    console.log("Données Reçues : " + data);
                       
        
    });
    
    

    
    


  
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
  
   console.log("DOM Ready() - URL du serveur : "+URLSERVEURsuccess); 
    
  var event1 = new eventModel({id:"1",name:"event1"});
  var event2 = new eventModel({id:"2",name:"event2"});
console.log(event1);

var evenements = new events(event1,event2);

console.log(events);

});


