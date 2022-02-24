function refresh()
{
	var uP=0;
	var gP=0;
	var oP=0;
	
	//Permissions Utilisateur
	ref_uR = document.getElementById("uR");
	ref_uW = document.getElementById("uW");
	ref_uX = document.getElementById("uX");

	//Permissions Groupe
	ref_gR = document.getElementById("gR");
	ref_gW = document.getElementById("gW");
	ref_gX = document.getElementById("gX");

	//Permissions Autres
	ref_oR = document.getElementById("oR");
	ref_oW = document.getElementById("oW");
	ref_oX = document.getElementById("oX");

	//Mise à jour du résultat
		//Pour l'utilisateur
	if(ref_uR.checked)
		{uP=uP+4;}
	if(ref_uW.checked)
		{uP=uP+2;}
	if(ref_uX.checked)
		{uP=uP+1;}

		//Pour le groupe
	if(ref_gR.checked)
		{gP=gP+4;}
	if(ref_gW.checked)
		{gP=gP+2;}
	if(ref_gX.checked)
		{gP=gP+1;}

		//Pour les autres
	if(ref_oR.checked)
		{oP=oP+4;}
	if(ref_oW.checked)
		{oP=oP+2;}
	if(ref_oX.checked)
		{oP=oP+1;}
	

	//Mise a jour de l'affichage du résultat
	refResultat = document.getElementById("resultat");
	refResultat.innerHTML = `${uP}${gP}${oP}`;

	//console.log("Affichage mis à jour");
}

function changeTheme(e)
{
	refBody = document.getElementsByTagName('body')[0];
	refResults = document.getElementById("resultats");

	//console.log("Fonction changeTheme()");

	if(e.innerHTML==="Dark Mode") //Changer en darkmode
	{
		refBody.style.backgroundColor="#1D1D1D";
		refBody.style.color="#EEEEEE";
		refResults.style.borderColor="#EEEEEE";
		e.innerHTML="Light Mode";
	}
	else if(e.innerHTML==="Light Mode") //Changer en lightmode 
	{
		refBody.style.backgroundColor="white";
		refBody.style.color="black";
		refResults.style.borderColor="black";
		e.innerHTML="Dark Mode";
	}
	else //Erreur
	{
		document.reload();
	}
}