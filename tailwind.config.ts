import { join } from 'path'
import type { Config } from 'tailwindcss'
import { skeleton } from '@skeletonlabs/tw-plugin';
import { chajna } from './src/chajna'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			objectPosition: {
				'face': '50% 20%'
			}
		},
	},
	plugins: [
		skeleton({
			themes: {
				custom: [
					chajna,
				],
			},
		}),
	],
} satisfies Config;
