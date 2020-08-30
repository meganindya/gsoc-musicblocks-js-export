# Music Blocks JavaScript Export

This is a description of my work on [Music Blocks JavaScript Export](https://summerofcode.withgoogle.com/projects/#5876019535282176) during Google Summer of Code 2020 with [Sugar Labs](https://github.com/sugarlabs/). This repository contains my original authored files, samples of my
work, and examples.

## Abstract

The aim of Music Blocks is to teach beginners how to program, using a
snap-together block-based instructions to create music. The purpose of my
project is to develop a framework to export any Music Blocks program to an
equivalent JavaScript code, and/or write Music Blocks programs using JavaScript,
either of which can run independently of the blocks.

## Tech Stack

I've used **JavaScript** upto the **ECMAScript 8 (2017)** specification widely
relying on *ES6* `classes`, `let`/`const`, `arrow functions`, `promises`, and
finally, `async`/`await` syntactical feature from *ES8*. In the implementation
of a new *Music Blocks* widget - *JavaScript Editor*, I required the use of
**HTML** and **CSS**, but I used the *DOM* manipulation features of JavaScript
to handle those.

In addition, for the actual code generation part of the project, I relied on a
library named **[Astring](https://github.com/davidbonnet/astring)**
(*MIT License*), which is a "*Tiny and fast JavaScript code generator from an ESTree-compliant AST*".
I generated *Abstact Syntax Trees* (*AST*s) based on the **ESTree ES2017**
specification, which I serialized to *ES8* JavaScript code using the library.

Finally, I relied on a library named **[CodeJar](https://github.com/antonmedv/codejar)**
(*MIT License*), which is "*an embeddable code editor for the browser*". I used
it to create a text editor inside my widget, and a styling library named
**[Highlight.js](https://github.com/highlightjs/highlight.js/)**
(*BSD-3-Clause License*) for syntax highlighting.
