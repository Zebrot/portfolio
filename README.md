This is my personal portfolio, which you can check out on terrancle.dev

## Architecture

This project is built with the Next.js App router.
The back-end solution is Sanity.io, a headless CMS.

_components are re-usable react components, while other folders are specific pages in the project : 

 - app/projects is the page that shows all the projects from the sanity back-end. 

 - app/project/[slug] fetches the one sanity project that matches the [slug]. These pages are server-side generated for faster access, so the fetching happens at build time.

 - app/page.tsx is the main page of the website, because it is mostly built as a one-page, using scrolling to differentiate between sections.

There is a minimal API, handling POST requests to send an email to a pre-defined mail adress. 

## Cloning or testing 

If you wish to clone this project to use, you will need a sanity.io project. 
Check : https://www.sanity.io/docs/next-js-quickstart/setting-up-your-studio

Your sanity backend must have projects, with at minimum a slug:string value. 
The rest of the expected values for the projects are found in app/project/slug or in app/_components/projectCard

For the mail sending to work, you will need a gmail account with an APP password. 

Finally, you must have a .env file with these variables defined : 

SANITY_ID = "your_sanity_project_id"
GMAIL_APP_PASSWORD = "your_gmail_app_password"
GMAIL_EMAIL_ADDRESS = "your_gmail_address"

## Contact me 

You can contact me on Github.com/Zebrot, or by mail via pi.terrancle@gmail.com 