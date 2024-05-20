# FILE

[//]: # (**Introduction**)

- [File](#file)
    - [Read](#read)
    - [Read JSON](#read-json)
    - [Write JSON](#write-json)
    - [Is File](#is-file)
    - [Copy](#copy)
    - [Exists](#exists)
    - [Create](#create)
    - [Directory name of file](#directory-name-of-file)
- [Directory](#directory)
    - [Is Dir](#is-dir)
    - [Copy](#copy)
    - [Exists](#exists)
    - [Delete](#delete)
    - [Create](#create)
    - [Create if not exists](#create-if-not-exists)
## Read
Read a file 
````bash
> easy-node-cli file:read path:package.json
````
----
## Read JSON
Read a json file

````bash
> easy-node-cli file:readJson src:package.json
````
----
## Write JSON
Write a file
````bash
> easy-node-cli file:writeJson path:package.json "data:{key:\"value\"}"
````
----
## Is File
Check weather a given path exists and is a file
````bash
> easy-node-cli file:isFile path:package.json
````

----
## Copy
Copies source to destination
````bash
> easy-node-cli file:copy src:package.json dst:../package.json
````
----
## Copy with specific keys
Copy a json file with specific keys
````bash
> easy-node-cli json/copy src:package.json dst:../package.json
````

copies a json file containing an object with name and version keys from the origin

----
## To JS
Convert a json file to a .js file that exports default the object containing the json file 
````bash
> easy-node-cli json/toJs src:package.json dst:package.js
````
for ts type use the following command
````bash
> easy-node-cli json/toTs src:package.json dst:package.js
````
----
## To JS with specific keys
Convert a json file to a .js file that exports default the object containing the json file with specific keys
````bash
> easy-node-cli json/toJs src:package.json dst:package.js key:name key:version
````
for ts type use the following command
````bash
> easy-node-cli json/toTs src:package.json dst:package.js key:name key:version
````

----