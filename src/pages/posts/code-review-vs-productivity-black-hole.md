---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Good code review vs productivity black hole"
pubDate: 2025-03-31
description: "Code reviews are meant to protect quality, not kill delivery. Here's what engineering managers can do to make code review a strength"
image:
  url: "codereview.jpg"
  alt: ""
tags: ["code-review", "delivery", "productivity", "team-culture", "pull-request", "collaboration", "feedback", "context-switching", "trust", "ownership", "software-quality", "process"]
---
## What’s a pull request and why code review exists

For anyone unfamiliar with the process, a pull request (PR) happens when a developer finishes a piece of code and asks to merge it into the main codebase. Before it gets merged, another engineer on the team reviews the changes: it's the Code Review (CR) This process is not just about catching bugs, CR is how teams share knowledge and ensure code consistency. It's a highly needed process to prevent long-term messes in the codebase.

When done well, code review helps teams move faster. It gives everyone a shared sense of quality and keeps people learning. When the process breaks down, it does real damage.

## How a bad code review process hits productivity

It’s common for developers to complain about slow CR and I’ve seen it ruin the spirit of a team. In one case, a junior developer came to me frustrated. Their code was ready, but it sat for days waiting on review. The delay made them look unreliable to the rest of the team, even though the work was done on time. The Product Manager even started to report to me a couple missed deadline, thinking it was due to the developer's lack of reliability. 

I asked the developer to speak up during stand-up. **CR is part of the sprint**, so if a PR is blocked, that’s worth raising. Sometimes, just asking "can you get it done today?" is enough. If the reviewer is too busy, hand it off. That’s not politics, that’s collaboration.

When reviews stall, engineers lose momentum. They pick up new work, and by the time feedback lands, they’ve switched context. Coming back to it feels like starting over and the energy is gone. I’ve seen good work go stale simply because it sat too long and eventually people stop caring as much. Software engineers can stop pushing for quality if they know no one will look at it seriously or on time.

Even worse, delays often go unnoticed. The PR list grows. No one owns the backlog and nobody realizes how much time is being lost. Not on the roadmap, but in the gaps between the work.

## What a good review process actually looks like

A healthy code review culture is **timely and focused**. Pull requests are **kept small**, which makes reviewing easier and faster. Feedback is helpful, not nitpicky. Everyone on the team knows what kind of feedback is expected and what quality looks like.

If a reviewer can’t get to something soon, they must say so and reassign it. The goal is to keep work moving, not to hold it hostage.

When code review works, it’s a moment of care. It’s how teams **help each other grow**. It’s how bugs are caught before they spread. It’s how shared understanding builds.

## What engineering managers can do to support better reviews

Engineering managers don’t need to review every pull request. But they absolutely need to be aware of how the process is going.

Start by talking about it. Bring it up in retrospectives. Ask in 1:1s whether people feel blocked. Make slow reviews visible, **not to blame, but to solve**. Track review times if needed, and redistribute the load if one person is doing most of the reviewing.

But don’t just look at the numbers. Pay attention to the reviews themselves. I’ve seen senior engineers rush through reviews and miss important context. I’ve seen junior engineers write incredible reviews that show real growth. Watching **how someone reviews tells you how they think**, how they care, and how they show up for their team.

**Code review isn’t a formality. It’s part of delivery. If it’s broken, your velocity is broken. If it’s thoughtful, your whole team benefits.**
