
			var i=0;
			function detail(){
				if (!i) {
					document.getElementById("more").style.display = "inline";
					document.getElementById("dots").style.display = "none";
					document.getElementById("detail").innerHTML = "Tampilkan Lebih Sedikit";
					i=1;
				}else{
					document.getElementById("more").style.display = "none";
					document.getElementById("dots").style.display = "inline";
					document.getElementById("detail").innerHTML = "Tampilkan Lebih Banyak";
					i=0;
				}
			}	

