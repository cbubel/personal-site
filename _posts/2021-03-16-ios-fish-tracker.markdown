---
layout: post
title: "Tracking Fly Fishing Catches with iOS Shortcuts"
date: 2021-03-16 13:00:00 -0400
categories: development
---
I recently "rediscovered" the iOS Shortcuts app, which allows you to create custom scripts that can be executed via Siri to kick off a number of configurable actions. I always thought this was a cool app, but I could never think of anything interesting to do with it. As I was taking stock of my fly fishing gear for the upcoming season, however, inspiration struck. I've always wanted a way to log some data around the fish I catch, so I decided to use the Shortcuts app to create a simple tracker.

I'm taking an HCI class for my Master's right now, so I've been thinking more and more about the different views of the user and how designers can design for the context in which a task is taking place. Because fly fishing typically involves wading in a creek and handling various pieces of equipment, it'd be difficult for the user to log a catch on their phone through a touch-based UI. Because iOS Shortcuts can be triggered by Siri, and because I have an Apple Watch, I can simply raise my wrist and say "Hey Siri, I caught a fish," and the shortcut will kick off. No need to take out my phone or touch my Watch!

The steps of the shortcut are:
1. Speak "What kind of fish did you catch"
2. Dictate text (say the type of fish)
3. Assign the dictated text to the variable `Fish`
4. Speak "What fly did you use?"
5. Dictate text (say the name of the fly)
6. Assign the dictated text to the variable `Fly`
7. Get current weather at current location
8. Get current location
9. Get file at /Shortcuts/catches.csv
    - If file does not exist, append the following line to the file at the same path in order to create the file and establish the CSV header.
    `timestamp,latitude,longitude,temperature,condition,fish,fly`
10. Append the following comma-separated line of variables to the file at /catches.csv.
    - `Current-Date-Time,Latitude,Longitude,Temperature,Condition,Fish,Fly`

It's not perfect, and it's actually quite slow, but it's incredibly simple. Even better, I was able to use what I already had to build something to solve an actual problem. The result is the following CSV:
```
timestamp,latitude,longitude,temperature,condition,fish,fly
2021-03-16T16:12:50-04:00,39.123456,-75.123456,39.2°F,Rain,Brown trout,Blue winged olive
2021-03-16T16:55:40-04:00,39.123456,-75.123456,37.4°F,Showers,Brook trout,Parachute Adams
```

I'm sure there's already an app out there that does something like this, but, as I mentioned in my post on Obsidian, I'm a big fan of having control over my data. I really like this solution because it simply appends each line to a CSV in my iCloud Drive. At the end of the day, everything is just files on machines, so I particularly like when those files are on _my_ machine (albeit, backed up in iCloud).

Now that I have the CSV, I can display the markers on a map using LeafletJS. Check it out [here](/fish-tracker).