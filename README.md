# Aircall

A call-log application that shows a list of incoming and outgoing calls. Users can archive and unarchive a call. Archived calls are displayed in a separate Archived tab.

This application is built as part of a [frontend development coding challenge](https://github.com/speer-technologies/aircall/tree/master) by Speer Technologies.

![aircall_app](https://github.com/user-attachments/assets/7b9f7f5f-b305-4377-bb3a-7d68402accae)

## Archive/unarchive a call

https://github.com/user-attachments/assets/67260586-d8bb-44a8-82ea-2335688a380e

## Archive/unarchive all calls

https://github.com/user-attachments/assets/cb82d400-7bef-4e71-bec4-0c37ee6a32a9

## Tools and technologies used

- React
- TypeScript
- React Router v6
- Tanstack React Query
- Tailwind CSS
- shadcn/ui
- Vite
- Vitest + React Testing Library
- MSW (Mock Service Worker)
- ESLint + Prettier

## Get started with local development

Open a terminal and clone this repo:

```bash
# Clone this repository
$ https://github.com/Ayon95/a2a4e1c6.git

# Go into the repository
$ cd aircall-frontend-challenge

# Remove current origin repository
$ git remote remove origin

# If you want, you can add a new remote repository
$ git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
```

### Install project dependencies

Once you are in the project root directory, you can install the project dependencies using npm:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm run dev
```

This will start a development server and open the app in your default browser.

### Deploy to Netlify

First, create a [Netlify](https://netlify.com/) account if you do not have one already. Log in to your account. If your project is already on GitHub, you can opt into [Netlify's continuous deployment](https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-git).

If you do not have a git repository for your project on GitHub, you can manually deploy the app by generating a production build:

```bash
# create a production build
$ npm run build
```

Vite will generate a `dist` folder which you can [drag and drop](https://docs.netlify.com/site-deploys/create-deploys/#drag-and-drop) into Netlify.
