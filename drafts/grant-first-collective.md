# Grant-First Collaborative Research Collective

**How we build a research team before we have funding**

Koushik Das · Working paper, draft 0.1 · October 2026

> Research first. Evidence always. Build together.

---

## 1. Why I wrote this

I work as an independent researcher. Over the last year I have built a set of research systems: CARETRACE, ORPHARA, DMOS, RE-FORM X, LUMERA, Q-BenchMed, UMNA, Graphspace and a few others still in my archive. From the outside they look like separate projects. They are not. Each one is a small piece of a larger project, and each one exists to test a single idea before I depend on it there.

I have reached the point where I can't take this further on my own. The work needs people who know things I don't: clinicians, laboratory scientists, statisticians, imaging specialists, and good engineers. Above all, it needs people willing to tell me where I'm wrong.

I don't have money to pay anyone yet. What I can offer is honest credit, real responsibility, and a clear plan for how a volunteer group becomes a funded research team. This paper writes that plan down. It's for anyone thinking about joining, and for me, so that I keep my own promises.

It is a draft. If something in it seems unfair or unclear, tell me, and I'll change it.

## 2. Where things stand today

- **Me.** I'm the architect and algorithm builder. I decide what a system should do, how it should fail, and how we'll measure whether it works. Most of the code is written by AI coding agents working from my designs. I review it, test it, and decide what ships.
- **The team.** Two people currently work with me, on testing and on architecture review.
- **The work.** Six projects run live in a browser, three more are shown as showcases, and there is a preprint on Zenodo (doi:10.5281/zenodo.23097652). The archive also holds protein mutation work, biological computation, and a haematology report analysis system for clinical decision support. That last one is in its clinical validation and refinement phase.
- **Funding.** None yet. This paper is about changing that the right way.

## 3. The model on one page

The idea is simple: **form the team and produce the evidence first, then apply for grants as a team that already works together.**

Most funders want to see three things: a credible question, a team that can answer it, and early evidence that the approach is worth funding. A volunteer collective can produce all three. When the first grant arrives, the people who did the work are already there, already credited, and first in line for the paid roles.

The path has four stages:

| Stage | What it is | How people take part |
|---|---|---|
| 0. Volunteer collective | Small, unpaid, focused on evidence | Scoped tasks, named credit, authorship |
| 1. First grants | One or two funded studies | Paid roles go first to proven contributors |
| 2. Funded research team | Stable funding, an institutional home | Salaried roles, formal agreements |
| 3. Possible company | Only if the evidence supports a product | Early contributors considered first |

Nobody should join expecting stage 3. It may never happen, and that's fine. A good paper, a validated method, or an open tool other people use is already a success.

## 4. Who we are looking for

I'm not looking for a particular job title. I'm looking for people who will own a piece of the work and finish it. These are the roles that would help most right now.

**Research lead and architect (me, for now).** Sets the research questions, designs the systems, keeps the overall architecture coherent, and is responsible for what we claim in public.

**Subsystem owners.** People who take responsibility for one component, such as an extractor, an evidence store, a benchmark harness or a reasoning engine. Section 6 explains what owning a subsystem means.

**Developers.** People who build, fix and test. Working with AI coding tools is welcome, as long as you understand and can defend what you commit.

**Domain experts.** Clinicians, radiologists, haematologists, pharmacists, formulation scientists, biologists. You tell us whether the problem is real, whether the assumptions hold, and whether an output would be safe to show someone.

**Testers and validators.** People who try to break things. They write the test cases nobody wants to write and check results against references.

**Reviewers and critics.** People who read the methods and the papers and tell us plainly what is weak. This is one of the most valuable roles here, and it can be done in a few hours a month.

**Data stewards.** People who handle where data comes from, what licence it carries, what we're allowed to do with it, and keeping patient data out of places it shouldn't be.

**Writers and grant writers.** People who turn results into papers, reports and funding applications.

### What every role carries

Whatever your role, you are expected to:

- Say what you will do, and say early if you can't.
- Write down what you did, so it can be credited and checked.
- Keep the evidence honest. Never round a result up, and never hide a failed run.
- Respect data. No real patient data goes anywhere without proper approval.
- Treat other people's time and work with respect.

## 5. Joining before there is money

Let me be direct about this: volunteer work is unpaid work. I won't pretend otherwise, and I won't make promises I can't keep. Here is what I can promise.

