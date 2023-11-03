# Hasura GraphQL Engine

V2: [![Latest release](https://img.shields.io/github/v/release/hasura/graphql-engine)](https://github.com/hasura/graphql-engine/releases/latest)
<a href="https://hasura.io/"><img src="assets/brand/hasura_logo_primary_lightbg.svg" align="right" width="200" ></a>
[![Docs](https://img.shields.io/badge/docs-v2.x-brightgreen.svg?style=flat)](https://hasura.io/docs)

DDN: <> 

<a href="https://discord.gg/vBPpJkS"><img src="https://img.shields.io/badge/chat-discord-brightgreen.svg?logo=discord&style=flat"></a>
<a href="https://twitter.com/intent/follow?screen_name=HasuraHQ"><img src="https://img.shields.io/badge/Follow-HasuraHQ-blue.svg?style=flat&logo=twitter"></a>
<a href="https://hasura.io/newsletter/"><img src="https://img.shields.io/badge/newsletter-subscribe-yellow.svg?style=flat"></a>

Hasura is an open-source product that accelerates API development by 10x by giving you [GraphQL](https://hasura.io/graphql/) or REST APIs with built-in authorization on your data, instantly.

Read more at [hasura.io](https://hasura.io) and the [docs](https://hasura.io/docs/).

------------------

## Hasura V2

V2 code now resides in the /v2 folder of this repository. Please find more detailed information about the V2 Hasura Graphql Engine in this [README](v2/README.md).

The V3 components are hosted as separate repositories, linked as submodules in this top level repositories for easy access.

## Hasura DDN

DDN is the new offering by Hasura, built over new V3 Graphql Engine. The core engine and the supporting tools for DDN is available at the ddn/ folder of this repo. Please find more detailed information about the V3 Hasura Graphql Engine (which powers Hasura DDN) in this [README](ddn/README.md).

## Support & Troubleshooting

The documentation and community will help you troubleshoot most issues. If you have encountered a bug or need to get in touch with us, you can contact us using one of the following channels:

* Support & feedback: [Discord](https://discord.gg/hasura)
* Issue & bug tracking: [GitHub issues](https://github.com/hasura/graphql-engine/issues)
* Follow product updates: [@HasuraHQ](https://twitter.com/hasurahq)
* Talk to us on our [website chat](https://hasura.io)

We are committed to fostering an open and welcoming environment in the community. Please see the [Code of Conduct](code-of-conduct.md).

If you want to report a security issue, please [read this](SECURITY.md).

## Stay up to date

We release new features every month. Sign up for our newsletter by using the link below. We send newsletters only once a month.
[https://hasura.io/newsletter/](https://hasura.io/newsletter/)

## Contributing

Check out our [contributing guide](CONTRIBUTING.md) for more details.

## Brand assets

Hasura brand assets (logos, the Hasura mascot, powered by badges etc.) can be
found in the [v2/assets/brand](assets/brand) folder. Feel free to use them in your
application/website etc. We'd be thrilled if you add the "Powered by Hasura"
badge to your applications built using Hasura. ❤️

<div style="display: flex;">
  <img src="v2/assets/brand/powered_by_hasura_primary_darkbg.svg" width="150px"/>
  <img src="v2/assets/brand/powered_by_hasura_primary_lightbg.svg" width="150px"/>
</div>

```html
<!-- For light backgrounds -->
<a href="https://hasura.io">
  <img width="150px" src="https://graphql-engine-cdn.hasura.io/img/powered_by_hasura_primary_darkbg.svg" />
</a>

<!-- For dark backgrounds -->
<a href="https://hasura.io">
  <img width="150px" src="https://graphql-engine-cdn.hasura.io/img/powered_by_hasura_primary_lightbg.svg" />
</a>
```

## License

### V2

The V2 core GraphQL Engine is available under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) (Apache-2.0).

All **other contents** in the v2 folder (except those in [`server`](v2/server), [`cli`](v2/cli) and
[`console`](v2/console) directories) are available under the [MIT License](LICENSE-community).
This includes everything in the [`docs`](v2/docs) and [`community`](v2/community)
directories.

### DDN
The core [V3 GraphQL Engine](ddn/v3-engine), the NDC connectors and other tools (LSP, CLI) are available under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) (Apache-2.0).