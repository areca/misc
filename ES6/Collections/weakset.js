/*
WeakSet
WeakSets are Set Collections whose elements can be garbage collected when objects they are referencing are no longer needed.
WeakSets do not allow for iteration.
Their uses cases are rather limited (for now, at least).
Most early adopters say that WeakSets can be used to tag objects without mutating them.
ES6-Features.org has an example of adding and deleting elements from a WeakSet in order to keep track of whether or not the objects have been marked:

See https://codequs.com/p/r1jic88Oq/using-the-new-es6-collections/
*/
