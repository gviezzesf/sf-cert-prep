# SF Cert Prep

A browser-based study tool for most official Salesforce certifications.

**Live app → https://gviezzesf.github.io/sf-cert-prep/**

---

## What it does

Pick your target exam and your study pace, and the app builds a personalized day-by-day study plan. Everything is saved automatically in your browser — no account needed.

### Study Plan
Generates a daily schedule based on how many days per week you can study. Each day has a focused topic, curated Trailhead links, and a domain tag so you know what area you're covering. Check off days as you go — progress persists.

### Quiz
20 practice questions per cert. Every questions has an explanation for the correct answer. Filter by domain, shuffle the order, and reset anytime. Answers are saved so you can come back mid-session.

### Mock Exam
Simulates real exam conditions — timed, shuffled, no feedback until you submit. Results show your score, pass/fail, time taken, and a domain breakdown. Includes a full review screen with correct answers and explanations.

### Resources
Cert-specific links to the official exam page, Trailhead trailmix, and community resources. Includes a Key Documentation card with deduplicated links from your study plan — bookmark the ones you want to keep at the top.

### Tips
Exam-specific tips and strategies for the cert you're studying.

### Notes
A floating notes panel (bottom-right) that's always accessible while you study. Notes are saved per cert and persist between sessions.

---

## Certifications covered

Most official Salesforce certs across: Foundations, Administrators, Designers, Developers, Architects, Consultants, Marketers, and AI.

---

## Tech

Single-page app — plain HTML, CSS, and JavaScript. No framework, no build step, no backend. Progress and notes are stored in `localStorage`.

## Potential Issues
Dead links, 404s or redirects, although titles should still be correct and searcheable. Scrapping some Salesforce pages is difficult due to permissions and how the pages render. It constantly shifts urls as well.