**Start small.** New people start with a scoped task that takes days, not months: a test suite, a review of one method, a dataset licence check. It's a chance for both sides to see whether the fit is right.

**Your time is yours.** There are no fixed hours. Tell me how much time you can give, and we'll size the work to match. If your situation changes, say so, and the work gets handed over without any hard feelings.

**Leaving is fine.** You can step away at any time. The credit for what you did stays yours (see section 7).

**No micromanagement.** Owners decide how to do their work. I care about what was done and how we know it works, not about watching how people spend their hours.

**Students are welcome.** If you're a student, this work can count toward a project, a thesis or a portfolio. Check your institution's rules first, and I'll help with whatever paperwork they need.

## 6. Ownership of work

There are two kinds of ownership here, and both are real.

### Subsystem ownership

A subsystem owner is responsible for one component. Within that component, the owner:

- decides how it's built, within the shared architecture and the rules in this paper;
- reviews changes to it, and can say no to changes that would break it;
- keeps its documentation, tests and known limitations up to date;
- is the named person for it in our records, release notes and papers.

Ownership can be shared or passed on. When it is handed over, the record keeps both names and the dates.

### Research and problem ownership

Some people will own a question rather than a component, for example: "Does the evidence-guided signal catch errors that confidence alone misses?" The problem owner designs the study, sets the success criteria before the run, and leads the write-up. If the work becomes a paper, the problem owner normally has a strong claim to first authorship.

## 7. Credit

Credit is where research groups most often go wrong, so the rules come first, before anyone has a reason to argue about them.

### Named technical credit

Everyone who contributes is named:

- in the project's contributors file, with their role;
- in the release notes for the work they did;
- on the project page, for substantial contributions.

Small contributions count too. A single bug fix gets a name in the record.

### Authorship based on contribution

Authorship on papers follows what people actually did, not seniority, and not who joined first.

- We describe contributions using the CRediT roles (conceptualisation, methodology, software, validation, formal analysis, investigation, data curation, writing, visualisation, supervision and so on). Every paper lists who did what.
- To be an author, you need to have made a substantial contribution, helped write or critically revise the paper, approved the final version, and be willing to stand behind it. For clinical papers we follow the ICMJE criteria.
- Author order is discussed and agreed in writing **before** writing starts, and revisited if contributions change along the way.
- Contributions that don't meet the bar for authorship are listed in the acknowledgements, by name and role.
- No gift authorship and no ghost authorship. Nobody is added for status, and nobody who did the work is left off.

### References and recommendations

When someone asks me for a reference or a recommendation letter, I write only about work I have seen and can point to: the commits, the reviews, the tests and the reports. That makes the letter specific, and it makes it believable. If I can't say something truthfully, I won't write it.

## 8. Publications and conferences

- **Preprints first.** We publish preprints (Zenodo, arXiv, medRxiv or bioRxiv, as appropriate) so the work is public, citable and dated early.
- **Negative results count.** If a hypothesis fails, we write that up too. Some of our benchmark rounds failed, and they stay in the record.
- **Who presents.** Normally the problem owner or the main contributor to that piece of work. We take turns, so different people get the experience.
- **Travel and fees.** We only commit to a conference when the costs are covered by a grant, a travel award, or the presenter's institution. Nobody should pay out of pocket to represent the group.
- **Clinical claims.** Anything that touches patient care goes through a clinical reviewer before it's submitted, and states its limits plainly.

## 9. Open source

Openness is the default, with one deliberate exception.

- **Open now.** Engines, tools, benchmark harnesses and results, under recognised licences (AGPL-3.0, Apache-2.0, CC BY 4.0, depending on the project). Contributions to an open project are made under that project's licence.
- **Not open yet.** Clinical knowledge bases and models that haven't been validated. Publishing an unvalidated clinical knowledge base invites people to use it as if it were finished. These open once validation is complete, which is the stated plan for ORPHARA, for example.
- **Contributor sign-off.** Contributors confirm they have the right to submit their work, using a simple sign-off on each commit (the Developer Certificate of Origin).
- **Third-party work.** We respect the licences of the tools, models and datasets we use, and say clearly where each one came from.

## 10. Grant-first team formation

This section explains how the volunteer collective becomes the team named on a grant.

