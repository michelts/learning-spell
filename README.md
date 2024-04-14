# Learning Spell

Web application for practicing language skills.

## Technical overview

The project uses Remix running on Cloudflare Workers.

## Development

- Install dependencies using `pnpm install`
- Create the database by running the command `npx wrangler d1 migrations apply --local DB`
- Start the development server using `pnpm dev`

Open up [http://127.0.0.1:8787](http://127.0.0.1:8787) and you should be ready to go!

The project uses Cloudflare Workers AI and thus, you might need to set your
account id even to run the project locally. Do it by settings an `.env` file
with the variable CLOUDFLARE_ACCOUNT_ID pointing to your account id.


## Deployment

If you don't already have an account, then [create a cloudflare account
here](https://dash.cloudflare.com/sign-up) and after verifying your email
address with Cloudflare, go to your dashboard and set up your free custom
Cloudflare Workers subdomain.

Once that's done, you should be able to deploy your app:

```sh
npm run deploy
```

You might need change the database name and id in the wrangler.toml file before
deploying though.
