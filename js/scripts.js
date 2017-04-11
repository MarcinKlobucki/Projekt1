var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.'
	var animal = 'Zielone słonie'
		var animalUpperCased = animal.toUpperCase();
			var textCharsAfter = text.replace('Papugi', animalUpperCased); // nie wiem czy tutaj dobrze mogłem w sumie po prostu wpisać "ZIELONE SŁONIE" ale w zadaniu jest napisane, żeby zrobić po varze. jak coś to daj znać jak to umieścić żeby działało :)
				var partOfTextCharsAfter = textCharsAfter.slice(0,textCharsAfter.length/2); // nie wiem czy to jest dobrze ale taka była podpowiedź w zadaniu, żeby zrobić "length/2"

console.log(partOfTextCharsAfter);
