var image = null;

function chooseFile() {
	var fileinput = document.getElementById("1");
	image = new SimpleImage(fileinput);
	var canvas = document.getElementById("canvas");
	image.drawTo(canvas);
}
function imageIsLoaded() {
	if (image == null || !image.complete()) {
		alert("no image detected");
		return;
	}
}
function invert() {
	for (var pixel of image.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		var red = pixel.getRed();
		var green = pixel.getGreen();
		var blue = pixel.getBlue();
		pixel.setRed(blue);
		pixel.setBlue(green);
		pixel.setGreen(red);
	}
	var canvas = document.getElementById("canvas");
	image.drawTo(canvas);
}
function doGray() {
	for (var pixel of image.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		pixel.setRed(avg);
		pixel.setGreen(avg);
		pixel.setBlue(avg);
	}
	var canvas = document.getElementById("canvas");
	image.drawTo(canvas);
}
function doRed() {
	for (var pixel of image.values()) {
		var red = pixel.getRed();
		var green = pixel.getGreen();
		var blue = pixel.getBlue();
		var avg = (red + blue + green) / 3;
		if (avg < 128) {
			pixel.setRed(avg * 2);
			pixel.setGreen(0);
			pixel.setBlue(0);
		} else {
			pixel.setRed(255);
			pixel.setGreen(avg * 2 - 255);
			pixel.setBlue(avg * 2 - 255);
		}
	}
	var canvas = document.getElementById("canvas");
	image.drawTo(canvas);
}
function doGreen() {
	for (var pixel of image.values()) {
		var red = pixel.getRed();
		var green = pixel.getGreen();
		var blue = pixel.getBlue();
		var avg = (red + blue + green) / 3;
		if (avg < 128) {
			pixel.setGreen(avg * 2);
			pixel.setRed(0);
			pixel.setBlue(0);
		} else {
			pixel.setGreen(255);
			pixel.setRed(avg * 2 - 255);
			pixel.setBlue(avg * 2 - 255);
		}
	}
	var canvas = document.getElementById("canvas");
	image.drawTo(canvas);
}
function dontRed() {
	for (var pixel of image.values()) {
		var red = pixel.getRed();
		var green = pixel.getGreen();
		var blue = pixel.getBlue();
		var avg = (red + blue + green) / 3;
		if (red > 50) {
			var midRed = red / 2;
			blue = blue + midRed;
			green = green + midRed;
			red = avg - midRed;
			pixel.setRed(red);
			pixel.setBlue(blue);
			pixel.setGreen(green);
		}
	}
	var canvas = document.getElementById("canvas");
	image.drawTo(canvas);
}
function doBlue() {
	for (var pixel of image.values()) {
		var red = pixel.getRed();
		var green = pixel.getGreen();
		var blue = pixel.getBlue();
		var avg = (red + blue + green) / 3;
		if (avg < 128) {
			pixel.setBlue(avg * 2);
			pixel.setRed(0);
			pixel.setGreen(0);
		} else {
			pixel.setBlue(255);
			pixel.setRed(avg * 2 - 255);
			pixel.setGreen(avg * 2 - 255);
		}
	}
	var canvas = document.getElementById("canvas");
	image.drawTo(canvas);
}
function lessContrast() {
	for (var pixel of image.values()) {
		var red = pixel.getRed();
		var green = pixel.getGreen();
		var blue = pixel.getBlue();
		var avg = (red + blue + green) / 3;
		if (red + blue > avg) {
			green = green + 50;
		}
		if (green > avg || red > avg) {
			if (red > green) {
				red = red - green;
				pixel.setRed(red);
			}
			if (green > red) {
				green = green + -red;
				pixel.setGreen(green);
			}
		}
		blue = avg / 3 + blue;
		pixel.setBlue(blue);
	}
	var canvas = document.getElementById("canvas");
	image.drawTo(canvas);
}
function moreContrast() {
	for (var pixel of image.values()) {
		var red = pixel.getRed();
		var green = pixel.getGreen();
		var blue = pixel.getBlue();
		var avg = (red + blue + green) / 3;
		if (red > avg) {
			var avgR = red - avg;
			red = red + avgR;
			pixel.setRed(red);
		}
		if (blue > avg) {
			var avgB = blue - avg;
			blue = blue + avgB;
			pixel.setBlue(blue);
		}
		if (green > avg) {
			var avgG = green - avg;
			green = green + avgG;
			pixel.setGreen(green);
		}
	}
	var canvas = document.getElementById("canvas");
	image.drawTo(canvas);
}
function brighten() {
	for (var pixel of image.values()) {
		var red = pixel.getRed();
		var green = pixel.getGreen();
		var blue = pixel.getBlue();
		var avg = (red + blue + green) / 3;
		var purple = (blue + red) / 2;
		if (avg < 220) {
			red = red + 50;
			blue = blue + 50;
			green = green + 50;
			pixel.setRed(red);
			pixel.setBlue(blue);
			pixel.setGreen(green);
		}
	}
	var canvas = document.getElementById("canvas");
	image.drawTo(canvas);
}
function darken() {
	for (var pixel of image.values()) {
		var red = pixel.getRed();
		var green = pixel.getGreen();
		var blue = pixel.getBlue();
		var avg = (red + blue + green) / 3;
		red = red - 50;
		blue = blue - 50;
		green = green - 50;
		pixel.setRed(red);
		pixel.setBlue(blue);
		pixel.setGreen(green);
	}
	var canvas = document.getElementById("canvas");
	image.drawTo(canvas);
}
function pride() {
	for (var pixel of image.values()) {
		var red = pixel.getRed();
		var green = pixel.getGreen();
		var blue = pixel.getBlue();
		var avg = (blue + red + green) / 3;
		var height = image.getHeight();
		var thirdHeight = image.getHeight() / 3;
		var width = image.getWidth();
		if (pixel.getY() <= thirdHeight) {
			if (avg < 128) {
				pixel.setRed(avg * 2);
				pixel.setGreen(0);
				pixel.setBlue(0);
			} else {
				pixel.setRed(255);
				pixel.setGreen(avg * 2 - 255);
				pixel.setBlue(avg * 2 - 255);
			}
		}
		if (pixel.getY() > thirdHeight && pixel.getY() < height - thirdHeight) {
			if (avg < 128) {
				pixel.setBlue(avg * 2);
				pixel.setRed(0);
				pixel.setGreen(0);
			} else {
				pixel.setBlue(255);
				pixel.setRed(avg * 2 - 255);
				pixel.setGreen(avg * 2 - 255);
			}
		}
		if (pixel.getY() >= height - thirdHeight) {
			if (avg < 128) {
				pixel.setGreen(avg * 2);
				pixel.setRed(0);
				pixel.setBlue(0);
			} else {
				pixel.setGreen(255);
				pixel.setRed(avg * 2 - 255);
				pixel.setBlue(avg * 2 - 255);
			}
		}
	}
	var canvas = document.getElementById("canvas");
	image.drawTo(canvas);
}
function prejudice() {
	for (var pixel of image.values()) {
		var red = pixel.getRed();
		var green = pixel.getGreen();
		var blue = pixel.getBlue();
		var avg = (blue + red + green) / 3;
		var height = image.getHeight();
		var thirdHeight = image.getHeight() / 3;
		var width = image.getWidth();
		if (pixel.getY() <= thirdHeight) {
			if (avg < 128) {
				pixel.setRed(avg / 2);
				pixel.setGreen(avg * 2);
				pixel.setBlue(avg * 2 - blue);
			} else {
				pixel.setBlue(255);
				pixel.setRed(avg * 2 - 255);
				pixel.setGreen(avg * 2 - 255);
			}
		}
		if (pixel.getY() > thirdHeight && pixel.getY() < height - thirdHeight) {
			if (avg < 128) {
				pixel.setBlue(avg / 2);
				pixel.setRed(avg * 2);
				pixel.setGreen(0);
			} else {
				pixel.setBlue(red);
				pixel.setRed(avg / 2 + 255);
				pixel.setGreen(avg * 2 - 255);
			}
		}
		if (pixel.getY() >= height - thirdHeight) {
			if (avg < 128) {
				pixel.setGreen(avg * 2);
				pixel.setRed(0);
				pixel.setBlue(0);
			} else {
				pixel.setGreen(255 - blue);
				pixel.setRed(avg * 2 + 255);
				pixel.setBlue(avg * 2 - 255);
			}
		}
	}
	var canvas = document.getElementById("canvas");
	image.drawTo(canvas);
}
function valueFlip() {
	for (var pixel of image.values()) {
		var red = pixel.getRed();
		var green = pixel.getGreen();
		var blue = pixel.getBlue();
		var avg = (red + blue + green) / 3;
		if (red < 175) {
			red = red * 2;
		}
		if (red > 175) {
			red = red / 2;
		}
		if (blue < 175) {
			blue = blue * 2;
		}
		if (blue > 175) {
			blue = blue / 2;
		}
		if (green < 175) {
			green = green * 2;
		}
		if (green > 175) {
			green = green / 2;
		}
		pixel.setRed(red);
		pixel.setBlue(blue);
		pixel.setGreen(green);
	}
	var canvas = document.getElementById("canvas");
	image.drawTo(canvas);
}
function twisted() {
	for (var pixel of image.values()) {
		var red = pixel.getRed();
		var green = pixel.getGreen();
		var blue = pixel.getBlue();
		var avg = (red + blue + green) / 3;
		if (red > avg) {
			red = red / 2;
		} else {
			red = red * 2;
		}
		if (blue > avg) {
			blue = blue / 2;
		} else {
			blue = blue * 2;
		}
		if (green > avg) {
			green = green / 2;
		} else {
			green = green * 2;
		}
		pixel.setRed(red);
		pixel.setBlue(blue);
		pixel.setGreen(green);
	}
	var canvas = document.getElementById("canvas");
	image.drawTo(canvas);
}
function reset() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);
	chooseFile(image);
}
