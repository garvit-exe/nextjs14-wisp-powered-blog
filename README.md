# My Next.js 14 Blog - Powered by Wisp CMS

Welcome to my blog project! This blog is built using Next.js 14 Server Components and is backed by Wisp CMS for seamless content management. The goal of this project was to create a feature-rich, modern blog platform with server-side rendering, easy customization, and powerful publishing tools.

## Features

- **Modern Architecture**: Built with Next.js 14 App Router using React Server Components for optimal performance.
- **Content Management**: Wisp CMS integration makes it easy to manage and publish blog posts without worrying about markdown or complex setups.
- **Responsive Design**: The layout is fully responsive, ensuring the blog looks great on both mobile devices and desktops.
- **Light & Dark Mode**: Supports light and dark themes for a personalized reader experience.
- **SEO-Optimized**: Automatically generates Open Graph images, sitemaps, and RSS feeds for better search engine visibility.
- **Tag Filtering**: Blog posts can be filtered by tags, allowing readers to easily explore related content.
- **Related Posts Suggestions**: Uses AI-driven recommendations to suggest related blog posts.
- **Built-in About Page**: Comes with a pre-configured About page to introduce yourself or your blog’s purpose.

## Technologies Used

- **Next.js 14**: A powerful React framework for building fast, modern web apps with server-side rendering.
- **Wisp CMS**: A content management system that simplifies the process of adding and managing blog posts.
- **Tailwind CSS**: A utility-first CSS framework for creating custom, responsive designs quickly.
- **Shadcn UI**: A library of pre-built UI components integrated for fast development.
- **TypeScript**: Strong typing support to improve code quality and maintainability.
- **ESLint**: Helps maintain consistent coding standards through static analysis.

## Setup Instructions

To get started with this project locally:

1. First, Clone the repository:

```bash
git clone https://github.com/garvit-exe/nextjs14-wisp-powered-blog.git
```

2. Second, install the dependencies:

```bash
npm i
```

3. Then, add `.env` file:

```bash
touch .env
```

Note: You will need to populate the `NEXT_PUBLIC_BLOG_ID` variable with the Blog ID obtained from wisp after you've created an account.

```bash
echo "NEXT_PUBLIC_BLOG_ID=<your-wisp-blog-id>" >> .env
```

4. Finally, run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

You can easily customize the look and feel of the blog by editing the Tailwind CSS configurations and modifying the UI components from Shadcn. You can also customize the about page in `/src/app/about/page.tsx` file and the basic configurations in the `/src/config.ts` file.

## Contributions

If you’d like to contribute to this project, feel free to fork the repo,create another branch with the feature name, make your changes, and submit a pull request. All contributions are welcome!
