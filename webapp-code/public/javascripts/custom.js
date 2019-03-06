
	var rings,earrings,pendents,newarrivals,goldcoins;
	 function ringsss(){
		// document.getElementsByClassName("rings-detail").remove();
		var txt="";
		txt += "<ul class='rings-detail'>"
			for (var key in rings) {
				  if (rings.hasOwnProperty(key)) {
				    var val = rings[key];
				    console.log(val);
			          txt += "<li class='rings-types'><span>" + key + "</span>";
				      //for (x in val) {
				          txt +="<ul class='daily-wear'><li>" + val[0] + "</li><li>" + val[1] + "</li><li>" + val[2] + "</li></ul></li>";
				       // }
				  }
			}

		      txt += "</ul>"    
	 
		      document.getElementById("rings-output").innerHTML = txt;
	}
	
	 function Earringsss(){
		 var txt="";
			txt += "<ul class='rings-detail'>"
				for (var key in earrings) {
					  if (earrings.hasOwnProperty(key)) {
					    var val = earrings[key];
					    console.log(val);
				          txt += "<li class='rings-types'><span>" + key + "</span>";
					      //for (x in val) {
					          txt +="<ul class='daily-wear'><li>" + val[0] + "</li><li>" + val[1] + "</li><li>" + val[2] + "</li></ul></li>";
					       // }
					  }
				}

			      txt += "</ul>"    
			    	  
			      document.getElementById("earrings-output").innerHTML = txt;
		}
		function pendentsss(){
			var txt="";
			txt += "<ul class='rings-detail' id='pendents-center'>"
				for (var key in pendents) {
					  if (pendents.hasOwnProperty(key)) {
					    var val = pendents[key];
				          txt += "<li class='rings-types'><span>" + key + "</span>";
					      //for (x in val) {
					          txt +="<ul class='daily-wear'><li>" + val[0] + "</li><li>" + val[1] + "</li><li>" + val[2] + "</li></ul></li>";
					       // }
					  }
				}

			      txt += "</ul>"    
		 
			      document.getElementById("pendents-output").innerHTML = txt;
		}
		function arrivals(){
			var txt="";
			txt += "<ul class='rings-detail new-arrivals-center'>"
				for (var key in newarrivals) {
					  if (newarrivals.hasOwnProperty(key)) {
					    var val = newarrivals[key];
					    console.log(val);
				          txt += "<li class='rings-types'><span>" + key + "</span>";
					      //for (x in val) {
					          txt +="<ul class='daily-wear'><li>" + val[0] + "</li><li>" + val[1] + "</li></ul></li>";
					       // }
					  }
				}

			      txt += "</ul>"    
		 
			      document.getElementById("arrivals_output").innerHTML = txt;
		}
		function goldcoinssection(){
			var txt="";
			txt += "<ul class='rings-detail'>"
				for (var key in goldcoins) {
					  if (goldcoins.hasOwnProperty(key)) {
					    var val = goldcoins[key];
					    console.log(val);
				          txt += "<li class='rings-types'><span>" + key + "</span>";
					      for (x in val) {
					          txt +="<ul class='daily-wear'><li>" + val[x] + "</li></ul></li>"
					        }
					  }
				}

			      txt += "</ul>"    
		 
			      document.getElementById("gold_coins_output").innerHTML = txt;
		};
	function loadDoc() {
		  var xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		     /*  document.getElementById("demo").innerHTML =
		      this.responseText; */
		      var json=JSON.parse(this.responseText);
		      console.log(json);
		      rings=json.rings;
		      console.log(rings);
		      earrings=json.earrings;
		      console.log(earrings);
		      pendents=json.pendents;
		      console.log(pendents);
		      newarrivals=json.newarrivals;
		      console.log(newarrivals);
		      goldcoins=json.goldcoins;
		      console.log(goldcoins);
		    }
		  };
		  xhttp.open("GET", "data/menu.json", true);
		  xhttp.send(); 
		}
	if ($('#back-to-top').length) {
	    var scrollTrigger = 100, // px
	        backToTop = function () {
	            var scrollTop = $(window).scrollTop();
	            if (scrollTop > scrollTrigger) {
	                $('#back-to-top').addClass('show jumpup');
	            } else {
	                $('#back-to-top').removeClass('show jumpup');
	            }
	        };
	    backToTop();
	    $(window).on('scroll', function () {
	        backToTop();
	    });
	    $('#back-to-top').on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });
	}
 