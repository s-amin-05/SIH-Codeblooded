import React from 'react'

export default function Description(props) {
    const describe = `ABOUT US

We are a software company dedicated to empowering non-technical founders by managing all their technical needs. We’re on a mission to prevent great ideas from dying due to lack of technical knowledge.

THE ROLE

We are seeking a motivated back-end web developer to join our fast-growing, goal-driven team. This position is ideal for entry-level or intermediate developers looking to gain valuable real-world experience.

KEY REQUIREMENTS

- Knowledge of Node.js and related technologies (Express.js, JWT, Mongoose)
- Knowledge of Git
- Some real-world experience with these technologies
- Strong attention to detail
- Ability to code for scalability, performance, security, reliability, and modularity
- Willingness to learn and actualise others’ visions
- Some front-end knowledge

OUR APPROACH

At our company, we break projects into “mini tasks” for easy, procedural implementation. For example, a mini task to build a simple phone number verification component using an API.

Each task comes with a detailed description and plan. Thanks to our thorough task descriptions and well-planned approach, you won’t be racking your brain — just focusing on efficient implementation.

You’ll have access to an always-online project lead for support and collaboration.

COMPENSATION

- Starting rate: $8 per mini task
- Opportunity to increase earnings based on speed and accuracy
- Potential for up to 3 tasks per week
- Periodic pay reviews based on skill development
- Possibility of performance-based tips

CONFIDENTIALITY

All completed mini tasks are STRICTLY CONFIDENTIAL. We will retain all rights to the work. While you cannot use these as work samples, you may mention your employment with us on your CV, and we’ll be happy to provide verification.

HOW TO APPLY

Send a compelling cover letter that:

1. Begins with mentioning your favourite book (to show you’ve read the entire posting)
2. Includes some of your best work samples (CRUD projects are especially relevant)
3. Convincingly argues why you should join our mission

Please note: We’re looking for a purely human-written cover letter. No AI-generated content, please.

We look forward to your application!`
  return (
    <>
        <div className="description" >
            <pre>{describe}</pre>
        </div>
    </>
  )
}
