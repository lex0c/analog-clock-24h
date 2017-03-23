(function(){
	var canvas = document.getElementById("clock");
	var ctx = canvas.getContext("2d");
	var radius = canvas.height / 2;
	ctx.translate(radius, radius);
	radius = radius * 0.90
	
	// Clock Loader.
	setInterval(drawClock, 1000);
	function drawClock() {
	    drawFace(ctx, radius);
	    drawNumbers(ctx, radius);
	    drawTime(ctx, radius);
	}

    // Drawing the clock.
	function drawFace(ctx, radius) {
	    var grad;
	    ctx.beginPath();
	    ctx.arc(0, 0, radius, 0, 2*Math.PI);
	    ctx.fillStyle = 'white';
	    ctx.fill();
	    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
	    grad.addColorStop(1, '#666');
	    grad.addColorStop(0.2, '#000');
	    grad.addColorStop(0, '#333');
	    ctx.strokeStyle = grad;
	    ctx.lineWidth = radius*0.1;
	    ctx.stroke();
	    ctx.beginPath();
	    ctx.arc(0, 0, 10, 0, 2*Math.PI);
	    ctx.fillStyle = '#333';
	    ctx.fill();
	}

    // Position the numbers in the circle.
	function drawNumbers(ctx, radius) {
	    var ang;
	    var num;
	    ctx.font = radius*0.13 + "px arial";
	    ctx.textBaseline="middle";
	    ctx.textAlign="center";
	    for(num = 1; num <= 24; num++){
		    ang = num * Math.PI / 12;
		    ctx.rotate(ang);
		    ctx.translate(0, -radius*0.85);
		    ctx.rotate(-ang);
		    ctx.fillText(num.toString(), 0, 0);
		    ctx.rotate(ang);
		    ctx.translate(0, radius*0.85);
		    ctx.rotate(-ang);
	    }
	}

    // Format the time in 24h
	function drawTime(ctx, radius) {
	    var now = new Date();
	    var hour = now.getHours();
	    var minute = now.getMinutes();
	    var second = now.getSeconds();
	    // Get hour.
	    hour=hour % 24;
	    hour=(hour*Math.PI/12)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
	    drawHand(ctx, hour, radius*0.6, radius*0.05);
	    // Get minute.
	    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
	    drawHand(ctx, minute, radius*0.8, radius*0.05);
	    // Get second.
	    second=(second*Math.PI/30);
	    drawHand(ctx, second, radius*0.8, radius*0.02);
	}

     // Creates pointers based on time.
	function drawHand(ctx, pos, length, width) {
	    ctx.beginPath();
	    ctx.lineWidth = width;
	    ctx.lineCap = "round";
	    ctx.moveTo(0,0);
	    ctx.rotate(pos);
	    ctx.lineTo(0, -length);
	    ctx.stroke();
	    ctx.rotate(-pos);
	}

})();