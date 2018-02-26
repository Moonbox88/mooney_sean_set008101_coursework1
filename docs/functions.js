function caesar_cipher() {
	var plain_text = document.getElementById("caesar_message").value;
	var alphabet_offset = parseInt(document.getElementById("caesar_offset").value);
	var cipher_text = [];
	
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
	"t","u","v","w","x","y","z"];
	
	for (var idx = 0; idx < plain_text.length; idx++) 
	{
		var current = alphabet.indexOf(plain_text[idx]);
		if(current == -1)
		{
			if (plain_text[idx].charCodeAt() >= 65 && plain_text[idx].charCodeAt() <= 90)
			{
				var temp = plain_text[idx].toLowerCase();
				current = alphabet.indexOf(temp);
				var new_position = current+alphabet_offset;
				if(new_position > 25)
				{
					new_position = new_position % 26;
				}
				new_letter = alphabet[new_position].toUpperCase();
				cipher_text.push(new_letter);
			}
			else
			{
				cipher_text.push(plain_text[idx]);
			}
		}
		else
		{
			var new_position = current+alphabet_offset;
			if(new_position > 25)
			{
				new_position = new_position % 26;
			}
			new_letter = alphabet[new_position];
			cipher_text.push(new_letter);
		}
	}
	document.getElementById("caesar_output").innerHTML = cipher_text.join("");
}

function caesar_decipher() {
	var plain_text = document.getElementById("caesar_message").value;
	var alphabet_offset = parseInt(document.getElementById("caesar_offset").value);
	var cipher_text = [];
	
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
	"t","u","v","w","x","y","z"];
	
	for (var idx = 0; idx < plain_text.length; idx++) 
	{
		var current = alphabet.indexOf(plain_text[idx]);
		if(current == -1)
		{
			if (plain_text[idx].charCodeAt() >= 65 && plain_text[idx].charCodeAt() <= 90)
			{
				var temp = plain_text[idx].toLowerCase();
				current = alphabet.indexOf(temp);
				var new_position = current-alphabet_offset;
				if(new_position < 0)
				{
					new_position = 26 - (new_position * -1);
				}
				var new_letter = alphabet[new_position].toUpperCase();
				cipher_text.push(new_letter);
			}
			else
			{
				cipher_text.push(plain_text[idx]);
			}
		}
		else
		{
			var new_position = current-alphabet_offset;
			if(new_position < 0)
			{
				new_position = 26 - (new_position * -1);
			}
			var new_letter = alphabet[new_position];
			cipher_text.push(new_letter);
		}
	}
	document.getElementById("caesar_output").innerHTML = cipher_text.join("");
}

function atbash_cipher() {
	var plain_text = document.getElementById("atbash_message").value;
	var cipher_text = [];
	
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
	"t","u","v","w","x","y","z"];
	
	for (var idx = 0; idx < plain_text.length; idx++) 
	{
		var current = alphabet.indexOf(plain_text[idx]);
		if(current == -1)
		{
			if (plain_text[idx].charCodeAt() >= 65 && plain_text[idx].charCodeAt() <= 90)
			{
				var temp = plain_text[idx].toLowerCase();
				current = alphabet.indexOf(temp);
				var new_position = 25-current;
				var new_letter = alphabet[new_position].toUpperCase();
				cipher_text.push(new_letter);
			}
			else
			{
				cipher_text.push(plain_text[idx]);
			}
		}
		else
		{
			var new_position = 25-current;
			var new_letter = alphabet[new_position];
			cipher_text.push(new_letter);
		}
	}
	document.getElementById("atbash_output").innerHTML = cipher_text.join("");
}

function atbash_decipher() {
	var plain_text = document.getElementById("atbash_message").value;
	var cipher_text = [];
	
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
	"t","u","v","w","x","y","z"];
	
	for (var idx = 0; idx < plain_text.length; idx++) 
	{
		var current = alphabet.indexOf(plain_text[idx]);
		if(current == -1)
		{
			if (plain_text[idx].charCodeAt() >= 65 && plain_text[idx].charCodeAt() <= 90)
			{
				var temp = plain_text[idx].toLowerCase();
				current = alphabet.indexOf(temp);
				var new_position = 0;
				if (current < 13)
				{
					new_position = 25-current;
				}
				else
				{
					new_position = 0+(25%current);
				}
				var new_letter = alphabet[new_position].toUpperCase();
				cipher_text.push(new_letter);
			}
			else
			{
				cipher_text.push(plain_text[idx]);
			}
		}
		else
		{
			var new_position = 0;
			if (current < 13)
			{
				new_position = 25-current;
			}
			else
			{
				new_position = 0+(25%current);
			}
			var new_letter = alphabet[new_position];
			cipher_text.push(new_letter);
		}
	}
	document.getElementById("atbash_output").innerHTML = cipher_text.join("");
}