![image](https://github.com/KayDrechsler/nextjs-blog/assets/4559673/3a2ca0b7-db54-4c14-add9-3882dd9d3c81)


# Next.js - Blog
A Next.js case study application where I experimented with NextJS features to build up a complete Blog.
The user has the ability to post messages, which will then be stored in my personal MongoDB. Keep in mind that your would need to alter the code with your own MongoDB Link to make this feature work on your local machine. In this project I'm also rendering markdown as JSX.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup
### Installation
Run `npm install` within the root directory.

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Run Development Mode
Execute `npm run dev` within the root directory and open up `http://localhost:3000`.

## Used technologies
- React.js
- Next.js
- MongoDB
- Markdown

## Todos
- [ ] Whitelist the server once the application would be deployed to grant access to MongoDB. Currently this is just working locally on my personal machine since I whitelisted it already. If you want to run this code on your local machine you will need to create your own MongoDB and link the application to it.
- [ ] Add frontend side error handling on the contact form. Currently just backend side validation is present due to the demo nature of this project.
