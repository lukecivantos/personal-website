# personal-website
Plain static site for https://lukecivantos.com: index.html, styles.css, myscript.js. No build step, no framework; keep it that way.
- Preview: `python3 -m http.server 8000` then open http://localhost:8000
- Hosting: AWS S3 + CloudFront, deployed by hand. Never deploy or touch AWS without the user's approval.
- Visitor counter calls an API Gateway endpoint (see myscript.js); the page must still work if it fails.
- Don't invent personal facts (role, employer, links); confirm with the user.
