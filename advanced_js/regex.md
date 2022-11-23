//-----------------------------------

### charecter

//g -> global
//i -> ignore case sensivity
//m -> multi lines

/h.t/ => hot,hat,hit
/9\.00/ -> 9.00 , \. is an escape charecter

\t -> tab , \n -> next line

### charechter set

[ae] -> any one of them , /gr[ea]at/ -> great or graat

[a-z],[A-Z],[0-9] , each square is one charecter within range

/see[^mn]/ -> any charecter except m or n

/2013[-/]10[-/]05 -> no need to use escape charecter within square paranthesis

\d -> digit, \w -> word charecter (inc \_) s -> space /virtue[^s]/ -> virtue w/o s

\D -> not digit, \W -> not word S -> not space

### repetition

/.+/ -> abc.... /apple+/ -> apples, apple pie ....
/._/ -> itself and any /apple_/ -> apple,apples,apple pie .....
/.?/ -> 0 or 1 /apples?/ -> apple pr apples

/\d{3}-\d{3}-\d{4}/ -> 423-564-6758

**?** : lazy expression => let it quit looking text when satisfied
/".+"/ -> "hello world" asdgfh " don't return this too" --> greedy
/"[.]+?"/ -> "hello world" -->lazy

### grouping and alternating

/(abc)+/ -> abc, abcabc
/(in)?dependent/ -> dependent,independent
/run(s)?/ -> run,runs

/w(ei|ie)rd/ -> weird, wierd
/(your|my)self/ , /[Dd(es)?]/ -> Do,do, Does, does
/(nothing|not|no)/ -> nothing must be first cz it is lazy

### anchors

/^apple.\*/ -> apple only in the beggining

/\w+@\x+\.[a-z]{3}/ -> someone@gmail.com-junk

/^\w+@\x+\.[a-z]{3}$/ -> someone@gmail.com

### capturing groups and backreferences

/(ab)-(ba):\2-\1/  -> ab-ba:ba-ab
/^(")\w+\1$/   -> "rhgfafngkl"
/^(.+) (.+)$/  ->\2 \1   -> opposite

/(:?like|pizza)/-> turn off automatic capturing

### lookaround assertions

/(?=\d{4}-\d{2})\d{4}/gm ===>  ?= only format line, capture d{4} 

/^green\s(?!frog)$/ ===> catch green aren't followed by frog

/(?<=base)ball/ ===> catch ball after base 
/(?<!base)ball/ ===> catch ball after not base 

/ (?<=["']>) .+ (?<=["']>) /   --->catch everything inside of quotes
/ (?<=<em>>) .+ (?=<\/em>) /   --->catch everything inside of <em></em>

