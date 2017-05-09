//Bonne pratique: définir les méthodes sur le prototype

function Tamagocci() {
	this.weight = 5;
	this.happiness = 5;
	this.age = 0;
	this.minWeight = 1;
	this.maxWeight = 10;			
}
//Application de la bonne pratique:
Tamagocci.prototype.eat = function(){
	this.weight += 2;
};
Tamagocci.prototype.play = function(){
	this.weight --;
	this.happiness ++;
};
Tamagocci.prototype.becomeOlder = function(){
	this.age ++;
	this.minWeight ++;
	this.maxWeight ++;
	this.happiness --;		
};
Tamagocci.prototype.isDead = function(){
	return this.weight > this.maxWeight ||
		   this.weight < this.minWeight ||
		   this.happiness <= 0;
};
Tamagocci.prototype.goodPicture = function(){
	return "pk_good.gif";
}
Tamagocci.prototype.badPicture = function(){
	return "pk_bad.gif";
}
Tamagocci.prototype.deadPicture = function(){
	return "pk_dead.gif";
}
Tamagocci.prototype.getPicture = function(){
	var picture = this.goodPicture();

	if (   (this.weight < this.minWeight+3)
		|| (this.weight > this.maxWeight-3) 
		|| (this.happiness < 3))
	{
		picture = this.badPicture();
	}

	if (this.isDead())
		picture = this.deadPicture();

	return picture;
};

function Pikachu(){
	//Pikachu est un Tamagocci
	Tamagocci.apply(this);
}
//Déclaration du prototype
Pikachu.prototype = Object.create(Tamagocci.prototype);
//override de la propriété eat
Pikachu.prototype.eat = function(){
	this.weight += 1;
};

function HelloKitty(){
	//HelloKitty est aussi un Tamagocci
	Tamagocci.apply(this);
}
//Déclaration du prototype
HelloKitty.prototype = Object.create(Tamagocci.prototype);
//override de la propriété getPicture
HelloKitty.prototype.goodPicture = function(){
	return "hk_good.gif";
}
HelloKitty.prototype.badPicture = function(){
	return "hk_bad.gif";
}
HelloKitty.prototype.deadPicture = function(){
	return "hk_dead.png";
}
