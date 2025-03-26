---
layout: ../../layouts/MarkdownPostLayout.astro
title: "SHTF! Call the e-team!"
pubDate: 2025-03-26
description: "Incidents happen. As an engineering manager, my job is to make sure the team is ready and supported. Here's what to do before, during, and after an incident."
image:
    url: "incident.jpg"
    alt: "Call the fire department or fire up the bat signal. Here comes the incident response team!"
tags: ["incident-response", "postmortem", "communication", "psychological-safety", "leadership", "engineering-manager", "team-support", "bug-triage", "manager-on-call", "cross-functional", "process", "trust"]
---
## What to do when incidents happen, and how to be ready before they do
<aside>
<h3>5 things that make a good incident response process</h3>
<ol>
    <li>
        <h4>When to escalate</h4>
        <p>Engineering team understands what qualifies as an incident, when to trigger a response, and categorize different level of incident.</p>
    </li>
    <li>
        <h4>Who does what</h4>
        <p>Roles are assigned ahead of time: incident lead, comms lead, technical responders or subject-matter experts</p>
    </li>
    <li>
        <h4>One communication channel</h4>
        <p>A single channel is used for team coordination (like Slack or Teams), and a separate paths are defined for stakeholder and customers updates</p>
    </li>
    <li>
        <h4>Real-time timeline tracking</h4>
        <p>Comm lead will log key events and decisions during the incident to support learning later.</p>
    </li>
    <li>
        <h4>Postmortem to debrief</h4>
        <p>The incident process includes how issue was fixed, but also reflection, documentation, and follow-up actions.</p>
    </li>
</ol>
</aside>



Severe incidents are moments when the entire organization turns toward engineering team expecting answers, direction, and action. As an engineering manager, you're not the one fixing the code but your role is critical. You're here to make sure the team stays focused, the impact is contained, and the learning happens.

Being effective during an incident necessitate cold blood, but also preparation long before something breaks.

## Before anything breaks

If you wait for an incident to define how your team handles incidents, it will already be too late. One of the most important things an engineering manager can do is make sure the team is prepared before there’s anything to respond to.

This starts with the basics: is there a clear incident response process in your department? There surely do, but does the team know who’s on call, how to escalate, and what tools they’ll be using? Are incident channels and alerting well defined?

Also, think about your bug triage process. This is often the moment when teams hesitate if this a bug, or if this an incident. You need **clear criteria** that help engineers make the call quickly and confidently. **If escalation feels ambiguous, it will slow down response time** or cause things to stay quiet when they shouldn't.

A good incident response process defines roles, makes communication easy, and removes the guesswork. Everyone should know who leads the response, how updates get communicated, and what happens once the fire is out. This process should be reviewed and improved regularly, ideally after each major incident.

Beyond process, preparation also means **practicing the response**. Run incident simulations or walk through past postmortems. Shadow experienced responders. Let newer team members understand how these moments actually play out in real time.

And finally, prep your cross-functional partners. When something breaks, the whole business is affected. Make sure product, design, and leadership understand what will happen and who will be involved. The more alignment you build in calm periods, the smoother things will go under pressure.

## When everything breaks

During a real incident, your job as an engineering manager is not to take over. It’s to **support the people doing the work** and make sure nothing distracts them from solving the problem.

**Engineers need focus**. That means you need to handle everything else. You should be coordinating with product, giving leadership regular updates, and managing any external communication channels. This allows the people troubleshooting to stay deep in the problem without fielding status requests every five minutes.

It helps to define a **manager-on-call** role during high-severity incidents. This person might not be on the front line and doesn't need to be a Subject Matter Expert, but they’re available to monitor communication, step in when something gets blocked, and make sure the team has what it needs. They might not always be needed, but when the pressure increases, having that presence **helps everyone stay aligned and supported**.

While the incident unfolds, **keep tracks** of what decisions are being made and when. Note the gaps and areas of confusion. This will help shape the postmortem later.

Most importantly, **stay calm**. Engineering managers set the tone. If you're panicked, reactive, or disorganized, the team will feel it. If you're steady, clear, and focused, the team will follow that lead.

## After things are stable

Once the incident is resolved, the real work begins. Your role doesn’t stop with recovery. It extends into learning and follow-through.

**Postmortems are essential**, they are a core part of the incident lifecycle. A good postmortem helps the team understand what failed, why it failed, and what needs to change to prevent similar incidents. It’s not about pointing fingers, it's about finding blind spots, fixing processes, and capturing lessons while they’re still fresh.

As the manager, it's also your job to publicly **acknowledge what went wrong**. If customers were impacted or a mistake was made, own that. Transparency builds trust.

And don't forget to **recognize the people who showed up** and helped resolve the issue. Whether it was someone leading the response, pulling logs, calming the team, or pushing the fix, their effort should be visible and appreciated.

**Action items** should be realistic, assigned, and tracked. A postmortem without follow-up loses its value. Make sure the next sprint includes space for the highest-priority fixes, whether they’re tooling improvements, playbook changes, or architectural updates.

Finally, check in with your team in 1:1s. Incidents are stressful. Not everyone will voice concerns publicly. Some might be proud, some might be frustrated, and some might just be tired. Give them the space to process and talk about what worked and what didn’t.




**Incidents will happen. That’s part of the job. But how your team responds, and how they feel about that response, depends heavily on what you’ve put in place as their manager.**

**Before an incident, build a clear, trusted process. During an incident, clear the path and keep the team focused. Afterward, help the team learn and recover.**

**Your engineers will handle the root cause. Your job is to make sure the system around them holds.**
