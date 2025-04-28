---
live: true
title: 'Can I Learn to Code'
description: 'Answering the one of the more popular questions.'
author: 'CodeWithTD'
date: 2025-04-25
tags: ["Streaming", "C#", "Streamer.bot"]
image:
    url: '/blogThumbs/learn_to_code.png'
    alt: 'Post Thumbnail'
---
---
## Yes.

I mean, that’s the short answer — and the longer answer is still yes — but there are more layers to learning how to code. So let’s break it down.

---

### Picking a Starting Language

Choosing a language to learn is the first step — it kind of goes without saying. It’s like learning to speak a second language: you need to know *which* one you want to learn. I personally chose C# because I wanted to develop extensions for Streamer.bot. But for you, it might be something entirely different — and that’s totally fine. Your reasons may vary, but the journey is exactly the same.

---

### Opportunity is the Key to Learning

You're not going to learn to code just by reading documentation, watching videos, or listening to your favourite streamer talk about what they’re building. That might sound ideal, but it’s not how it works.

The only real way to learn is by getting your hands dirty and taking a practical approach. For me, that was Streamer.bot — taking snippets of code, tweaking them, and seeing what happened. The more I edited, the more I learned, and the better I became. Eventually, I started building my own extensions, which helped me develop new skills. For example, building a coin flip game taught me how random numbers work.

Your experience might differ based on the language and tools you use, but the core lesson stays the same: real learning happens when you *do*.

I was once someone who couldn’t code at all — and now I feel confident in achieving the goals I set for myself. I only got to this stage because I took advantage of the opportunities that came my way.

---

### Tips I Wish I Knew Earlier

- **Logging is your best friend** 
 Knowing what’s happening in your code — especially what values your variables hold at each step — is an amazing way to learn. Following the logic all the way through is how I solve 90% of my problems.

- **Pre-planning will save you headaches** 
 Whenever I start a new project, script, or idea, I write it out in plain English first. A lot of my projects begin something like this:
 ```cs
 //Pull in the user
 //Find out the followage date
 //Work out total days
 //If more than a year, say something funny
 //Else just post normally
 ```
 Then, I go line by line and turn it into code:
 ```cs
 CPH.TryGetArgs("user", out string user); // Pull in the user
 CPH.TryGetArgs("followDate", out DateTime followDate); // Find the followage date
 int totalDays = (DateTime.Now - followDate).Days; // Work out total days
 if (totalDays >= 365) // If more than a year, say something funny
 {
 CPH.SendMessage("You've been here longer than a year — it doesn't matter...");
 }
 else // Else just post normally
 {
 CPH.SendMessage($"{user}, you followed on {followDate}");
 }
 ```

- **Don't go big straight away** 
 Looking back, this seems obvious — but it’s true. When I started learning to code, the first thing I wanted to build was a death counter. But there was so much I didn’t understand that it quickly became overwhelming, and I started feeling discouraged.

- **Using AI is okay** 
 It can be a fantastic learning tool — as long as you use it *correctly*. Don’t rely on it to do all the thinking, but use it to guide, explain, and enhance your understanding.

- **Use proper naming schemes** 
 Good variable and function names make your code much easier to read and debug. It also helps when you want to share your code — clear names make the logic easier to follow for everyone, including future you.

---

### Final Thoughts

You can always learn to code — just don’t expect to start by writing massive, impressive scripts overnight. It’s a learning process, so enjoy the journey. It *will* be tough at times, but when you finally have something you’re proud of, you’ll know the struggle was worth it.

Take pride in the small victories — because even the small ones are still victories.