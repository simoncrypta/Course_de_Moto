#pragma strict

function Start () {

}

function Update () {
	if (Input.GetKeyDown(KeyCode.W)) {
			GetComponent(Rigidbody2D).velocity.y = 1;
	}
	if (Input.GetKeyDown(KeyCode.A)) {
			GetComponent(Rigidbody2D).velocity.x = -1;
	}
	if (Input.GetKeyDown(KeyCode.D)) {
			GetComponent(Rigidbody2D).velocity.x = 1;
	}
	if (Input.GetKeyDown(KeyCode.S)) {
			GetComponent(Rigidbody2D).velocity.y = -1;
	}
}
function OnCollisionEnter2D(InfoCol: Collision2D) {
	if (InfoCol.gameObject.name == "LimiteDeLaRoute") {
		Application.LoadLevel('Scene1');
	}
}