1. **Pick a fundable question.** One question, small enough for one grant, with clear evidence already gathered.
2. **Build the evidence package.** Working software, preregistered results (including failed runs), a limitations section, and the contribution records from section 7.
3. **Find an institutional home.** Many funders require the grant to be held by a university, hospital or registered organisation. University and medical college collaborators are essential here, as co-investigators or as the host institution.
4. **Name the team honestly.** The application names the people who did the work, in the roles they actually played.
5. **Budget for people first.** When money arrives, the first priority is paying the contributors who made the application possible, in proportion to the roles they'll take on.

Every grant application is drafted openly within the team. Everyone named on it reviews it before submission.

## 11. Governance and decision-making

The rules are kept as light as they can be while still being fair.

- **Owners decide within their area.** Subsystem and problem owners make day-to-day decisions without asking permission.
- **Shared decisions are written down.** Anything that crosses areas (architecture, licences, what we claim in public, author order) starts as a short written proposal. Everyone affected gets time to comment, normally a week. Then the decision and its reasons go into a decision log.
- **Who breaks a tie.** For now, I do, as research lead. As the team grows, this moves to a small steering group of active owners.
- **The clinical safety veto.** A clinical reviewer can stop any public claim or release that touches patient safety. That veto can't be overruled by a vote.
- **Disagreement is normal.** Argue about the evidence, not the person. If a disagreement can't be settled, run the experiment and let the result decide.
- **Conduct.** We follow a written code of conduct. Harassment or misrepresenting someone's work ends a person's participation.

## 12. Intellectual property and ownership

This is the section most likely to change once lawyers and funders are involved, so read it as principles rather than legal terms. Before any funding agreement or company is formed, we will get proper legal advice and put everything in writing.

- **What existed before.** The systems, designs and knowledge I built before the collective existed remain my pre-existing IP. I list them openly so there is no confusion later.
- **Open-project contributions.** Work contributed to an open-source project is licensed under that project's licence. You keep your copyright, and everyone gets the rights the licence grants.
- **Private-project contributions.** For projects that aren't open yet, contributors sign a short contributor agreement before they start. It says what rights the project receives, and that the contributor keeps the credit.
- **Inventions and new ideas.** If a contribution leads to something patentable or commercially valuable, the people involved are recorded at the time, with dates and the evidence behind it. Joint work is treated as joint work.
- **Data.** Data rights belong to whoever provided the data, under the terms they set. We never claim ownership of a partner's data.
- **No promises in this paper.** I won't promise salaries, equity or a share of future revenue here, because that would be dishonest before any of it exists. What I do promise is that contribution records will be the basis for those decisions when they come.

## 13. From volunteers to a funded team, and maybe a company

Each move to a new stage has a clear trigger, so nobody has to guess.

**Stage 0 to stage 1 happens when a grant is awarded.** Funded roles are offered first to the contributors whose work the grant depends on, as shown by the contribution records.

**Stage 1 to stage 2 happens when funding is stable enough for an institutional home.** Formal employment or research agreements replace volunteer arrangements. The governance rules in section 11 become part of those agreements.

**Stage 2 to stage 3 happens only if the evidence supports a product,** for example when a method has been externally validated and there is a real use for it that a company would serve better than a research group. If that happens, early contributors are considered first for roles in the company, and their recorded contributions are taken into account in any ownership discussion, with independent legal advice for everyone.

If the evidence never supports a company, we stay a research team. That isn't a failure.

## 14. What we will not do

- Promise money, jobs or equity that don't exist.
- Claim clinical validity before it has been shown, or present a prototype as a medical device.
- Take credit for someone else's work, or let someone's work go uncredited.
- Hide failed results.
- Micromanage people who are giving their time for free.
- Put real patient data anywhere it hasn't been approved to go.

## 15. How to join

If any of this interests you, get in touch with:

- a few lines about yourself and what you'd like to work on;
- the role from section 4 that fits you best, or a role I haven't thought of;
- roughly how much time you can give;
- a link to something you've done, if you have one: code, a paper, a review, anything.

University groups, medical colleges, independent reviewers and critics are all welcome. You don't need to agree with my approach to join. Disagreeing well is one of the most useful things you can bring.

**Contact:** EMAIL_PLACEHOLDER · github.com/nabvian · nabvian.github.io

---

*Research first. Evidence always. Build together.*

*This is a working draft and will change as the collective grows. Version history is kept with the document.*
