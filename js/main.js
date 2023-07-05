		
		// {img:"img/i1.webp",rate:"Rs.7.47Lakh onwards",avg:"Avg.showroom price"},
		// {img:"img/i2.webp",rate:"Rs.7.47Lakh onwards",avg:"Avg.showroom price"},
		// {img:"img/i3.webp",rate:"Rs.7.47Lakh onwards",avg:"Avg.showroom price"},
		// {img:"img/i4.webp",rate:"Rs.7.47Lakh onwards",avg:"Avg.showroom price"},
		// {img:"img/i5.webp",rate:"Rs.7.47Lakh onwards",avg:"Avg.showroom price"},
		// {img:"img/i6.webp",rate:"Rs.7.47Lakh onwards",avg:"Avg.showroom price"},
		// {img:"img/i7.webp",rate:"Rs.7.47Lakh onwards",avg:"Avg.showroom price"},
		// {img:"img/i8.webp",rate:"Rs.7.47Lakh onwards",avg:"Avg.showroom price"},
		// {img:"img/i9.webp",rate:"Rs.7.47Lakh onwards",avg:"Avg.showroom price"}
		
		let carimgs=[{img:"img/img1.jpeg",rate:"William Androson",avg:"Cook"},{img:"img/img2.jpeg",rate:"Walter White",avg:"Master Chef"},{img:"img/img3.jpeg",rate:"Sarah johnson",avg:"Patissier"}]
		   
			 
			
			
			
			   
		 let car=document.getElementById("mo");
		 
		 
		 let container=document.getElementById("contai")
			    
			
			 let condiv=document.createElement("div")
			 condiv.setAttribute("class","text-center");
			 container.append(condiv,row)
			 
			 let head=document.createElement("h3")
				head.setAttribute("class","foncolo")
			 condiv.append(head)
			   head.innerHTML="Our Professional"
			   
			   let heads=document.createElement("span")
				heads.setAttribute("class","fonco foncolo")
			 head.append(heads)
			   heads.innerHTML=" chef"
			   
			   let par=document.createElement("p")
			    par.setAttribute("class","text-center fontsize")
				condiv.append(par)
				par.innerHTML="Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem."
		 
		 let cars=carimgs.map((s)=>{
			 
			 
			 
			 let rows=document.getElementById("row")
			 // let imgdiv=document.getElementById("mo")
			 
			let firstdiv=document.createElement("div")
			firstdiv.setAttribute("class","col-lg-4 col-md-6 col-sm-6 col-12");
			
			let imgitems=document.createElement("div")
			imgitems.setAttribute("class","imgitem mt-5");
			
			let imgdiv=document.createElement("div");
			imgdiv.setAttribute("class","imgdiv")
			
			let image=document.createElement("img");
				image.setAttribute("src",s.img);
				
				let titlediv=document.createElement("div")
				titlediv.setAttribute("class","titles border box-shadow text-center mb-5 bg-white p-1")
				
				let rat=document.createElement("h4");
				rat.setAttribute("class","head")
				rat.innerHTML=s.rate;
				
				let para=document.createElement("p");
				para.innerHTML=s.avg;
			   
			      
			row.append(firstdiv)
			firstdiv.append(imgitems)
			imgitems.append(image,titlediv)
			titlediv.append(rat,para)
		
			
			let icons=document.createElement("i");
			      let icons2=document.createElement("i");
			      let icons3=document.createElement("i");
			      let icons4=document.createElement("i");
				    icons.setAttribute("class","bi bi-facebook p-2 text-secondary")
				    icons2.setAttribute("class","bi bi-instagram p-2 text-secondary")
				    icons3.setAttribute("class","bi bi-linkedin p-2 text-secondary")
				    icons4.setAttribute("class","bi bi-twitter p-2 text-secondary")
					titlediv.append(icons)
					titlediv.append(icons2)
					titlediv.append(icons3)
					titlediv.append(icons4)
			     
			
					
		 })