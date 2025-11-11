---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Software architecture patterns for non-engineers"
pubDate: 2025-05-28
description: "A non-technical guide to common software architecture styles: monoliths, microservices, serverless and more, and why these choices matter for teams and products."
image:
  url: "architecture-patterns.jpg"
  alt: ""
tags: ["architecture", "monolith", "microservices", "modular-monolith", "frontend-backend", "serverless", "jamstack", "decision-making"]
---
Every time a team makes a decision about how to organize its code, it affects more than just technology. It shapes how quickly people can deliver new features, how easy it is to train new team members, and even how confident the team feels. 

For non-engineers, understanding these high-level choices can help in planning, budgeting and setting realistic expectations.
That's why I'm going to review of the most common architecture for the web and review their pros and cons. 

## The classic monolith
<aside class="sidenote">
<h3>Tech stack example</h3>
<p>Ruby on Rails, Django, Laravel, Spring MVC</p>
</aside>
Imagine all parts of an application living in one big box. The user interface, the data storage, the logic that connects them all together in one place. 
This "monolith" model is simple to start with. It's historically the base architecture model, the simplest to understand and also the simplest to build. 
Teams can add features quickly without worrying about multiple systems or how they are going to interact together. But over time, that single box can become crowded and fragile, making changes slow and risky. It is also hard to scale the system up or make one of its component evolve. 

<h3>Pros</h3>
<p>Easy to develop and deploy. Single codebase for all features. Simple testing setup.</p>
<h3>Cons</h3>
<p>Can become a tangled mess over time. Hard to scale only parts of the system. Longer to deploy as the application grows.</p>

## Microservices
<aside class="sidenote"><h3>Tech stack example</h3>
Spring Boot, Express.js, Go services, Docker, Kubernetes  
</aside>

In the microservices approach, that big box is broken into many small boxes. Each box handles one specific job. One might handle user logins, another might send emails, a third might manage payments, or another handle the look and feel of the application.

Teams can work independently on each box and scale parts of the system on demand. The trade-off is coordination and operational work. You now need to keep track of all the small boxes, make sure they can talk to each other and handle the extra complexity.
When one component is updated, it can also cause issues in another one that is not ready to use it. 
If each box is hosted on a different server, it can induce latency. On another hand, it makes it easier to scale up and more robust as one box can fail when the other still be operating. 

<h3>Pros</h3>
<p>Independent scaling and deployments. Teams own distinct services. Can choose the best tech for each service.</p>

<h3>Cons</h3>
<p>Operational complexity in service discovery, networking and monitoring. Harder local testing. More infrastructure overhead.</p>



## The modular monolith
<aside class="sidenote"><h3>Tech stack example</h3>
<p>Java projects with clear modules, Python apps split by area, .NET feature folders  </p>
</aside>

This pattern keeps the convenience of one big box but divides it inside into well-defined compartments. The compartments share the same building process and deployment, but the internal structure prevents accidental mix-ups. Teams get clearer boundaries without the overhead of managing many separate systems.

<h3>Pros</h3>
<p>Clear internal structure and ownership. Single deploy pipeline. Easier refactoring than microservices.</p>

<h3>Cons</h3>
<p>Still a single deployable unit. Can slip into coupling if boundaries aren't enforced.</p>



## Separate front end and back end

<aside class="sidenote"><h3>Tech stack example</h3>
<p>React or Vue for the user interface + any back-end service for data handling  </p>
</aside>

Often, the part users interact with (front end) is built and deployed separately from the part that handles data and business logic (back end). Think of a storefront versus the warehouse behind it. Splitting these two lets teams specialize, but it requires extra work to ensure they stay in sync, handle security and share data smoothly.

<h3>Pros</h3>
<p>Clear separation of concerns. Teams can release UI and API independently. Specialized skill sets.</p>

<h3>Cons</h3>
<p>Extra complexity in versioning APIs, authentication and client-server coordination.</p>


## Serverless functions
<aside class="sidenote"><h3>Tech stack example</h3>
<p>AWS Lambda, Azure Functions, Cloudflare Workers  </p>
</aside>
Serverless means writing small pieces of code that run only when needed, without managing servers. It's like electricity you pay for by the minute. It can scale automatically, but it can also bring challenges with troubleshooting, startup delays and monitoring many tiny functions.

<h3>Pros</h3>
<p>No server management. Automatic scaling. Pay only for usage.</p>

<h3>Cons</h3>
<p>Cold start delays. Local debugging can be tricky. Observability spread across many functions.</p>


## Jamstack and static-first sites
<aside class="sidenote">
<h3>Tech stack example</h3>
<p>Next.js or Hugo for static pages + headless CMS (Contentful, Sanity) + CDN (Netlify, Vercel)  </p>
</aside>

Jamstack builds most pages ahead of time and serves them as plain files from a global network of servers. Dynamic needs are met by calling external services. This delivers speed and security for content-focused sites, but it may not suit highly interactive applications.

<h3>Pros</h3>
<p>Blazing fast page loads. Strong security profile. Low infrastructure cost.</p>

<h3>Cons</h3>
<p>Complexity for real-time updates or personalized content. Build times grow with site size.</p>

## The new kids on the block
<aside class="sidenote"><h3>Tech stack example</h3>
<p>
  Apache Kafka, AWS EventBridge, RabbitMQ for event-driven<br>
  Domain-driven tools like Domain-Driven Design libraries (e.g. NestJS DDD, Axon Framework)
</p> 
</aside>
In recent years two exciting approaches have gained momentum. Event-driven design lets components react to streams of events instead of direct calls. It feels like subscribing to a news feed where services publish and listen for messages on a common bus. That can improve scalability and resilience, though it also means tracing flows across multiple systems.

Domain-driven design encourages teams to focus on business domains first, defining clear boundaries and language for each area of the system. It helps align code with real-world concepts, making complex logic more understandable. Both patterns aim to tame complexity by modeling the world more directly, but they bring their own learning curves and tooling needs.
<h3>Pros</h3>
<p>Improved scalability and alignment with business concepts. Easier to evolve complex domains.</p>
<h3>Cons</h3>
<p>Steep learning curve. Added complexity in tracing events or enforcing domain boundaries.</p>

## Choosing the right pattern

There is no single best model. The right architecture depends on team size, product goals, release frequency and available budget for infrastructure. 

A small team launching a prototype may prefer a monolith. A large, growing platform may need microservices or serverless. Understanding these options helps non-technical leaders make informed trade-offs.

Engineering partners also need to know that it can be hard to change architecture along the way. While it's still possible, it can require a significant amount of time, though a significant cost. Chosing the right architecture is a key decision that shapes the future of an application.  

## How engineering managers guide these decisions

As an engineering manager, your role is to frame these options for stakeholders. Start by identifying the team's main challenges: are deployments slow, is scaling hard, do new team members struggle to contribute? Present each pattern with its pros and cons in plain language. Match the choice to business needs and team capabilities. Finally, revisit decisions regularly as the product and team evolve.



**Software architecture is not a one-time decision. It grows and changes as products and teams grow. By viewing architecture as a living process, non-technical leaders and engineering managers can align on goals, adapt plans and maintain a healthy balance between speed, reliability and cost.**
