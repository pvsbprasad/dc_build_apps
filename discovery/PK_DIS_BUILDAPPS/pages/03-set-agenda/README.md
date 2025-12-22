# Set the agenda for your workshop

The agenda (the sidebar that you see on the left) is completely editable. You can show or hide pages, create nested elements and hierarchies as needed...

The agenda is controlled in the file `agenda-sidebar.md` (in the root folder) and it is written in Markdown. As an example, the source code for the agenda of this website is:

```md
- **EXAMPLE WORKSHOP TITLE**
- [Home](/)
- [What workshop-tools can do](pages/30-workshop-tools-can/README.md)
- [What workshop-tools can't do](pages/31-workshop-tools-cant/README.md)
-  Publish content as a web with Docsify
  - [Copying the template to a new repository](pages/01-setting-repository/README.md)
  - [Project structure](pages/04-project-structure/README.md)
  - [Writing the content](pages/05-writing-content/README.md)
  - [Testing locally](pages/06-testing-locally/README.md)
  - [Setting the title](pages/02-set-title/README.md)
  - [Setting the agenda](pages/03-set-agenda/README.md)
  - [Generating the PDF file](pages/08-generate-pdf/README.md)
  - [Dynamic content (numbers, users, passwords)](pages/10-dynamic-content/README.md)
  - [Deployment](pages/11-deployment/README.md)
  - [Appendix: Other files](pages/07-other-files/README.md)
- Onboarding a new workshop
  - [Requirements](pages/14-workshop-requirements/)
  - [repository-tools integration](pages/13-repo-tools-integration/README.md)
  - [Random passwords](pages/12-random-passwords/README.md)
  - [Exercises and approvals](pages/15-exercises-approvals/README.md)
- Running a workshop
  - [Activate the workshop](pages/40-activate-w/README.md)
  - [Add participants to a workshop](pages/41-add-participants/README.md)
  - [Sending credentials](pages/42-send-credentials/README.md)
  - [Marking attendance](pages/43-mark-attendance/README.md)
  - [Approving exercises](pages/44-approving-exercises/README.md)
  - [Closing the workshop](pages/45-closing-w/README.md)
- Best practices
  - [Writing markdown](pages/20-writing-markdown/README.md)
- Downloads:
  - [Exercises in PDF](_assets/files/exercises.pdf ':ignore :target=_self')
```

As you see, it is simply a Markdown list, you can mix regular text and links and do nesting:

```md
- [Business Case](pages/usecase/README.md)
- Day 1
  - [Exercise 1](pages/01-exercise/README.md)
- Day 2
  - [Exercise 1](pages/01-exercise/README.md)
- Day 3
  - [Exercise 1](pages/01-exercise/README.md)
- [Additional information](pages/additional-info/README.md)
- Resources
  - [Troubleshooting](pages/troubleshooting/README.md)
```

> [!WARNING]
> It is crucial that you keep paths as they are: use `pages/...`, starting without slash.
> Using `/pages/...` or `./pages/...` or `../pages/...` might work locally, but won't work when you deploy!