---
live: true
title: 'Can I Learn to Code'
description: 'Answering the one of the more popular questions.'
author: 'TerrierDarts'
date: 2022-07-01
tags: ["Streaming", "C#", "Streamer.bot"]
image:
    url: '/blogThumbs/learn_to_code.png'
    alt: 'Post Thumbnail'
---

# Yes.

I mean thats the short answer and the longer answer is still yes, but there is more layers to learning how to code. So lets break it down.

## Picking a Starting Language

So picking a language to learn is the first step, it some-what goes without saying, it's like when learning how to speak a 2nd Language you need to know what you want to learn. I personally chose C#  for this and that was because I wanted to develop extensions for Streamer.bot but for you this will be different and your reasons will be different but the journey is exactly the same. 

## Oppertunity is the Key to Learning

You're not going to learn code just by reading docs, watching videos and listening to our favourite streamer talk about what they might be coding at the time. Yeah ideally it would sound good, but thats not how it works. The only way your going to learn is by getting your hands dirty and taking a more practical approach. For me this was Streamer.bot taking bits of code I had ending working seeing the result, this meant the more I edited the more I learned the better I became, I then was able to choose abd built extensions which allowed me to learn a skill, for example building a Coin Flip game allowed me to learn how randoms work. This will be different between the languages and between the skills but the lesson is still valid. 

I was once 

## Tips I wish I knew earlier

 - **Logging is your best friend** - Knowing what is happening or what value a variable has at each step in my code is an amazing way to learn. Following the logic throughout your whole code is how 90% of my problems get solved...
 - **Preplanning will save you headaches** - So when im starting a new project or a new script or what ever. I write out what i want to do in plain english first, many times a project will start like this. 
  ```cs
  //Pull in the user
  //Find out the Followage date
  //Work out total days
  //If more that a Year say - Something Funny
  //Else Just post Normal
  ```

  But then i go through each line and convert it into code so it will end up like,
  ```cs
  CPH.TryGetArgs("user",out string user);   //Pull in the user
  CPH.TryGetArgs("followDate", out DateTime followDate); //Find out the Followage date
  int totaldays = (DateTime.Now- followDate).TotalDays; //Work out total days
  if(totalDays < 365) //If more that a Year say - Something Funny
  {
    CPH.SendMessage("You've been here longer than a year it doesnt matter...");
  }
  else //Else Just post Normal
  {
    CPH.SendMessage($"{user} you followed on {followDate}");
  }
  ```
 - **Don't go big straight away** - looking back this seems obvious but its true, when I started learning to code the first thing I wanted to build was a death counter, but there was so much I didn't know that it became impossible and I got a little down trodden, 