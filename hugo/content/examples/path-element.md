---
title: Path Element
id: path-element
script: /examples/elements/path-element.js
description: This interactive demonstrates the path element.
input: undefined
tags: [elements]
weight: undefined
draft: undefined
---

{{< highlight javascript >}}
/**
* @title Path Element
* @description This interactive demonstrates the path element.
* @tags [elements]
*/
import Interactive from '../../Interactive.js';
import { getScriptName } from '../../Util.js';
let interactive = new Interactive(getScriptName());
interactive.width = 768;
interactive.height = 150;
interactive.root.style.border = "1px solid grey";
let line = interactive.path("M 50 50 Q 100 150 150 50");
//# sourceMappingURL=path-element.js.map
{{</ highlight >}}
