var glob = require('glob'),
    fs = require('fs');

const dirTree = require("directory-tree");
const flatten = require('tree-flatten');
const jsonfile = require("jsonfile");
const tree = dirTree("../dist/examples", { exclude: [/\.js.map/, /\.d.ts/] });

const json = flatten(tree, 'children');
json.forEach(function(element){
  fs.readFile( element.path, 'utf8', (error, data) =>{
		let ignore = false;
    element.id = element.name.replace('.js', '');
    element.path = element.path.replace('../dist', '');
    if( data != undefined ) {
      element.script = data;
      let start = null;
      let str = '';

      element["main"] = data.includes("export default");

      for( let i = 0; i < data.length; i++ ) {
        if( data[i] === '@' ) {
          start = i;
        } else if( data[i] === `\n` && start != null ) {
          let type = str.substring(0, str.indexOf(' '));
          let contents = str.substring(str.indexOf(' ') + 1, str.length);
          element[type] = contents;
          str = '';
          start = null;
        } else if( start != null ) {
          str += data[i];
        }
      }
    }
    // console.log(element);
    const contents =
`---
# This front matter is auto generated by the examples.js script
title: ${element.title}
id: ${element.id}
script: ${element.path}
main: ${element.main}
ignore: ${element.ignore ? true : false}
description: ${element.description}
input: ${element.input}
tags: ${element.tags}
weight: ${element.weight}
draft: ${element.draft}
---

{{< highlight javascript >}}
${element.script}
{{</ highlight >}}

`;
    if( element.type === 'file') {
      fs.writeFile(`./content/examples/${element.id}.md`, contents, (error) => {
        if (error) throw error;
        // console.log(`write hugo/content/examples/${element.id}.md`);
        // console.log(element);
      });
    }
  });
});

jsonfile.writeFile('./data/examples.json', json, function (err) {
  if (err) console.error(err)
});
