function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url) {
  this.http.open('GET', url, true);
  
  this.http.onload = function() {
    if(this.http.status === 200) {
      console.log(this.http.responseText);
    }
  }

  this.http.send();
}
// Make an HTTP POST Request

// Make an HTTP PUT Request

// Make an HTTP DELETE Request