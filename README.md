# Aminci OS

A retro-computer engineering portfolio for Aminci Gana, built with TypeScript, Three.js, and Vite.

The site combines an interactive 3D computer, a small Unix-like terminal, a markdown-backed virtual file system, and a scrollable portfolio containing robotics, computer vision, machine learning, sensing, and control projects.

## Local development

```bash
npm install
npm run dev
```

The development server opens at [http://localhost:1234](http://localhost:1234).

Create and inspect the production build with:

```bash
npm run build
npm run preview
```

## Content map

- `src/file-system/home/user/title/title.md` — terminal boot screen
- `src/file-system/home/user/about/about.md` — terminal profile
- `src/file-system/home/user/projects/` — terminal project archive
- `src/file-system/home/user/contact/contact.md` — terminal contact details
- `src/terminal/applications/assets/help.md` — terminal help guide
- `index.html` — metadata and the scrollable portfolio
- `src/main.css` and `src/nav.css` — visual theme and navigation

Useful terminal commands:

```text
help
show about.md
cd ~/projects
ls
show 00-continuum-robot.md
show -all
```

## GitHub setup

The current clone still points to the original project as `origin`. After creating an empty GitHub repository named `aminci-retro-portfolio`, keep the base project as `upstream` and add your repository as the new `origin`:

```bash
git remote rename origin upstream
git remote add origin https://github.com/YOUR_USERNAME/aminci-retro-portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` before running the commands.

## Vercel deployment

1. Import the `aminci-retro-portfolio` GitHub repository into Vercel.
2. Keep the detected framework preset as **Vite**.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy, then add the final public URL to the Open Graph metadata in `index.html` if you want an explicit canonical share URL.

No environment variables are required.

## Credits and license

This portfolio is based on [Retro Computer Website](https://github.com/edhinrichsen/retro-computer-website) by Ed Hinrichsen and is used under the MIT License. The original copyright notice is retained in [LICENSE.MD](LICENSE.MD), with additional attribution in [NOTICE.md](NOTICE.md).

Portfolio content and customization are by Aminci Gana.
