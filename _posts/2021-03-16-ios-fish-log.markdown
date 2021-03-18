---
layout: post
title:  "Using iOS Shortcuts to Log Fly Fishing Catches"
date:   2021-03-16 13:00:00 -0400
categories: development
---
One of the reasons I enjoy Software Engineering is that a lot of the work is about creating solutions to solve interesting problems. This tends to carry over into my everyday life, leading me to think up (sometimes absurd) solutions to problems I run into. The latest instance of this has to do with one of my favorite hobbies: fly fishing.

I recently rediscovered the iOS Shortcuts app, which allows you to create "scripts" that can be executed via Siri to kick off a bunch of different actions. Because I've been gearing up for the opening day of the fishing season, I immediately had an idea when I revisited this app: I could create a shortcut to easily log some data when I catch a fish.

The steps of the shortcut are:
1. Speak "What kind of fish did you catch"
2. Dictate text (say the type of fish)
3. Get current weather at current location
4. Get current location
5. Get file at /Shortcuts/catches.csv
    - If file does not exist, append the following line to the file at the same path in order to create the file and establish the CSV header.
    `timestamp,latitude,longitude,temperature,condition,fish`
6. Append the following comma-separated line of variables to the file at /catches.csv.
    - `Current-Date-Time,Latitude,Longitude,Temperature,Condition,Dictated-Text`

I'm taking an HCI class for my Master's right now, so I've been thinking more and more about the different views of the user and how designers can design for the context in which a task is taking place. Because fly fishing typically involves wading in a creek and handling various pieces of equipment, it'd be difficult for the user to log a catch on their phone through a touch-based UI. Because iOS Shortcuts can be triggered by Siri, and because I have an Apple Watch, I can simply raise my wrist and say "Hey Siri, I caught a fish," and the shortcut will kick off. No need to take out my phone or touch my Watch!

It's not perfect, and it's actually quite slow, but it's incredibly simple. Even better, I was able to use what I already had to build something to solve an actual problem. The result is the following CSV:
```
timestamp,latitude,longitude,temperature,condition,fish
2021-03-16T16:12:50-04:00,39.123456,-75.123456,39.2°F,Rain,Brown trout
2021-03-16T16:55:40-04:00,39.123456,-75.123456,37.4°F,Showers,Brook trout
```

I'm sure there's already an app out there that does something like this, but, as I mentioned in my post on Obsidian, I'm a big fan of having control over my data. I really like this solution because it simply appends each line to a CSV in my iCloud Drive. At the end of the day, everything is just files on machines, so I particularly like when those files are on _my_ machine (albeit, backed up in iCloud).

Now that I have the CSV, the next step is to add a map (using either Google Maps or Leaflet) to my site so I can plot the catches!