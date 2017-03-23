(function(){
	// Creates the digital clock on the footer.
	setInterval(function(){
		var digitalTime = new Date();
		document.getElementById("digital-timer").innerHTML = digitalTime.toString();
	}, 1000);

    // Clock action button. Show/Hide.
	$(".btn").click(function(event) {
		event.preventDefault();
		$("#clock").toggle("fast", function(){
			if ($("#toggle").hasClass("btn-dark")) {
			  	$(".btn").removeClass("btn-dark").addClass("btn-default");
				$(".btn").html(
			        '<i class="material-icons" style="vertical-align: -29%">visibility</i>'
			        + ' Mostrar Relógio!'
			    );
			} else {
			  	$(".btn").removeClass("btn-default").addClass("btn-dark");
				$(".btn").html(
			        '<i class="material-icons" style="vertical-align: -29%">visibility_off</i>'
			        + ' Esconder Relógio!'
			    );
			}
        });
	});

})();