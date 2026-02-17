import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Yuのblog",
	subtitle: "记录生活和搞机",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 230, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	background: {
		enable: true, // 开启背景图
		src: "/demo-banner.png", // 背景图链接（确保该路径有效或替换为你的图片地址）
		position: "center", // 居中
		size: "cover", // 覆盖全屏
		repeat: "no-repeat", // 不重复
		attachment: "fixed", // 固定背景，不随滚动条滚动
		opacity: 0.5, // 背景透明度（建议 0.7-0.9 之间，防止干扰文字阅读）
		blur: 5, // 背景模糊度（单位：px，建议 0-20 之间）
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/YU-1021/fuwariblog", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Yu",
	bio: "一个建立于 21 世纪的小站，存活于互联网的边缘",
	links: [
		{
			name: "QQ",
			icon: "qq", // Local icon
			url: "http://wpa.qq.com/msgrd?v=3&uin=2848476289&site=qq&menu=yes",
		},
		{
			name: "Telegram",
			icon: "telegram", // Local icon
			url: "https://t.me/+jcYrHcADo985MDI1",
		},
		{
			name: "Bilibli",
			icon: "bilibili", // Local icon
			url: "https://space.bilibili.com/1075986758",
		},
		{
			name: "GitHub",
			icon: "github", // Local icon
			url: "https://github.com/YU-1021",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
