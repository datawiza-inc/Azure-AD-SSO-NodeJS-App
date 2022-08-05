# Datawiza Training Module - Use No-Code Datawiza to Build Node.js Apps with Azure AD SSO

This module will introduce you to using No-Code Datwiza to build a Node.js web application. It shows two major functionalities:

- How to enable Microsoft login (Microsoft Azure AD work or school account)
- How to pass user attributes to the application backend.

## The Benefits of Using No-Code Datawiza

- No need to learn complex OIDC/OAuth or SAML protocols
- No need to manage refresh tokens, access tokens or ID tokens
- No need to manage user sessions
- No need to use SDKs and write code
- Reduce weeks of engineering work to hours, even minutes
- Avoid security vulnerabilities with a No-Code product developed by security experts

## How No-Code Datawiza Works

![A diagram showing how datawiza works with Azure AD ](/img/how-datawiza-works.png)

Datawiza is deployed as a reverse proxy in front of web apps, talking to Azure AD. It authenticates users with Azure AD via OIDC or SAML and then passes the user info, access token and others to the app so that the app itself does not have to talk to Azure AD directly, maintain user sessions or manage tokens.

The Datawiza proxies are delivered as lightweight docker containers (supporting sidecar or standalone mode) and managed via a unified cloud console [(more details)](https://www.datawiza.com/platform/). It works with any environment and is a perfect fit for multi-clouds.

## Introduction

This repo is used to run a pre-configured [Datawiza Access Broker (DAB)](https://docs.datawiza.com/overview.html#what-is-datawiza-access-broker) with a header-based app that will read `username`, `email`, and `access token` from the request header to achieve Single Sign-On (SSO) without actually coding the authentication part. The Identity Provider used is an Azure AD multi-tenant application, which means all users with a work or school account from Microsoft can log in. The header-based app is written in Node.js.

## Run the Demo

You can run this demo simply with [docker compose](https://docs.docker.com/compose/):

```shell
docker-compose -f docker-compose.yaml up -d
```

or

```shell
docker compose -f docker-compose.yaml up -d
```

with the latest docker compose.

Visit [http://localhost:9772](http://localhost:9772), after logging in to Azure AD successfully, you should see the username, email, and access token of your account:
![header-based app](/img/nodejs/response.png)

We also provide a complete tutorial for you, which you can use to build your application in DCMC. You can see the guide [here](/demo/nodejs/README.md) for more information.

## Online demo

We have already built an [online demo](https://php-sso.datawiza.net) based on this repo which you can login in with accounts in any organizational directory (Any Azure AD directory - Multitenant) and personal Microsoft accounts.

## Support

If you run into any issues or would like to get help from Datawiza team, you can

- Schedule a [30-minutes meeting](https://calendly.com/datawiza/30min)
- Join [Datawiza Discord server](https://discord.com/invite/Sn3nbc83Up)
- Send an email to: [support@datawiza.com](mailto:support@datawiza.com)
