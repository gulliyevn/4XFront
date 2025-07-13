import type { NextConfig } from 'next'
import type { RuleSetRule } from 'webpack'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
    webpack(config) {
        const fileLoaderRule = config.module.rules.find(
            (rule: RuleSetRule): rule is RuleSetRule =>
                !!rule && typeof rule === 'object' && 'test' in rule && rule.test instanceof RegExp && rule.test.test('.svg'),
        )
        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // to handle ?url
            },
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [/url/] },
                use: ['@svgr/webpack'],
            },
        )
        fileLoaderRule.exclude = /\.svg$/i
        return config
    },
    compress: true,

    // Power by header
    poweredByHeader: false,

    // React strict mode
    reactStrictMode: true,

    // Output configuration
    // output: 'standalone',

    // TypeScript configuration
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },

    // ESLint configuration
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
