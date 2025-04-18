# Payload Blank Template

This is a minimal starter template for building applications with Payload CMS. It comes pre-configured with essential collections and settings to help you get started quickly.

## Features

- User authentication and admin panel access
- Media uploads with image resizing and focal point support
- Pre-configured collections: Posts, Categories, Media, Users
- Optional Docker support for local development
- Easy local setup and deployment

## Quick Start

### Clone the repository

```bash
git clone https://github.com/abdulrehmankz1/payload-blank-starter
cd payload-blank
```

### Install dependencies and start the development server

Using pnpm:

```bash
pnpm install
pnpm dev
```

Open your browser and navigate to `http://localhost:3000` to see the app running.

### Docker (Optional)

If you prefer to use Docker for local development:

1. Update the `MONGODB_URI` in your `.env` file to `mongodb://127.0.0.1/<dbname>`
2. Update the `docker-compose.yml` file's `MONGODB_URI` to match the above `<dbname>`
3. Run:

```bash
docker-compose up
```

This will start the MongoDB database container.

## Project Structure

- `src/collections/` - Contains Payload CMS collections like Posts, Categories, Media, and Users
- `src/payload.config.ts` - Main Payload CMS configuration file
- `public/assets/images/` - Static assets and images used in the project
- `docker-compose.yml` and `Dockerfile` - Docker configuration files for containerized development

## How it works

This template is tailored for most websites using Payload CMS. It includes:

- Authentication-enabled Users collection for admin access
- Media collection with upload and image management features
- Posts and Categories collections for content management

## Support

If you have any questions or issues, please reach out on [Payload Discord](https://discord.com/invite/payload) or open a discussion on [GitHub Discussions](https://github.com/payloadcms/payload/discussions).

## License

This project is licensed under the MIT License.
