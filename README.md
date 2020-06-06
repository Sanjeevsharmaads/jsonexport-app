# JsonExport

# New Features!

  - Export the json data in (csv, xls,pdf) format.

### Tech
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]


### Required packages
* [Json-export] - 

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Request Payload
```
{
    "exportType" : "pdf",
	"Orders": [
		{
	  		"orderProperty1" : "value1",
	  		"orderProperty2" : "value2",
	  		"orderProperty3" : "value2"
		},
		{
	  		"orderProperty1" : "value1",
	  		"orderProperty2" : "value2",
	  		"orderProperty3" : "value2"
		}
	]
}```

Install the dependencies and devDependencies and start the server.

```
$ npm install
$ node index.js
```
