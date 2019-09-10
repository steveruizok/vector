---
title: Ellipse Element
id: ellipse-element
script: /examples/elements/ellipse-element.js
description: This interactive demonstrates the ellipse element.
input: undefined
tags: [elements]
weight: undefined
draft: undefined
---

{{< highlight javascript >}}
/**
* @title Ellipse Element
* @description This interactive demonstrates the ellipse element.
* @tags [elements]
*/
import Interactive from '../../Interactive.js';
import { getScriptName } from '../../Util.js';
let interactive = new Interactive(getScriptName());
interactive.width = 768;
interactive.height = 150;
interactive.root.style.border = "1px solid grey";
let ellipse = interactive.ellipse(100, 75, 80, 40);
//# sourceMappingURL=ellipse-element.js.map
{{</ highlight >}}
