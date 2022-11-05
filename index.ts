import type { AstroIntegration } from 'astro'

export interface Options {
}

export default function createIntegration(options: Options = { }): AstroIntegration {
  return {
    name: '@example/my-integration',
    hooks: {
      'astro:config:setup': ({ injectRoute }) => {
        injectRoute({
          pattern: '/[schema]',
          entryPoint: '@getflow/cms/routes/[schema]/index.astro'
        })
        injectRoute({
          pattern: '/[schema]/index.json',
          entryPoint: '@getflow/cms/routes/[schema]/index.json.ts'
        })
        injectRoute({
          pattern: '/[schema]/index.jsonld',
          entryPoint: '@getflow/cms/routes/[schema]/index.jsonld.ts'
        })

        injectRoute({
          pattern: '/[schema]/[id]',
          entryPoint: '@getflow/cms/routes/[schema]/[id]/index.astro'
        })
        injectRoute({
          pattern: '/[schema]/[id]/index.json',
          entryPoint: '@getflow/cms/routes/[schema]/[id]/index.json.ts'
        })
        injectRoute({
          pattern: '/[schema]/[id]/index.jsonld',
          entryPoint: '@getflow/cms/routes/[schema]/[id]/index.jsonld.ts'
        })
        injectRoute({
          pattern: '/[schema]/[id]/index.md',
          entryPoint: '@getflow/cms/routes/[schema]/[id]/index.md.ts'
        })
        injectRoute({
          pattern: '/[schema]/[id]/feed.xml',
          entryPoint: '@getflow/cms/routes/[schema]/[id]/feed.xml.ts'
        })
      }
    },
  }
}
