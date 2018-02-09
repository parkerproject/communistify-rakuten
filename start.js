var data = new FormData();
data.append("ajax", "1");
data.append("pn", "p4");
data.append("htd", "");
data.append("htv", "l");

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://trends.google.com/trends/hottrends/hotItems");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.send(data);
