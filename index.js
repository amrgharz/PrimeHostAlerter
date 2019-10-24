function offlineHosts (){
  var request = require('request')
  , JSONStream = require('JSONStream')
  , es = require('event-stream')
  const webhook = require("webhook-discord")
  const Hook = new webhook.Webhook("YourWebHookURL")
  var siaPrimeRequest = request.defaults({
    headers: {'User-Agent': 'SiaPrime-Agent'}
  })

  const allHosts = {
    faustian:       "<@268428013920714752>",
    andy :          "<@417636357742264320>",
    T_B:            "<@604410383368847360>",
    book_ka_boom :  "<@406079454834851841>",
    piajesse :      "<@137707224540774400>",
    kingsley:       "<@398481080845336576>",
    afdy:           "<@401038814656593921>",
    sanHe:          "<@537538116701913097>",
    empty:          "<@354875776757137418>",
    pitachoo:       "<@561166197643673604>",
    redRock:        "<@339129595687075842>",
    lifeNaked:      "<@426026046748360705>",
    ccg:            "<@422053343096078348>",
    jordi:          "<@472406106447151121>",
    reinisp:        "<@348058303776948225>",
    cryptoCable:    "<@361259195833516033>",
    ricky:          "<@288027521973223426>",
    farmerGreg:     "<@422737964137840641>",
    raspie:         "<@417530979280879616>",
    micro:          "<@458716942107279370>",
    jsherm:         "<@347744938718396418>"
  }


siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

  
    var lastResult =  data.scanhistory.length;
    

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && data.netaddress === "107.2.170.129:4282"
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.faustian + " Your host `107.2.170.129:4282` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
      }))

   siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
   .pipe(JSONStream.parse('hosts.*'))
   .pipe(es.mapSync(function (data) {

    
      var lastResult =  data.scanhistory.length;
      

       if(data.scanhistory[lastResult - 1]["success"] === false 
       && data.scanhistory[lastResult - 2]["success"] === false
       && data.scanhistory[lastResult - 3 ]["success"] === false
       && data.netaddress === '108.171.69.171:4282'
       ){
          const msg = new webhook.MessageBuilder()
                    .setName("HostsBot")
                    .setColor("#DC143C")
                    .setText("Hey" + allHosts.andy + " Your host `108.171.69.171:4282` is offline :(") 
                    .setTime();
                   Hook.send(msg);
        console.log(data.netaddress)
        }     
       
 }))

   siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
   .pipe(JSONStream.parse('hosts.*'))
   .pipe(es.mapSync(function (data) {

    
       var lastResult =  data.scanhistory.length;
      

       if(data.scanhistory[lastResult - 1]["success"] === false 
       && data.scanhistory[lastResult - 2]["success"] === false
       && data.scanhistory[lastResult - 3 ]["success"] === false
       && (data.netaddress === '212.105.168.207:4284'
       )
       ){
          const msg = new webhook.MessageBuilder()
                    .setName("HostsBot")
                    .setColor("#DC143C")
                    .setText("Hey" + allHosts.afdy + " Your host `212.105.168.207:4284` is offline :(") 
                    .setTime();
                   Hook.send(msg);
        console.log(data.netaddress)
        }     
       
 }));

 siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
   .pipe(JSONStream.parse('hosts.*'))
   .pipe(es.mapSync(function (data) {

    
       var lastResult =  data.scanhistory.length;
      

       if(data.scanhistory[lastResult - 1]["success"] === false 
       && data.scanhistory[lastResult - 2]["success"] === false
       && data.scanhistory[lastResult - 3 ]["success"] === false
       && (data.netaddress === '176.223.139.160:4282'
       )
       ){
          const msg = new webhook.MessageBuilder()
                    .setName("HostsBot")
                    .setColor("#DC143C")
                    .setText("Hey" + allHosts.afdy + " Your host `176.223.139.160:4282` is offline :(") 
                    .setTime();
                   Hook.send(msg);
        console.log(data.netaddress)
        }     
       
 }));

 siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
   .pipe(JSONStream.parse('hosts.*'))
   .pipe(es.mapSync(function (data) {

    
       var lastResult =  data.scanhistory.length;
      

       if(data.scanhistory[lastResult - 1]["success"] === false 
       && data.scanhistory[lastResult - 2]["success"] === false
       && data.scanhistory[lastResult - 3 ]["success"] === false
       && (data.netaddress === '212.105.168.207:4282'
       )
       ){
          const msg = new webhook.MessageBuilder()
                    .setName("HostsBot")
                    .setColor("#DC143C")
                    .setText("Hey" + allHosts.afdy + " Your host `212.105.168.207:4282` is offline :(") 
                    .setTime();
                   Hook.send(msg);
        console.log(data.netaddress)
        }     
       
 }));
 siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
 .pipe(JSONStream.parse('hosts.*'))
 .pipe(es.mapSync(function (data) {

  
     var lastResult =  data.scanhistory.length;
    

     if(data.scanhistory[lastResult - 1]["success"] === false 
     && data.scanhistory[lastResult - 2]["success"] === false
     && data.scanhistory[lastResult - 3 ]["success"] === false
     && data.netaddress === '219.153.109.228:4282'
      
     ){
        const msg = new webhook.MessageBuilder()
                  .setName("HostsBot")
                  .setColor("#DC143C")
                  .setText("Hey" + allHosts.empty + " Your host `219.153.109.228:4282` is offline :(") 
                  .setTime();
                 Hook.send(msg);
      console.log(data.netaddress)
      }     
     
}));

siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
 .pipe(JSONStream.parse('hosts.*'))
 .pipe(es.mapSync(function (data) {

  
     var lastResult =  data.scanhistory.length;
    

     if(data.scanhistory[lastResult - 1]["success"] === false 
     && data.scanhistory[lastResult - 2]["success"] === false
     && data.scanhistory[lastResult - 3 ]["success"] === false
     &&( data.netaddress === '24.182.159.234'
     )
     ){
        const msg = new webhook.MessageBuilder()
                  .setName("HostsBot")
                  .setColor("#DC143C")
                  .setText("Hey" + allHosts.lifeNaked+ " Your host `24.182.159.234` is offline :(")
                  .setTime(); 
                 Hook.send(msg);
      console.log(data.netaddress)
      }     
     
}));

siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
 .pipe(JSONStream.parse('hosts.*'))
 .pipe(es.mapSync(function (data) {

  
     var lastResult =  data.scanhistory.length;
    

     if(data.scanhistory[lastResult - 1]["success"] === false 
     && data.scanhistory[lastResult - 2]["success"] === false
     && data.scanhistory[lastResult - 3 ]["success"] === false
     &&( data.netaddress === '47.47.44.38:4282'
     )
     ){
        const msg = new webhook.MessageBuilder()
                  .setName("HostsBot")
                  .setColor("#DC143C")
                  .setText("Hey" + allHosts.lifeNaked+ " Your host `47.47.44.38:4282` is offline :(")
                  .setTime(); 
                 Hook.send(msg);
      console.log(data.netaddress)
      }     
     
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
 .pipe(JSONStream.parse('hosts.*'))
 .pipe(es.mapSync(function (data) {

  
     var lastResult =  data.scanhistory.length;
    

     if(data.scanhistory[lastResult - 1]["success"] === false 
     && data.scanhistory[lastResult - 2]["success"] === false
     && data.scanhistory[lastResult - 3 ]["success"] === false
     &&(data.netaddress === '74.62.77.10:4282'
     )
     ){
        const msg = new webhook.MessageBuilder()
                  .setName("HostsBot")
                  .setColor("#DC143C")
                  .setText("Hey" + allHosts.lifeNaked+ " Your host `74.62.77.10:4282` is offline :(")
                  .setTime(); 
                 Hook.send(msg);
      console.log(data.netaddress)
      }     
     
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
 .pipe(JSONStream.parse('hosts.*'))
 .pipe(es.mapSync(function (data) {

  
     var lastResult =  data.scanhistory.length;
    

     if(data.scanhistory[lastResult - 1]["success"] === false 
     && data.scanhistory[lastResult - 2]["success"] === false
     && data.scanhistory[lastResult - 3 ]["success"] === false
     &&( data.netaddress === 'kimhomesc.no-ip.org:4282'
       
     )
     ){
        const msg = new webhook.MessageBuilder()
                  .setName("HostsBot")
                  .setColor("#DC143C")
                  .setText("Hey" + allHosts.lifeNaked+ " Your host `kimhomesc.no-ip.org:4282` is offline :(")
                  .setTime(); 
                 Hook.send(msg);
      console.log(data.netaddress)
      }     
     
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
 .pipe(JSONStream.parse('hosts.*'))
 .pipe(es.mapSync(function (data) {

  
     var lastResult =  data.scanhistory.length;
    

     if(data.scanhistory[lastResult - 1]["success"] === false 
     && data.scanhistory[lastResult - 2]["success"] === false
     && data.scanhistory[lastResult - 3 ]["success"] === false
     &&( data.netaddress === 'shawnhomesc.no-ip.org:4282'
     )
     ){
        const msg = new webhook.MessageBuilder()
                  .setName("HostsBot")
                  .setColor("#DC143C")
                  .setText("Hey" + allHosts.lifeNaked+ " Your host `shawnhomesc.no-ip.org:4282` is offline :(")
                  .setTime(); 
                 Hook.send(msg);
      console.log(data.netaddress)
      }     
     
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
 .pipe(JSONStream.parse('hosts.*'))
 .pipe(es.mapSync(function (data) {

  
     var lastResult =  data.scanhistory.length;
    

     if(data.scanhistory[lastResult - 1]["success"] === false 
     && data.scanhistory[lastResult - 2]["success"] === false
     && data.scanhistory[lastResult - 3 ]["success"] === false
     &&(data.netaddress === 'shawnhomesc.no-ip.org:4298'
     )
     ){
        const msg = new webhook.MessageBuilder()
                  .setName("HostsBot")
                  .setColor("#DC143C")
                  .setText("Hey" + allHosts.lifeNaked+ " Your host `shawnhomesc.no-ip.org:4298` is offline :(")
                  .setTime(); 
                 Hook.send(msg);
      console.log(data.netaddress)
      }     
     
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
 .pipe(JSONStream.parse('hosts.*'))
 .pipe(es.mapSync(function (data) {

  
     var lastResult =  data.scanhistory.length;
    

     if(data.scanhistory[lastResult - 1]["success"] === false 
     && data.scanhistory[lastResult - 2]["success"] === false
     && data.scanhistory[lastResult - 3 ]["success"] === false
     &&(data.netaddress === 'shawnhomesc.no-ip.org:4299'
     )
     ){
        const msg = new webhook.MessageBuilder()
                  .setName("HostsBot")
                  .setColor("#DC143C")
                  .setText("Hey" + allHosts.lifeNaked+ " Your host `shawnhomesc.no-ip.org:4299` is offline :(")
                  .setTime(); 
                 Hook.send(msg);
      console.log(data.netaddress)
      }     
     
}));


siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    &&( data.netaddress === "47.216.80.193:4282"
    )
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.redRock + " Your host 47.216.80.193:4282 is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));

siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    &&( data.netaddress === "85.232.6.181:4282"
    )
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.sanHe+ " Your host  `85.232.6.181:4282` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    &&(data.netaddress === "linmedia.selfhost.eu:4282"
    )
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.sanHe+ " Your host `linmedia.selfhost.eu:4282` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    &&(data.netaddress === "linmedia.selfhost.eu:4284"
    )
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.sanHe+ " Your host `linmedia.selfhost.eu:4284` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    &&(data.netaddress === "linmedia.selfhost.eu:4286"
    )
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.sanHe+ " Your host `linmedia.selfhost.eu:4286` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));

siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && data.netaddress === "bubblehost.dynamic-dns.net:4282"
    
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.book_ka_boom + " Your host `bubblehost.dynamic-dns.net:4282` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));

siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    &&(data.netaddress === "itsprimetime.duckdns.org:4282"
    )
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.jordi + " Your host `itsprimetime.duckdns.org:4282` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    &&( data.netaddress === "itsprimetimeV2.duckdns.org"
    )
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.jordi + " Your host `itsprimetimeV2.duckdns.org` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));


siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && data.netaddress === "node01.eters.lv:4282"
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.reinisp + " Your host `node01.eters.lv:4282` is offline :(")
                 .setTime(); 
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));

siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && data.netaddress === "padron.ddns.me:4282"
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.ricky + " Your host `padron.ddns.me:4282` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));

siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && data.netaddress === "prime.kingsley-muir.com"
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.kingsley + " Your host `prime.kingsley-muir.com` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));

siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && (data.netaddress === "prime20.sosacreek.tech:4282"
    )
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.farmerGreg + " Your host `prime20.sosacreek.tech:4282` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && (data.netaddress === "prime20.sosacreek.tech:4283")
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.farmerGreg + " Your host `prime20.sosacreek.tech:4283` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && ( data.netaddress === "prime20.sosacreek.tech:4284"
        
    )
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.farmerGreg + " Your host `prime20.sosacreek.tech:4284` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && (data.netaddress === "prime20.sosacreek.tech:4285" )
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.farmerGreg + " Your host `prime20.sosacreek.tech:4285` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && ( data.netaddress === "prime20.sosacreek.tech:6282")
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.farmerGreg + " Your host `prime20.sosacreek.tech:6282` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && (data.netaddress === "prime20.sosacreek.tech:6283")
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.farmerGreg + " Your host `prime20.sosacreek.tech:6283` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));

siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    &&( data.netaddress === "scp.cryptocable.eu:4282")
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.cryptoCable + " Your host `scp.cryptocable.eu:4282` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    &&(data.netaddress === "scp2.cryptocable.eu:4282")
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.cryptoCable + " Your host `scp2.cryptocable.eu:4282` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));

siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && data.netaddress === "scp.techandsupply.ca:4282"
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.raspie + " Your host `scp.techandsupply.ca:4282` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));

siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && data.netaddress === "scp1.dbcld.com:4282"
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.T_B + " Your host `scp1.dbcld.com:4282` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));

siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && data.netaddress === "shermprime.duckdns.org:4282"
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.jsherm + " Your host `shermprime.duckdns.org:4282` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));

siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && data.netaddress === "sia.painintheass.club:4282"
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.piajesse + " Your host `sia.painintheass.club:4282` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));

siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && (data.netaddress === "siaprime.carpenter-farms.us:4282")
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.ccg + " Your host `siaprime.carpenter-farms.us:4282` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && (data.netaddress === "siaprime.carpenter-farms.us:4285"
    )
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.ccg + " Your host `siaprime.carpenter-farms.us:4285` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && (data.netaddress === "siaprime.carpenter-farms.us:4291")
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.ccg + " Your host `siaprime.carpenter-farms.us:4291` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && (data.netaddress === "siaprime.carpenter-farms.us:4294" )
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.ccg + " Your host `siaprime.carpenter-farms.us:4294` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && (data.netaddress === "siaprime.carpenter-farms.us:4297")
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.ccg + " Your host `siaprime.carpenter-farms.us:4297` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && (data.netaddress === "siaprime.carpenter-farms.us:4300")
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.ccg + " Your host `siaprime.carpenter-farms.us:4300` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));
siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && (data.netaddress === "siaprime2.carpenter-farms.us:4288")
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.ccg + " Your host `siaprime2.carpenter-farms.us:4288` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));

siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && data.netaddress === "siaprime.ddns.net:4282"
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.pitachoo + " Your host `siaprime.ddns.net:4282` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));

siaPrimeRequest({url: 'http://localhost:4280/hostdb/all'})
.pipe(JSONStream.parse('hosts.*'))
.pipe(es.mapSync(function (data) {

 
    var lastResult =  data.scanhistory.length;
   

    if(data.scanhistory[lastResult - 1]["success"] === false 
    && data.scanhistory[lastResult - 2]["success"] === false
    && data.scanhistory[lastResult - 3 ]["success"] === false
    && data.netaddress === "siastorj.dynktk.de:4282"
    ){
       const msg = new webhook.MessageBuilder()
                 .setName("HostsBot")
                 .setColor("#DC143C")
                 .setText("Hey" + allHosts.micro + " Your host `siastorj.dynktk.de:4282` is offline :(") 
                 .setTime();
                Hook.send(msg);
     console.log(data.netaddress)
     }     
    
}));

}
offlineHosts();
function callEveryHour (){
setInterval(offlineHosts, 1000 * 60 * 60 * 24);
}
callEveryHour();