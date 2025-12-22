# Agenda for the PDF document

The repository is set up so that when the website is built (to be deployed), a PDF will be generated. You control which content will be shown in the PDF, and this is done in the `agenda-for-pdf.md` file (in the root folder).

Most of the time, the only differences between `agenda-sidebar.md` and `agenda-for-pdf.md` will be:

- `agenda-sidebar.md` includes the link to the PDF, while `agenda-for-pdf.md` does not.

  ```md
  - Downloads:
    - [Exercises in PDF](_assets/files/exercises.pdf ':ignore :target=_self')
  ```

- `agenda-for-pdf.md` includes a warning about the dynamic content (they should remember to replace `${number}` with their assigned number).

  ```md
  - [PDF number warning](pages/01-pdf-number-warning/README.md)
  ```

Just remember, every time you modify `agenda-sidebar.md`, just copy and paste the content to `agenda-for-pdf.md`, remove the last _Downloads_ section, and add the number warning.

> [!TIP|icon:fa-solid fa-check|label:Congratulations]
> You have set the agenda of your workshop, and prepared the agenda for the PDF!