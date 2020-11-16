# Chapter 6 — A First Set of Refactorings

## A First Set of Refactorings
I'm starting the catalog with a set of refactorings that I consider the most useful to learn first.

Probably the most common refactoring I do is extracting code into a function (Extract Function) or a variable (Extract Variable). Since refactoring is all about change, it's no surprise that I also frequently use the inverses of those two (Inline Function and Inline Variable).

Extraction is all about giving names, and I often need to change the names as I learn. Change Function Declaration changes names of functions; I also use that refactoring to add or remove a function's arguments. For variables, I use Rename Variable, which relies on Encapsulate Variable. When changing function arguments, I often find it useful to combine a common clump of arguments into a single object with Introduce Parameter Object.

Forming and naming functions are essential low-level refactorings—but, once created, it's necessary to group functions into higher-level modules. I use Combine Functions into Class to group functions, together with the data they operate on, into a class. Another path I take is to combine them into a transform (Combine Functions into Transform), which is particularly handy with read-only data. At a step further in scale, I can often form these modules into distinct processing phases using Split Phase.

