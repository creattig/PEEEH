function genz(a) {
	var txtArray = a.split('\n');
	for (var i = 0; i < txtArray.length; i++) {
    var buri = Math.floor(Math.random() * txtArray.length);
	document.getElementById("url").value = "https://" + txtArray[buri] + '/' + ran();
	anim('url','green');
	}
}

function ran() {
	var text=""
	var possible="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	for(var i=0;i<40;i++)text+=possible.charAt(Math.floor(Math.random()*possible.length));return text
}

function anim(w,we) {
	$('#'+w+'').attr('style', 'background-color: '+we+';');
	setTimeout(function(){
		$('#'+w+'').attr('style', '');
		setTimeout(function(){
			$('#'+w+'').attr('style', 'background-color: '+we+';');
			setTimeout(function(){
				$('#'+w+'').attr('style', '');
			}, 50);
		}, 50);
	}, 50)
}


function copy(u,p) {
    var ddd = document.getElementById(''+p+'').value;
    if (ddd == "") {
        anim(''+p+'','red');
    } else {
        var textBox = u;
        textBox.select();
        document.execCommand("copy");
        anim(''+p+'','green');
        setTimeout(function(){
            document.getElementById(''+p+'').value = "";
        }, 100);
    }
}

 (function() {
    'use strict';
    document.body.addEventListener('click', copy, true);

    function copy(e) {
        var
            t = e.target,
            c = t.dataset.copytarget,
            inp = (c ? document.querySelector(c) : null);
        if (inp && inp.select) {
            inp.select();
            try {
                document.execCommand('copy');
                inp.blur();
                t.classList.add('copied');
                setTimeout(function() {
                    t.classList.remove('copied');
                }, 1500);
            } catch (err) {
                alert('please press Ctrl/Cmd+C to copy');
            }
        }
    }
})();

var ui = '';

function makeRequest() {
    var Url = document.getElementById("url").value;
    var request = gapi.client.urlshortener.url.insert({
        'resource': {
            'longUrl': Url
        }
    });
    request.execute(function(response) {
        if (response.id != null) {
            str = response.id;
            var res = encodeURIComponent(str);
            document.getElementById("keyword").value = response.id;
            var x = "https://web.facebook.com/l.php?u="
            var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
            var string_length = 21;
            var stg_length = 7;
            var makeRequest = '';
            var makestg = '';
            for (var i = 0; i < string_length; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                makeRequest += chars.substring(rnum, rnum + 1);
            }
            for (var i = 0; i < stg_length; i++) {
                var rnume = Math.floor(Math.random() * chars.length);
                makestg += chars.substring(rnume, rnume + 1);
            }
            document.randform.randomfield.value = x + res + "&h=" + makeRequest + '_' + makestg + "&s=1" + ui;
        } else {
            alert("Yo gaisok laaah.");
        }
    });
}

function load() {
    gapi.client.setApiKey('AIzaSyB5FBb_bc6TE2nXBkPCGaUxK8QoynMwk5w');
    gapi.client.load('urlshortener', 'v1', function() {
        document.getElementById("randomfield").value;
    });
}
document.getElementById('sot').onclick = function() {
    ce();
    makeRequest();
};
window.onload = load;
$(document).ready(function() {
    function bit_url(url) {
        var url = url;
        var username = "Akun coc";
        var accessToken = "be1aaacf476577d52b71c7b1f432ae3f71530d04";
        $.ajax({
            url: "https://api-ssl.bitly.com/v3/shorten",
            data: {
                longUrl: url,
                access_token: accessToken,
                login: username
            },
            dataType: "jsonp",
            success: function(v) {
                var x = "https://l.facebook.com/l.php?u=";
                var q = "https://p.facebook.com/l.php?u=";
                var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
                var bit_url = v.data.url;
                var res = encodeURIComponent(bit_url);
                var string_length = 25;
                var randomstring = '';
                for (var i = 0; i < string_length; i++) {
                    var rnum = Math.floor(Math.random() * chars.length);
                    randomstring += chars.substring(rnum, rnum + 1);
                }
                $("#keyword").val(bit_url);
                anim('keyword','green');
                $("#randomfield").val(x + res + '&h=' + randomstring + '&s=1');
                anim('randomfield','green');
            }
        });
    }
    $("#short").click(function() {
        var url = $("#url").val();
        var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        var urltest = urlRegex.test(url);
        if (urltest) {
            bit_url(url);
        } else {
            alert("Yo gaisok laaah.");
        }
    });
});

function cc() {
    document.getElementById("randomfield").value = ""
    document.getElementById("url").value = ""
    document.getElementById("keyword").value = ""
}

function ce() {
    document.getElementById("randomfield").value = ""
    document.getElementById("keyword").value = ""
}

function ce() {
	setTimeout("proses();", 0);
	setTimeout("short();", 1000);
}

function proses() {
    document.getElementById("randomfield").value = "Waiting.....";
    document.getElementById("keyword").value = "Waiting.....";
}

function anim(w,we) {
	$('#'+w+'').attr('style', 'background-color: '+we+';');
	setTimeout(function(){
		$('#'+w+'').attr('style', '');
		setTimeout(function(){
			$('#'+w+'').attr('style', 'background-color: '+we+';');
			setTimeout(function(){
				$('#'+w+'').attr('style', '');
			}, 50);
		}, 50);
	}, 50)
}


function copy(u,p) {
    var ddd = document.getElementById(''+p+'').value;
    if (ddd == "") {
        anim(''+p+'','red');
    } else {
        var textBox = u;
        textBox.select();
        document.execCommand("copy");
        anim(''+p+'','green');
        setTimeout(function(){
            document.getElementById(''+p+'').value = "";
        }, 100);
    }
}