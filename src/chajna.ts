
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const chajna: CustomThemeConfig = {
	name: 'chajna',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "16px",
		"--theme-rounded-container": "6px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #d7b484
		"--color-primary-50": "249 244 237", // #f9f4ed
		"--color-primary-100": "247 240 230", // #f7f0e6
		"--color-primary-200": "245 236 224", // #f5ece0
		"--color-primary-300": "239 225 206", // #efe1ce
		"--color-primary-400": "227 203 169", // #e3cba9
		"--color-primary-500": "215 180 132", // #d7b484
		"--color-primary-600": "194 162 119", // #c2a277
		"--color-primary-700": "161 135 99", // #a18763
		"--color-primary-800": "129 108 79", // #816c4f
		"--color-primary-900": "105 88 65", // #695841
		// secondary | #824dff
		"--color-secondary-50": "236 228 255", // #ece4ff
		"--color-secondary-100": "230 219 255", // #e6dbff
		"--color-secondary-200": "224 211 255", // #e0d3ff
		"--color-secondary-300": "205 184 255", // #cdb8ff
		"--color-secondary-400": "168 130 255", // #a882ff
		"--color-secondary-500": "130 77 255", // #824dff
		"--color-secondary-600": "117 69 230", // #7545e6
		"--color-secondary-700": "98 58 191", // #623abf
		"--color-secondary-800": "78 46 153", // #4e2e99
		"--color-secondary-900": "64 38 125", // #40267d
		// tertiary | #ff3dae
		"--color-tertiary-50": "255 226 243", // #ffe2f3
		"--color-tertiary-100": "255 216 239", // #ffd8ef
		"--color-tertiary-200": "255 207 235", // #ffcfeb
		"--color-tertiary-300": "255 177 223", // #ffb1df
		"--color-tertiary-400": "255 119 198", // #ff77c6
		"--color-tertiary-500": "255 61 174", // #ff3dae
		"--color-tertiary-600": "230 55 157", // #e6379d
		"--color-tertiary-700": "191 46 131", // #bf2e83
		"--color-tertiary-800": "153 37 104", // #992568
		"--color-tertiary-900": "125 30 85", // #7d1e55
		// success | #73ff00
		"--color-success-50": "234 255 217", // #eaffd9
		"--color-success-100": "227 255 204", // #e3ffcc
		"--color-success-200": "220 255 191", // #dcffbf
		"--color-success-300": "199 255 153", // #c7ff99
		"--color-success-400": "157 255 77", // #9dff4d
		"--color-success-500": "115 255 0", // #73ff00
		"--color-success-600": "104 230 0", // #68e600
		"--color-success-700": "86 191 0", // #56bf00
		"--color-success-800": "69 153 0", // #459900
		"--color-success-900": "56 125 0", // #387d00
		// warning | #ffc800
		"--color-warning-50": "255 247 217", // #fff7d9
		"--color-warning-100": "255 244 204", // #fff4cc
		"--color-warning-200": "255 241 191", // #fff1bf
		"--color-warning-300": "255 233 153", // #ffe999
		"--color-warning-400": "255 217 77", // #ffd94d
		"--color-warning-500": "255 200 0", // #ffc800
		"--color-warning-600": "230 180 0", // #e6b400
		"--color-warning-700": "191 150 0", // #bf9600
		"--color-warning-800": "153 120 0", // #997800
		"--color-warning-900": "125 98 0", // #7d6200
		// error | #ff0040
		"--color-error-50": "255 217 226", // #ffd9e2
		"--color-error-100": "255 204 217", // #ffccd9
		"--color-error-200": "255 191 207", // #ffbfcf
		"--color-error-300": "255 153 179", // #ff99b3
		"--color-error-400": "255 77 121", // #ff4d79
		"--color-error-500": "255 0 64", // #ff0040
		"--color-error-600": "230 0 58", // #e6003a
		"--color-error-700": "191 0 48", // #bf0030
		"--color-error-800": "153 0 38", // #990026
		"--color-error-900": "125 0 31", // #7d001f
		// surface | #583c3c
		"--color-surface-50": "230 226 226", // #e6e2e2
		"--color-surface-100": "222 216 216", // #ded8d8
		"--color-surface-200": "213 206 206", // #d5cece
		"--color-surface-300": "188 177 177", // #bcb1b1
		"--color-surface-400": "138 119 119", // #8a7777
		"--color-surface-500": "88 60 60", // #583c3c
		"--color-surface-600": "79 54 54", // #4f3636
		"--color-surface-700": "66 45 45", // #422d2d
		"--color-surface-800": "53 36 36", // #352424
		"--color-surface-900": "43 29 29", // #2b1d1d

	}
}