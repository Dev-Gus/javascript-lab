DAY 1: Promises Deep Dive
Morning (2-3 hours):

Re-read about Promises (pick ONE source):

javascript.info/promise-basics (best explanation)
MDN Promises guide
Watch ONE good video (Web Dev Simplified or similar - 15-20min max)


Focus on understanding:

What problem do Promises solve? (callback hell)
The 3 states (pending, fulfilled, rejected)
How .then() and .catch() work
Why chaining is useful



Afternoon (2-3 hours):

Practice exercises (ask ChatGPT):

   Give me 5 Promise exercises, progressively harder:
   1. Create a simple promise
   2. Chain 2 promises
   3. Handle errors with .catch()
   4. Use Promise.all()
   5. Real-world scenario (simulate API call)
   
   Give me JUST the exercises, no solutions.

Solve them yourself

Struggle for 30+ min on each
Only ask for hints if completely stuck
Don't look at solutions until you've tried hard


Review with ChatGPT

Show your code
Get feedback
Understand your mistakes



End of day:

Can you explain Promises to yourself out loud?
If yes → move on
If no → repeat tomorrow with different exercises


DAY 2: async/await Mastery
Morning (2-3 hours):

Re-learn async/await

javascript.info/async-await
Understanding: async makes a function return a Promise
Understanding: await pauses execution until Promise resolves
Understanding: try/catch for error handling


Compare with Promises

Take your Day 1 Promise exercises
Rewrite them using async/await
See the difference in syntax
Which is clearer?



Afternoon (2-3 hours):

New exercises (ask ChatGPT):

   Give me 5 async/await exercises:
   1. Convert promise chain to async/await
   2. Handle errors with try/catch
   3. Multiple async operations in sequence
   4. Multiple async operations in parallel
   5. Real-world data fetching scenario
   
   No solutions, just exercises.

Code them yourself

Focus on proper error handling
Practice try/catch patterns
Make mistakes, learn from them



End of day test:

Open a blank file
Write an async function that fetches data and handles errors
From memory, no looking stuff up
If you can do it → you got it


DAY 3: Fetch API Practice
Morning (2-3 hours):

Re-study Fetch API

MDN Fetch API guide
Understanding: fetch() returns a Promise
Understanding: .json() also returns a Promise
Understanding: HTTP status codes (200, 404, 500)
Understanding: How to handle network errors


Read about:

Request/response objects
Headers
Different HTTP methods (GET mainly for now)



Afternoon (3-4 hours):

Build 3 small fetch projects from scratch:
Project 1: Random User Generator (1 hour)

Use: https://randomuser.me/api/
Fetch one random user
Display: name, photo, email
Add a "Get New User" button
Handle loading state
Handle errors

Project 2: Dad Jokes App (1 hour)

Use: https://icanhazdadjoke.com/
Fetch random joke
Display it
"New Joke" button
Loading state
Error handling

Project 3: Pokémon Search (1.5 hours)

Use: https://pokeapi.co/
Input: Pokémon name
Fetch that Pokémon
Display: image, name, type, stats
Handle "Pokémon not found"
Loading states



These are SMALL projects. No fancy UI needed. Just functionality.
Purpose: Burn fetch patterns into your muscle memory by repetition.

DAY 4: ES6+ Features Review
Morning (2 hours):

Spread/Rest Operators

10 exercises using spread with arrays
10 exercises using spread with objects
5 exercises using rest parameters
Ask ChatGPT for these


Optional Chaining & Nullish Coalescing

10 exercises practicing ?.
10 exercises practicing ??
Focus on when to use them



Afternoon (2 hours):

ES6 Modules

Create a small project with multiple files
Practice import/export
Named exports vs default exports
Module scope


Mini project:

Build a calculator
Split into modules (math.js, ui.js, app.js)
Export/import properly
This drills module understanding




DAY 5: Rebuild Weather App (From Scratch)
Full day (6-8 hours):
Close your existing weather app. Don't look at it.
Build it again from ZERO:

No tutorials. No copy-paste. From memory.
Requirements:

Search for a city
Display current weather
Display 5-day forecast
Error handling (city not found, network error)
Loading states
Clean UI


Rules:

Use async/await (not .then())
Use optional chaining for API data
Handle all errors properly
Organize into modules if you want
Make it responsive


You WILL get stuck. That's the point.

First, struggle for 30+ minutes
Check docs (MDN, API docs)
Only then ask ChatGPT for hints


Compare with your original:

Is the new one cleaner?
Is the code better organized?
Do you understand it more?



If you can rebuild it without looking → you've learned it.

DAY 6-7: Rest, Review, Solidify
Day 6 (Light study):

Review any remaining confusing concepts
Do a few more exercises on weak areas
Read about concepts you struggled with
NO new projects, just understanding

Day 7 (Test Day):
Take the Week 2 quiz again (ask ChatGPT to give you a NEW quiz, not the same questions)
Goal: 80%+ correct
If you hit 80%+:
✅ You're ready for Week 3
If still below 80%:
⚠️ Identify the specific concept still confusing you
⚠️ Spend 1-2 more days ONLY on that concept
⚠️ Don't move forward until it clicks

Key Principles for This Recovery Week
1. Repetition > Perfection

Do the same type of exercise 10 times
Build similar projects 3 times
Repetition makes it click

2. Small Wins Build Confidence

Each small project that works = win
Each exercise you solve = win
Stack these wins

3. Struggle Is Required

If it's not hard, you're not learning
The struggle IS the learning process
Don't fear being stuck

4. Active Over Passive

CODE, don't just read
BUILD, don't just watch tutorials
EXPLAIN out loud to yourself

5. One Concept at a Time

Don't try to fix everything at once
Day 1: Just Promises
Day 2: Just async/await
Day 3: Just fetch
Sequential mastery


How to Know You're Ready
You're ready for Week 3 when you can:
✅ Explain what a Promise is without looking it up
✅ Write async/await code from memory
✅ Fetch data from an API and handle errors without googling
✅ Use optional chaining and spread operators naturally
✅ Build a simple fetch-based app in 1-2 hours without help
✅ Debug your own async code when it breaks
✅ Score 80%+ on the Week 2 quiz
If you can do these → you're solid.