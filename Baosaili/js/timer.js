(function() {
	var _id = "572b398854165f2fe88ea60a89ef76b9";
	while (document.getElementById("timer" + _id)) _id = _id + "0";
	document.write("<div id='timer" + _id + "' style='min-width:266px;height:67px;'></div>");
	var _t = document.createElement("script");
	_t.src = "js/timer.min.js";
	var _f = function(_k) {
		var l = new MegaTimer(_id, {
			"view": [0, 1, 1, 1],
			"type": {
				"currentType": "3",
				"params": {
					"weekdays": [1, 1, 1, 1, 1, 1, 1],
					"usertime": true,
					"time": "00:00",
					"tz": -180,
					"hours": "24",
					"minutes": "00"
				}
			},
			"design": {
				"type": "plate",
				"params": {
					"round": "0",
					"background": "gradient",
					"background-color": ["#000000", "#ababab"],
					"effect": "flipchart",
					"space": "1",
					"separator-margin": "4",
					"number-font-family": {
						"family": "Exo 2",
						"link": "<link href='http://fonts.googleapis.com/css?family=Exo+2&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
					},
					"number-font-size": "27",
					"number-font-color": "#ffffff",
					"padding": "13",
					"separator-on": false,
					"separator-text": ":",
					"text-on": true,
					"text-font-family": {
						"family": "Roboto",
						"link": "<link href='http://fonts.googleapis.com/css?family=Roboto&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
					},
					"text-font-size": "12",
					"text-font-color": "#ffffff"
				}
			},
			"designId": 3,
			"theme": "white",
			"width": 266,
			"height": 67
		});
		if (_k != null) l.run();
	};
	_t.onload = _f;
	_t.onreadystatechange = function() {
		if (_t.readyState == "loaded") _f(1);
	};
	var _h = document.head || document.getElementsByTagName("head")[0];
	_h.appendChild(_t);
}).call(this);