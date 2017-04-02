//Auteur : Simon Gagnon
//Date derniere modif : 10 février 2017

//######################################
//Description Générale du role du script
//Script qui gère le déplacement des colonnes et de objects
//######################################

#pragma strict

function Start () {

}

function Update () {
//transform la viteste d'après la variable
	transform.position.y -= 0.1;
//si la position est plus loin que la position de sortie alors le mettre à la postion d'entrée
	if( transform.position.y <= -11.6)
	{
		transform.position.y = 15;
	}
}
