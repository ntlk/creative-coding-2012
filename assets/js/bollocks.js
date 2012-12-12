/*
Words by David James Ross (http://www.davidjamesross.co.uk), inspired by http://www.artybollocks.com/ generator.
*/

// Creating the statement arrays

var relation_one = ["the body", "postmodern discourse", "gender politics", "the tyranny of ageing", "emerging sexualities", "new class identities", "acquired synesthesia", "Jungian archetypes", "the universality of myth", "Critical theory", "Pre-raphaelite tenets", "Bauhausian sensibilities", "consumerist fetishism", "multiculturalism", "the Military-Industrial Complex"]; // 15
var relation_two = ["emotional memories", "recycling culture", "skateboard ethics", "urban spaces", "life as performance", "multimedia experiences", "midlife subcultures", "football chants", "unwanted gifts", "UFO sightings", "daytime TV", "vegetarian ethics", "copycat violence", "counter-terrorism", "romance tourism"]; // 15
	
// The random number function
function rand(min, max) {	
	var random = Math.floor(Math.random() * (max - min + 1)) + min;
	return random; 
}

// The bollocks statement generator - one
function generate() {
		
	// Fill the statement array
	var statement = new Array();
	statement[0] = relation_one[rand(0,14)];
	statement[1] = relation_two[rand(0,14)];
						
	// Display the generated statement
	short_bollocks = 'My work explores the relationship between ' + statement[0] + ' and ' + statement[1] + '.';
	return short_bollocks;
};

 // on click generate and display
