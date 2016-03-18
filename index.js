/**
 * Created by tonimoeckel on 18.03.16.
 */
var TelegramBot = require('node-telegram-bot-api');
var gpio = require("pi-gpio");
var gpioPin = 8;

var Bot = new TelegramBot('214478426:AAFj_QXy3bRABJGMaQC3zkcskEk7plXmgJY');

// Chat -146829790

var last = null;

gpio.close(gpioPin, function(error){
	if(err) {
		throw err;
	}else  {
		open();
	}
});

var open = function(){
	gpio.open(gpioPin, "output", function(err) {     // Open pin 16 for output

		if(err) {
			throw err;
		}else  {
			read();
		}

	});
};


var read = function(){
	gpio.read(gpioPin, function(err, value) {
		if(err) {
			throw err;
		}else {
			if (last !== value){
				last = value;
				console.log('Read' + value); // The current state of the pin
			}

			//Bot.sendMessage('-146829790', 'Read ' +value);
			read();
		}

	});
};

/*
gpio.open(8, "output", function(err) {     // Open pin 16 for output

	gpio.read(8, function(err, value) {
		if(err) throw err;

		console.log('Read' + value); // The current state of the pin
		Bot.sendMessage('-146829790', 'Read ' +value);

	});
});
*/