1) What is the difference between null and undefined?
   যখন কোনো একটি 'variable' declare করা হয় কিন্তু মান সেট করা থাকে না অথবা খালি থাকে তখন সেটির result 'undefined' দেখাবে।
   এবং যখন কোনো 'variable' declare করার পর খালি মান সেট করা থাকে যেমন let a = null; তখন তার result 'null' দেখায়।
   
3) What is the use of the map() function in JavaScript? How is it different from forEach()?
   আমরা .map() function array-এর উপর use করি যাতে করে নতুন একটি array তৈরি করা যায় এবং array-এর ভিতরে loop চালিয়ে existing মানগুলোকে modify করে নতুন মান পাওয়া যায়।
   এটি original array পরিবর্তন করে না কিন্তু নতুন একটি modified/unmodified array return করে।
   forEach()-এর সাথে এটির পার্থক্য হলো forEach() array-এর ভিতরে loop চালিয়ে existing মানগুলোকে modify করে না। কোনো array-ও return করে না।
   
5) What is the difference between == and ===?
   Loose Equality (==) শুধুমাত্র দু'পাশের ডাটা মিল আছে কি না তা চেক করে। অপরদিকে Strict equality (===) ডাটা এবং ডাটার ধরন দুটোই check করবে।
   Examle: 100 == '100' [result: true], 100 === '100' [result: false; Because one is number and another is string]
   
7) What is the significance of async/await in fetching API data?
   Async/await ব্যবহার করা হয় API call করার জন্য। এর মাধ্যমে API ডাটাগুলো সহজভাবে use এবং read করা যায়। 
   
9) Explain the concept of Scope in JavaScript (Global, Function, Block).
   Scope হচ্ছে কোনো একটি 'variable' declare করার পর কতুদূর পর্যন্ত বা কোথায় ব্যাবহার করতে পারব বা কতটুকু access করতে পারব।
   1. Globalal Scope হলো যে 'variable' function-র বাইরে ডিক্লেয়ার করা হয়, এটি সব জায়গায় access করা যায়।
   2. Function Scope হলো যা কোনো একটি function-র ভিতরে declare করা হয়, এটি সেই function এর ভিতরেই সীমাবদ্ধ বা accessible.
   3. Block Scope হলো যা let/const এর দ্বারা declare করা হয় 'curly braces{}' এর ভিতরে, এর বাইরে উক্ত 'variable' গুলোকে access করা যায় না।
