This is my personal portfolio, which you can check out on terrancle.dev

## Architecture

This project is built with the Next.js App router.
The back-end solution is Sanity.io, a headless CMS.

_components are re-usable react components, while other folders are specific pages in the project : 

 - app/projects is the page that shows all the projects from the sanity back-end. 

 - app/project/[slug] fetches the one sanity project that matches the [slug]. These pages are server-side generated for faster access, so the fetching happens at build time.

 - app/page.tsx is the main page of the website, because it is mostly built as a one-page, using scrolling to differentiate between sections.

There is a minimal API, handling POST requests to send an email to a pre-defined mail adress. 

## Sanity 

This project uses Sanity to store data about the projects to show in the portfolio.
Follow these steps to set-up a studio and a sanity back-end : https://www.sanity.io/docs/next-js-quickstart/setting-up-your-studio


Your sanity backend must have projects, with at minimum a slug:string value. 
The rest of the expected values for the projects are found in app/project/slug or in app/_components/projectCard

Your .env must contain the ID of your sanity project :
SANITY_ID = "your_sanity_project_id"

## The Mail system 
For the mail sending to work, you will need a Brevo account with an API key. 

Don't forget to add the API key to the .env, as well as a mail address for the contact to be sent TO : 

PERSONAL_EMAIL = "your_mail_address"
BREVO_API_KEY = "your_API_key"

## What's Next 

This is my personal portfolio, so it is bound to evolve with the projects I take part in. 
I also have a roadmap of new features to add shortly, and in the longer term : 

 - In the short term, I want to add a dark theme, and an english translation of the content. I also intend to change some of the content to better reflect the niche market I'm trying to target (that is, young solo creatives)

 - In the longer term, I'm aiming to migrate more of the data to Sanity, such as tools and services. I also intend to change a lot of the design as time goes by, hopefully showing more technical skill, especially in terms of web design and animation. 

## Contact me 

You can contact me on Github.com/Zebrot, or by mail via pi.terrancle@gmail.com 