document.addEventListener("DOMContentLoaded", function(event) {
    


	let article;
	let content;
	let galerie;
	var width_g;

	article = document.querySelector('.contain-art');
	galerie = document.querySelector('.contain-galerie');
	width_g = document.getElementById('mosaique').clientWidth;
	
	console.log(width_g);

	content = [
		 {
		 	title:'Under the Eiffel Tower',
		 	texte:'Nemo quaeso miretur, si post exsudatos labores itinerum longos congestosque adfatim commeatus fiducia vestri ductante barbaricos pagos adventans velut mutato repente consilio ad placidiora deverti',
		 	img  :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHilFTp_404KiY3c16JwBAYwXVuJMml_Dr8Pj9j-b466uQGWnLHw'
		 },

		 {
		 	title:"Notre-Dame sans etat d\'ames",
		 	texte:'Cognitis enim pilatorum caesorumque funeribus nemo deinde ad has stationes appulit navem, sed ut Scironis praerupta letalia declinantes litoribus Cypriis contigui navigabant, quae Isauriae scopulis sunt controversa',
		 	img  :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1aZeI1XUiFUIwwaAKg8hrJDR23kZX7SjEAvMNv9oZFP_pLF7R9w'
		 },


		 {
		 	title:'Opéra dans tous ses états',
		 	texte:'Victus universis caro ferina est lactisque abundans copia qua sustentantur, et herbae multiplices et siquae alites capi per aucupium possint, et plerosque mos vidimus frumenti usum et vini penitus ignorantes.',
		 	img  :''
		 },

		  {
		 	title:'Opéra dans tous ses états',
		 	texte:'Victus universis caro ferina est lactisque abundans copia qua sustentantur, et herbae multiplices et siquae alites capi per aucupium possint, et plerosque mos vidimus frumenti usum et vini penitus ignorantes.',
		 	img  :''
		 },

		 	 {
		 	title:"Notre-Dame sans etat d\'ames",
		 	texte:'Cognitis enim pilatorum caesorumque funeribus nemo deinde ad has stationes appulit navem, sed ut Scironis praerupta letalia declinantes litoribus Cypriis contigui navigabant, quae Isauriae scopulis sunt controversa',
		 	img  :''
		 },

		 	 {
		 	title:'Under the Eiffel Tower',
		 	texte:'Nemo quaeso miretur, si post exsudatos labores itinerum longos congestosque adfatim commeatus fiducia vestri ductante barbaricos pagos adventans velut mutato repente consilio ad placidiora deverti',
		 	img  :''
		 },

		 	 {
		 	title:"Notre-Dame sans etat d\'ames",
		 	texte:'Cognitis enim pilatorum caesorumque funeribus nemo deinde ad has stationes appulit navem, sed ut Scironis praerupta letalia declinantes litoribus Cypriis contigui navigabant, quae Isauriae scopulis sunt controversa',
		 	img  :''
		 },

		  	 {
		 	title:"Notre-Dame sans etat d\'ames",
		 	texte:'Cognitis enim pilatorum caesorumque funeribus nemo deinde ad has stationes appulit navem, sed ut Scironis praerupta letalia declinantes litoribus Cypriis contigui navigabant, quae Isauriae scopulis sunt controversa',
		 	img  :''
		 }

	];


	for (let i =0; i < content.length; i ++){



// Création de la balise <div> <h3> et <p>
		let div   = document.createElement('div');
		let title = document.createElement('h3');
		let p = document.createElement('p');
		let img = document.createElement('img');

// Créer les attributs	
		let attr = document.createAttribute('class');


		attr.value = 'content-art';		

// Affectation attribut
		div.setAttributeNode(attr);

// Insertion de la balise h3  et p dans la div 
		div.appendChild(title);
		div.appendChild(img);
		div.appendChild(p);
		
	

// Récupérer le titre dans le tableau
		let titre = document.createTextNode(content[i].title);
		let texte = document.createTextNode(content[i].texte);
		let path = content[i].img;



//Insertion du texte dans les balises.
		title.appendChild(titre);
		p.appendChild(texte);
		img.setAttribute('src', path);

		
// Ajout de la balise div dans la balise article.
		//article.appendChild(div);
		

		
	}

/*********************************************
 PAGE RELOGIOUS HTML
*********************************************/

	for(let i=1; i<7;i++){

		// Créer la div
		let dv = document.createElement('div');
		// Créer un attribut class
		let attr= document.createAttribute('class');
		//let style = document.createAttribute('style');
		// Affecter valeur à l'attribut.
		attr.value="galerie-img";
		//style.value="width:"+ width_g/2+'px';
		// Affecter la classe à l'élèment Div
		dv.setAttributeNode(attr);
		//dv.setAttributeNode(style);
		// Créer un élement image.
		let pict = document.createElement('img');
		// Ajouter la source de l'image.
		pict.setAttribute('src',"/Users/samy/Desktop/WCS_PROJECT/wild_codac/public/img/categories/church/"+i+".jpg");
		// Créer paragraphe
		let para = document.createElement('p');

		let texte = document.createTextNode('Légende Photo');
		// Ajouter contenu.
		para.appendChild(texte);
		// Insérer l'image dans la div.
		dv.appendChild(pict);

		//ajouter la div.
		galerie.appendChild(dv);
	
	}

  });