/* C page content. Registers itself with programming.html via window.LANG_CONTENT.c . Edit MODS below to change modules/lessons. */
(function(){
window.LANG_CONTENT=window.LANG_CONTENT||{};
var CSS=`
.cx summary{cursor:pointer;list-style:none}
.cx summary::-webkit-details-marker{display:none}
.cx [id]{scroll-margin-top:64px}
.cx button.on{border-color:var(--k);color:var(--k)}
.cx-prog{margin-bottom:12px}
.cx-pr{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
.cx-pr b{font-size:1.7rem;font-weight:600;color:var(--k);line-height:1.1}
.cx-pr span{color:var(--mute);font-size:.9rem}
.cx-bar{height:6px;border-radius:999px;background:var(--chip);margin:10px 0 12px;overflow:hidden}
.cx-bar i{display:block;height:100%;width:0;background:var(--k);border-radius:999px;transition:width .25s}
.cx-ctl{display:flex;flex-wrap:wrap;gap:8px}
.cx-nav{display:flex;gap:8px;overflow-x:auto;margin:0 0 6px;padding-bottom:4px}
.cx-nav button{white-space:nowrap;flex:none}
.cx-ph{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:18px 2px 8px;font-size:.84rem;color:var(--mute)}
.cx-ph[hidden],.cx-mod[hidden]{display:none}
.cx-ph b{color:var(--k);font-weight:600;font-family:'Fira Code',monospace;font-size:.7rem;letter-spacing:.06em;text-transform:uppercase}
.cx-ph em{font-style:normal;margin-left:auto;font-family:'Fira Code',monospace;font-size:.7rem}
.cx-mod,.cx-info{border:1px solid var(--line);border-left:3px solid var(--k);border-radius:12px;background:var(--card);margin-bottom:10px;padding:2px 12px;box-shadow:0 1px 2px rgba(16,24,40,.04)}
.cx-mod>summary,.cx-info>summary{display:flex;align-items:center;flex-wrap:wrap;gap:8px;padding:10px 0}
.cx-mod>summary::before,.cx-info>summary::before,.cx-l summary::before{content:'▸';color:var(--mute);width:1em;transition:transform .15s;flex:none;font-size:.85rem}
.cx details[open]>summary::before{transform:rotate(90deg)}
.cx-n{font-family:'Fira Code',monospace;font-size:.72rem;color:var(--k);border:1px solid var(--k);border-radius:6px;padding:0 6px}
.cx-t{font-weight:600;color:var(--k);flex:1 1 150px}
.cx-pill{font-family:'Fira Code',monospace;font-size:.7rem;color:var(--mute);border:1px solid var(--line);padding:1px 9px;border-radius:999px;white-space:nowrap}
.cx-pill.done{color:var(--k);border-color:var(--k)}
.cx-goal{font-size:.86rem;color:var(--mute);margin:0 0 6px 4px}
.cx-ls{margin:2px 0 6px 4px;padding-left:10px;border-left:1px solid var(--line)}
.cx-l{display:flex;gap:8px;align-items:flex-start}
.cx-l input{margin-top:9px;accent-color:var(--k);flex:none}
.cx-l details{flex:1;min-width:0}
.cx-l summary{display:flex;gap:6px;padding:3px 0;font-size:.92rem}
.cx-l input:checked+details>summary{color:var(--mute);text-decoration:line-through}
.cx-lb{margin:0 0 8px 1em;padding:4px 0 4px 12px;border-left:1px solid var(--line)}
.cx-lb p{margin:0 0 8px;font-size:.86rem;color:var(--mute)}
.cx-tp{display:flex;flex-wrap:wrap;gap:5px;align-items:center}
.cx-tp span{font-size:.72rem;border:1px dashed var(--line);border-radius:999px;padding:0 9px;color:var(--mute)}
.cx-tp small{font-size:.72rem;color:var(--mute)}
.cx-act{margin:8px 0 10px 4px}
.cx-in{font-size:.88rem;color:var(--mute);margin:0 0 10px}
.cx-grid{display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin:2px 0 12px}
.cx-box{border:1px solid var(--line);border-top:2px solid var(--k);border-radius:10px;padding:10px 12px;background:var(--bg)}
.cx-box b{display:block;font-size:.92rem;font-weight:600}
.cx-box small{font-family:'Fira Code',monospace;color:var(--k);font-size:.68rem}
.cx-box p{margin:4px 0 0;font-size:.84rem;color:var(--mute)}
.cx-box ul,.cx-rules{margin:6px 0 0 18px;padding:0;font-size:.84rem;color:var(--mute);display:grid;gap:4px}
.cx-rules{margin:2px 0 12px 18px;font-size:.88rem}
`;
var PH=[{n:'Programming Foundations',c:0,w:'Weeks 1–5'},{n:'Core C Programmer',c:2,w:'Weeks 6–12'},{n:'Memory & Systems Skills',c:3,w:'Weeks 13–19'},{n:'Advanced C & Problem Solving',c:1,w:'Weeks 20–30'}];
// [phase, number, title, weeks, learning goal, [[lesson title, topics], ...]]
var MODS=[
[0,0,'Computer & Programming Foundations','Week 1','Understand how a program runs.',[
['Computer fundamentals','Hardware vs software; CPU, RAM, storage; binary representation; operating systems; files, folders and paths.'],
['Programming fundamentals','Problem definition; algorithms; pseudocode; flowcharts; input, processing and output; decomposition.'],
['How C works','C language history; source code; preprocessing; compilation; assembly; linking; execution.'],
['Development environment','Install GCC or Clang; use an IDE or terminal; create a .c file; compile, run and fix errors. On Android, Termux: pkg install clang.'],
['First C program','main(); #include; printf(); return 0; comments; statement termination; program structure.']]],
[0,1,'C Syntax & Fundamentals','Weeks 2–3','Write simple, correct C programs.',[
['Tokens and syntax','Keywords; identifiers; literals; punctuators; operators; whitespace; syntax rules.'],
['Variables and constants','Declaration; initialization; assignment; naming rules; const; macros; scope introduction.'],
['Data types','char; signed and unsigned integers; short, int, long, long long; float; double; _Bool; void.'],
['Sizes and ranges','sizeof; limits.h; float.h; integer ranges; precision; implementation-dependent sizes.'],
['Input and output','printf; scanf; format specifiers; conversion specifications; escape sequences; getchar; putchar.'],
['Type conversion','Implicit conversion; explicit casts; integer division; floating-point arithmetic; narrowing conversions.'],
['Error categories','Syntax errors; warnings; linker errors; runtime errors; logical errors; reading compiler diagnostics.'],
['Practice set','Greeting; rectangle area; temperature conversion; average; simple interest; unit conversion; formatted output.']]],
[0,2,'Operators & Expression Evaluation','Week 4','Predict how C expressions evaluate.',[
['Arithmetic operators','+; -; *; /; %; integer division; remainder; unary plus and minus.'],
['Assignment operators','=; +=; -=; *=; /=; %=; assignment expressions.'],
['Comparison and logic','==; !=; <; >; <=; >=; &&; ||; !; short-circuit evaluation.'],
['Increment and decrement','Prefix and postfix; expression values; side effects; sequencing rules.'],
['Bitwise operators','&; |; ^; ~; <<; >>; bit masks; flags; binary representation.'],
['Conditional operator','condition ? expression1 : expression2; nested conditional expressions.'],
['Precedence and associativity','Operator precedence tables; parentheses; evaluation order vs precedence; safe expressions.'],
['Practice set','Expression tracing; swapping values; parity; bit tests; conditional maximum; conversion exercises.']]],
[0,3,'Decision Making','Week 5','Build programs with conditional logic.',[
['if statements','Conditions; true and false; braces; single and multiple statements.'],
['if-else','Two-way decisions; nested conditions; compound Boolean expressions.'],
['else-if ladder','Multiple ranges; ordered conditions; grading systems; boundary values.'],
['switch statements','case; default; break; integer-compatible controlling expressions; fall-through.'],
['Conditional problem solving','Leap year; largest of three; triangle validity; character classification; calculator.'],
['Testing decisions','Boundary testing; overlapping conditions; truth tables; simplifying Boolean logic.']]],
[1,4,'Loops & Iteration','Weeks 6–7','Repeat tasks efficiently and solve pattern and number problems.',[
['while loops','Loop condition; initialization; update; infinite loops; sentinel-controlled loops.'],
['do-while loops','Post-test loops; menu loops; input validation.'],
['for loops','Initialization; condition; update; loop variables; scope in for; multiple expressions.'],
['Nested loops','Rows and columns; multiplication tables; loop tracing; counting iterations.'],
['break and continue','Early exit; skipping iterations; use in nested loops; avoiding misuse.'],
['goto and labels','Syntax; why it is discouraged; cleanup-style use; readability.'],
['Number problems','Digit sum; reverse; palindrome; Armstrong; factorial; Fibonacci; GCD.'],
['Prime and series','Prime testing; factors; sum of series; sequence generation.'],
['Pattern printing','Triangles; pyramids; diamonds; number and character patterns.'],
['Practice set and tracing','Loop dry runs; off-by-one errors; menu-driven loop; mini project: number guessing game.']]],
[1,5,'Arrays & Matrices','Weeks 8–9','Store, search and process collections of data.',[
['Array basics','Declaration; initialization; zero-based indexing; memory layout.'],
['Input and traversal','Reading arrays; printing; loops over arrays; sizeof(arr)/sizeof(arr[0]).'],
['Common operations','Sum; average; minimum and maximum; counting; reversing; copying.'],
['Searching','Linear search; binary search; sorted-array requirement.'],
['Sorting basics','Bubble; selection; insertion; swap logic; stability introduction.'],
['Insertion and deletion','Shifting elements; position-based updates; bounds checks.'],
['Two-dimensional arrays','Declaration; row-major layout; traversal; input and output.'],
['Matrix operations','Addition; multiplication; transpose; diagonals; row and column sums.'],
['Arrays and bounds','Out-of-bounds access; undefined behavior; variable-length arrays (optional); safe sizing.'],
['Practice set','Frequency count; second largest; rotate array; matrix problems; student marks mini project.']]],
[1,6,'Strings & Character Processing','Week 10','Process text safely using character arrays and library functions.',[
['Character basics','char; ASCII; character arithmetic; escape characters.'],
['C strings','Null terminator; string literals; char arrays; initialization.'],
['String input and output','scanf with %s; fgets; why gets was removed; puts; buffer size; newline handling.'],
['ctype.h','isalpha; isdigit; isspace; toupper; tolower.'],
['string.h basics','strlen; strcpy; strcat; strcmp; strncpy; strncat.'],
['Manual string functions','Write your own length, copy, compare and reverse functions.'],
['String problems','Palindrome; vowel count; word count; case conversion; anagram check.'],
['Arrays of strings','2D char arrays; sorting names; searching text.'],
['String safety','Buffer overflow; truncation; snprintf; safe copy habits; practice set.']]],
[1,7,'Functions & Program Design','Weeks 11–12','Break programs into reusable functions and apply recursion.',[
['Function basics','Definition; call; return type; parameters; void functions.'],
['Prototypes and declarations','Declaration vs definition; headers; forward declarations; implicit declaration pitfalls.'],
['Parameter passing','Pass by value; arguments vs parameters; array parameters; why a swap fails by value.'],
['Scope and lifetime','Local; global; block scope; static variables; storage duration.'],
['Storage classes','auto; register; static; extern; linkage introduction.'],
['Recursion basics','Base case; recursive case; call stack; factorial; Fibonacci; power.'],
['Recursion practice','Sum of digits; GCD; binary search; Tower of Hanoi; recursion vs iteration.'],
['Modular design','Splitting problems; single-purpose functions; naming; reuse; header and source split introduction.'],
['Function design and testing','Preconditions and postconditions; helper functions; sample-input tests; assert introduction.'],
['Menu-driven project','Calculator or bank menu; functions; input validation; Milestone 2 project.']]],
[2,8,'Pointers & Memory Fundamentals','Weeks 13–14','Understand memory addresses and use pointers confidently.',[
['Memory model','Addresses; stack and heap overview; bytes; variables in memory.'],
['Pointer basics','Declaration; address-of and dereference; initialization; NULL; pointer types.'],
['Pointer arithmetic','Increment; pointer difference; scaling by type; valid ranges.'],
['Pointers and arrays','Array decay; a[i] vs *(a+i); passing arrays to functions.'],
['Pointers and functions','Pass by pointer; swap; returning pointers; dangling pointers.'],
['Pointers and strings','char *; string literals vs arrays; traversing strings with pointers.'],
['const and pointers','const int *; int *const; const correctness.'],
['Pointer to pointer','Double pointers; arrays of pointers; argv; 2D arrays and pointers.'],
['Function pointers','Declaration; callbacks; arrays of function pointers; qsort comparator.'],
['Pointer pitfalls','Uninitialized, dangling and wild pointers; null dereference; debugging pointers; practice set.']]],
[2,9,'Structures, Unions & Enumerations','Week 15','Model real-world records with user-defined types.',[
['Structure basics','Declaration; members; dot operator; initialization.'],
['Arrays of structures','Student records; searching and sorting records.'],
['Pointers to structures','Arrow operator; passing structs by pointer or value; returning structs.'],
['Nested structures','Struct inside struct; composition; arrays inside structs.'],
['typedef','Type aliases; struct typedef; readability.'],
['Unions','Shared memory; size; tagged unions; use cases.'],
['Enumerations','enum; named constants; switch with enum; bit flags.'],
['Memory layout and records','Padding; alignment; sizeof structs; bit-fields (optional); record-management project.']]],
[2,10,'Dynamic Memory Management','Week 16','Allocate, resize and release memory safely at run time.',[
['Stack vs heap','Lifetime; size limits; when to use dynamic allocation.'],
['malloc','Allocation; sizeof; checking for NULL; uninitialized memory.'],
['calloc and realloc','Zero-initialization; resizing; safe realloc pattern.'],
['free','Releasing memory; double free; use-after-free; setting pointers to NULL.'],
['Dynamic arrays','Growable arrays; capacity vs size; amortized growth.'],
['Dynamic 2D arrays','Array of pointers; contiguous block; freeing correctly.'],
['Memory errors','Leaks; dangling pointers; buffer overflows; heap corruption.'],
['Memory tools','Valgrind; AddressSanitizer; -fsanitize; practice set.']]],
[2,11,'File Handling & Data Persistence','Week 17','Read and write files and keep data between runs.',[
['Streams and files','stdin; stdout; stderr; FILE *; text vs binary.'],
['Opening and closing','fopen modes; fclose; error checking; perror.'],
['Text file I/O','fprintf; fscanf; fgets; fputs; reading line by line.'],
['Character I/O','fgetc; fputc; EOF; feof pitfalls.'],
['Binary file I/O','fread; fwrite; structs in files; portability caveats.'],
['File positioning','fseek; ftell; rewind; random access.'],
['Record management','Create, read, update and delete records; temp-file approach.'],
['Persistence project','File-backed student or inventory system; error handling; Milestone 3 project.']]],
[2,12,'Preprocessor, Headers & Compilation','Week 18','Understand the build pipeline and organize multi-file programs.',[
['Compilation pipeline','Preprocess; compile; assemble; link; gcc -E, -S, -c.'],
['Preprocessor directives','#include; #define; #undef; object-like macros.'],
['Function-like macros','Parameters; parentheses; side effects; macro pitfalls.'],
['Conditional compilation','#if; #ifdef; #ifndef; platform-specific code; debug flags.'],
['Header files','Declarations; include guards; #pragma once; what belongs in headers.'],
['Multi-file programs','Splitting source files; extern; static linkage; shared headers.'],
['Building with Make','Makefile basics; targets; dependencies; incremental builds.'],
['Libraries and linking','Static vs shared libraries; -l; -L; linker errors; ar basics.']]],
[2,13,'Standard Library & Safer C','Week 19','Use the standard library effectively and write defensive code.',[
['stdio.h','Formatted I/O; snprintf; fflush; return values.'],
['stdlib.h','atoi vs strtol; rand and srand; exit; qsort; bsearch; abs.'],
['string.h in depth','memcpy; memmove; memset; memcmp; strtok; strstr.'],
['math.h','pow; sqrt; floor; ceil; fabs; trigonometry; linking with -lm.'],
['time.h','time; clock; difftime; formatting dates; timing code.'],
['errno and error handling','errno; strerror; return codes; defensive checks.'],
['Undefined behavior','Signed overflow; invalid pointers; uninitialized reads; strict aliasing introduction.'],
['Safe coding','Input validation; bounds checking; compiler warnings; -Wall -Wextra; static analysis; Milestone 3 review.']]],
[3,14,'Data Structures in C','Weeks 20–22','Implement core data structures from scratch.',[
['Abstract data types','ADT idea; interface vs implementation; choosing data structures; Big O preview (full treatment in Module 15).'],
['Singly linked list','Nodes; insert; delete; traverse; search; memory management.'],
['Doubly and circular lists','prev and next pointers; sentinel nodes; circular traversal.'],
['Stack','Array and list implementations; push and pop; balanced parentheses; expression evaluation.'],
['Queue','Linear and circular queue; deque; list-based queue; simulation.'],
['Hash tables','Hash functions; collisions; chaining; open addressing introduction.'],
['Binary trees','Terminology; traversals; recursion; building trees.'],
['Binary search trees','Insert; search; delete; height; traversals.'],
['Heaps and priority queues','Min and max heap; heapify; priority queue operations.'],
['Graph representation','Adjacency matrix; adjacency list; BFS and DFS in C.'],
['Balanced trees (introduction)','AVL idea; rotations; why balance matters; tries (optional).'],
['Data structure project','Contact book or task scheduler with a chosen structure; testing and memory checks.']]],
[3,15,'Algorithms & Problem Solving','Week 23','Analyze and design algorithms with confidence.',[
['Problem-solving process','Understand; plan; implement; test; reflect; edge cases.'],
['Complexity and Big O','Time and space; best, worst and average case; common growth rates.'],
['Searching algorithms','Linear; binary; interpolation overview; complexity.'],
['Elementary sorting','Bubble; selection; insertion; comparison and complexity.'],
['Efficient sorting','Merge sort; quick sort; heap sort; counting sort introduction; qsort.'],
['Divide and conquer','Recurrence idea; merge sort; binary search; fast exponentiation.'],
['Greedy algorithms','Activity selection; coin change; when greedy works.'],
['Dynamic programming','Overlapping subproblems; memoization; tabulation; knapsack; LCS.'],
['Backtracking','N-Queens; permutations; subsets; pruning.'],
['Graph algorithms','BFS; DFS; Dijkstra; minimum spanning trees (Kruskal, Prim); practice set.']]],
[3,16,'Debugging, Testing & Developer Tools','Week 24','Find bugs systematically and test your code.',[
['Debugging mindset','Reproduce; isolate; hypothesize; fix; verify; rubber-duck debugging.'],
['Reading compiler messages','Errors vs warnings; -Wall -Wextra -Wpedantic; -std=c17.'],
['printf debugging and assert','Trace output; assert.h; NDEBUG; logging macros.'],
['GDB basics','Breakpoints; step; next; watch; backtrace; inspecting variables.'],
['Memory debugging','Valgrind; AddressSanitizer; UBSan; interpreting reports.'],
['Unit testing','Test cases; edge cases; a tiny test harness; assert-based tests; Unity or CMocka introduction.'],
['Code quality','Naming; formatting; clang-format; comments; static analysis (cppcheck, clang-tidy).'],
['Git and workflow','init; commit; branch; .gitignore; README; documenting a C project.']]],
[3,17,'Advanced C & Final Projects','Weeks 25–30','Apply everything in capstone-level projects.',[
['Bit manipulation','Masks; set, clear and toggle; bit counting; packed flags.'],
['Advanced pointers and generic code','void *; opaque pointers; function pointer tables; callbacks; pointer to array.'],
['Command-line programs','argc and argv; option parsing; getopt; exit codes.'],
['Modern C (C11 and C17)','stdint.h; stdbool.h; _Static_assert; _Generic; designated initializers; compound literals.'],
['Portability and platform topics','POSIX vs Windows; endianness; fixed-width types; optional platform-dependent features.'],
['Performance basics','Profiling; gprof or perf; cache awareness; optimization flags.'],
['Project planning and design','Requirements; modules; API design; Makefile; test plan.'],
['Final project I: systems utility','Mini shell, file tool or text processor; multi-file build; error handling.'],
['Final project II: data application','Library, inventory or text-based database using structs, files and data structures.'],
['Review, documentation and portfolio','README; tests; cleanup; release; Milestone 4 review.']]]
];
var DAYS=[['Day 1','Concepts and notes','Read the topic, learn the syntax and write short notes in your own words.'],['Day 2','Code examples','Type and run each example yourself. Change the inputs and predict the output.'],['Day 3','Basic problems','Solve 5–10 beginner exercises without copying the solution.'],['Day 4','Intermediate problems','Practise tracing, edge cases and problems combining earlier topics.'],['Day 5','Mini project','Build a small program that uses the concepts learned that week.'],['Day 6','Revision and assessment','Take a short quiz, fix mistakes and review difficult topics.']];
var MILE=[[0,'After Week 5',['Write programs using variables, input/output, operators and conditions.','Explain basic expressions and trace conditional branches.','Pass a basic syntax and logic quiz.']],[1,'After Week 12',['Solve problems with loops, arrays, strings and functions.','Explain recursion and modular program design.','Build a menu-driven application independently.']],[2,'After Week 19',['Explain pointers, structures, allocation and file handling.','Recognize common memory and input-handling errors.','Build a file-backed record management program.']],[3,'After Week 30',['Implement major data structures.','Analyze algorithm complexity.','Debug, test and document a multi-file C project.']]];
var TPL=[['Concept explanation','What the concept is, why it matters and where it is used, with a simple explanation in Bengali and English.'],['Syntax and examples','The syntax, a basic code example, the expected output and a line-by-line explanation.'],['Dry run and common mistakes','Variable values step by step, common compiler errors, edge cases and output-tracing exercises.'],['Practice problems','Easy, medium and challenging questions, with hints and solutions revealed separately.'],['Quiz and completion','MCQs, predict-the-output questions and a coding task. Mark the lesson complete and move to the next one.']];
var RULES=['Pointers come before dynamic memory and linked lists.','Structures come before structure-based record management projects.','Recursion comes before recursive tree algorithms.','Big O is introduced before comparing advanced sorting and data-structure performance.','Compiler warnings, debugging and safe coding are introduced early, then revisited in advanced modules.','Core C language topics are kept separate from data structures and general algorithm concepts.','Target standard: C17 (compile with gcc -std=c17 -Wall -Wextra -Wpedantic). Optional and platform-dependent topics are labelled clearly.'];

var S={},KEY='c-roadmap-v1',TOTAL=0,flt='all',NL=String.fromCharCode(10);
try{S=JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){S={}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
function E(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function pad(n){return (n<10?'0':'')+n}
function lid(mi,i){return 'l'+mi+'_'+i}
MODS.forEach(function(m){TOTAL+=m[5].length});
function info(id,t,pill,inner){return `<details class='cx-info' id='${id}' style='--k:var(--c2)'><summary><span class='cx-t'>${t}</span><span class='cx-pill'>${pill}</span></summary>${inner}</details>`}

function render(){
 flt='all';
 if(!document.getElementById('cx-css')){var st=document.createElement('style');st.id='cx-css';st.textContent=CSS;document.head.appendChild(st)}
 var h=`<div class='cx'>`;
 h+=`<div class='card cx-prog' style='--k:var(--c2)'><div class='cx-pr'><b id='cx-pct'>0%</b><span id='cx-txt'></span></div><div class='cx-bar'><i id='cx-bar'></i></div><div class='cx-ctl'><button data-f='all' class='on'>All modules</button><button data-f='rem'>Remaining</button><button id='cx-ex'>Expand all</button><button id='cx-co'>Collapse all</button><button id='cx-cp'>Copy curriculum</button></div></div>`;
 h+=`<div class='cx-nav'>`+[['cx-mods','Curriculum'],['cx-sch','Weekly schedule'],['cx-mil','Milestones'],['cx-tpl','Lesson template'],['cx-rul','Rules']].map(function(x){return `<button data-go='${x[0]}'>${x[1]}</button>`}).join('')+`</div>`;
 h+=`<div id='cx-mods'>`;
 var last=-1;
 MODS.forEach(function(m,mi){
  if(m[0]!==last){last=m[0];h+=`<div class='cx-ph' style='--k:var(--c${PH[last].c})'><b>Milestone ${last+1}</b><span>${E(PH[last].n)}</span><em>${PH[last].w}</em></div>`}
  var ls=m[5].map(function(l,i){var id=lid(mi,i);
   return `<div class='cx-l'><input type='checkbox' id='${id}' aria-label='${E(l[0])}'${S[id]?' checked':''}><details><summary>${pad(i+1)}. ${E(l[0])}</summary><div class='cx-lb'><p>${E(l[1])}</p><div class='cx-tp'><span>1 Concept</span><span>2 Syntax &amp; examples</span><span>3 Dry run &amp; mistakes</span><span>4 Practice</span><span>5 Quiz</span><small>Lesson content coming soon</small></div></div></details></div>`}).join('');
  h+=`<details class='cx-mod' id='cm${mi}' style='--k:var(--c${PH[m[0]].c})'${mi===0?' open':''}><summary><span class='cx-n'>${pad(m[1])}</span><span class='cx-t'>${E(m[2])}</span><span class='cx-pill'>${m[3]}</span><span class='cx-pill' data-p='${mi}'>0/${m[5].length}</span></summary><p class='cx-goal'>Learning goal: ${E(m[4])}</p><div class='cx-ls'>${ls}</div><div class='cx-act'><button data-all='${mi}'>Mark all lessons complete</button></div></details>`});
 h+=`</div>`;
 h+=info('cx-sch','Weekly study schedule','6 days / week',`<p class='cx-in'>Use the same weekly routine across the roadmap. The number of hours is a suggested target, not a strict requirement.</p><div class='cx-grid'>`+DAYS.map(function(d){return `<div class='cx-box'><small>${d[0]}</small><b>${E(d[1])}</b><p>${E(d[2])}</p></div>`}).join('')+`</div><p class='cx-in'>Suggested workload: 1.5–2 hours per day, six days per week.</p>`);
 h+=info('cx-mil','Milestones and completion criteria','4 checkpoints',`<p class='cx-in'>Advance based on understanding and practice, not just time spent.</p><div class='cx-grid'>`+MILE.map(function(x,i){return `<div class='cx-box' style='--k:var(--c${PH[x[0]].c})'><small>${x[1]}</small><b>Milestone ${i+1} — ${E(PH[x[0]].n)}</b><ul>`+x[2].map(function(s){return `<li>${E(s)}</li>`}).join('')+`</ul></div>`}).join('')+`</div>`);
 h+=info('cx-tpl','Lesson page template','5 parts',`<p class='cx-in'>Every lesson opens into the same learning template.</p><div class='cx-grid'>`+TPL.map(function(t,i){return `<div class='cx-box'><small>Step ${i+1}</small><b>${E(t[0])}</b><p>${E(t[1])}</p></div>`}).join('')+`</div>`);
 h+=info('cx-rul','Curriculum rules','7 rules',`<ul class='cx-rules'>`+RULES.map(function(r){return `<li>${E(r)}</li>`}).join('')+`</ul>`);
 return h+`</div>`}

function upd(w){
 var done=0;
 MODS.forEach(function(m,mi){var d=0,n=m[5].length,i;for(i=0;i<n;i++)if(S[lid(mi,i)])d++;done+=d;
  var full=d===n,p=w.querySelector(`[data-p='${mi}']`),b=w.querySelector(`[data-all='${mi}']`),el=w.querySelector('#cm'+mi);
  p.textContent=d+'/'+n;p.classList.toggle('done',full);b.textContent=full?'Mark all incomplete':'Mark all lessons complete';el.hidden=(flt==='rem'&&full)});
 w.querySelectorAll('.cx-ph').forEach(function(ph){var n=ph.nextElementSibling,any=false;while(n&&!n.classList.contains('cx-ph')){if(n.classList.contains('cx-mod')&&!n.hidden)any=true;n=n.nextElementSibling}ph.hidden=!any});
 w.querySelector('#cx-pct').textContent=Math.round(done/TOTAL*100)+'%';
 w.querySelector('#cx-txt').textContent=done+' of '+TOTAL+' lessons complete';
 w.querySelector('#cx-bar').style.width=(done/TOTAL*100)+'%'}

function copy(btn){
 var t='C PROGRAMMING ROADMAP'+NL;
 MODS.forEach(function(m){t+=NL+pad(m[1])+'. '+m[2]+' ('+m[3]+')'+NL+'Goal: '+m[4]+NL;m[5].forEach(function(l,i){t+=pad(i+1)+'. '+l[0]+' - '+l[1]+NL})});
 var ok=function(){var o=btn.textContent;btn.textContent='Copied ✓';setTimeout(function(){btn.textContent=o},1500)};
 try{navigator.clipboard.writeText(t).then(ok,function(){})}catch(e){}}

function init(root){
 var w=root.querySelector('.cx');if(!w)return;
 w.addEventListener('change',function(e){var t=e.target;if(t.type==='checkbox'){S[t.id]=t.checked;save();upd(w)}});
 w.addEventListener('click',function(e){var t=e.target.closest?e.target.closest('button'):null;if(!t)return;
  if(t.hasAttribute('data-f')){flt=t.getAttribute('data-f');w.querySelectorAll('[data-f]').forEach(function(b){b.classList.toggle('on',b===t)});upd(w)}
  else if(t.hasAttribute('data-all')){var mi=+t.getAttribute('data-all'),n=MODS[mi][5].length,full=true,i;for(i=0;i<n;i++)if(!S[lid(mi,i)])full=false;
   for(i=0;i<n;i++){S[lid(mi,i)]=!full;var c=document.getElementById(lid(mi,i));if(c)c.checked=!full}save();upd(w)}
  else if(t.hasAttribute('data-go')){var el=document.getElementById(t.getAttribute('data-go'));if(el){if(el.tagName==='DETAILS')el.open=true;el.scrollIntoView({behavior:'smooth',block:'start'})}}
  else if(t.id==='cx-ex'){w.querySelectorAll('.cx-mod').forEach(function(d){d.open=true})}
  else if(t.id==='cx-co'){w.querySelectorAll('.cx-mod').forEach(function(d){d.open=false})}
  else if(t.id==='cx-cp'){copy(t)}});
 upd(w)}

window.LANG_CONTENT.c={ov:'প্রথম printf() থেকে সম্পূর্ণ C প্রজেক্ট পর্যন্ত ধাপে ধাপে রোডম্যাপ। ১৮ মডিউল · ১৫৬ পাঠ · ৩০ সপ্তাহ · দিনে ১.৫–২ ঘণ্টা, সপ্তাহে ৬ দিন।',render:render,init:init};
})();
