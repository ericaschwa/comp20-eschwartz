Erica Schwartz
README
Lab: Messages
Comp 20 Fall 2015

As far as I know, all aspects of the work have been correctly implemented.

I did not collaborate with anyone on this assignment.

I spent approximately three hours on this assignment.

Answer to question: is it possible to request the data from a different origin
(e.g., http://messagehub.herokuapp.com/) or from your local machine
(from file:///) from using XMLHttpRequest?

It is not possible to request the data from a different origin
(e.g., http://messagehub.herokuapp.com/) using XMLHttpRequest. This is
because of the same-origin policy, under which "a web browser permits scripts
contained in a first web page to access data in a second web page, but only if
both web pages have the same origin."
(https://en.wikipedia.org/wiki/Same-origin_policy)

Similarly, file:// and http://localhost:8000 have different origins as well,
and so the local machine cannot successfully request the date due to the
same-origin policy.
(http://stackoverflow.com/questions/7683596/xmlhttprequest-for-local-files)

This policy is important because it protects the information in the page.
