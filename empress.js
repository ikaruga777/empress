var rpio = require('rpio');
var player = require('simplayer');
rpio.open(7, rpio.INPUT, rpio.PULL_DOWN);
let process;
function pollcb(pin){
	var state = rpio.read(pin);
	try{
	if(state){
		if(process){process.kill();}
		console.log('close');
	}else{
		if(process){process.kill();}
		process= player('1emp.mp3',function(){
				console.log("end");
			});
		console.log('open');
	}
	}catch(e){
		console.log("kill");
	}
}
rpio.poll(7, pollcb);

