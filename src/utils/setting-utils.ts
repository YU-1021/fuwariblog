import {
	AUTO_MODE,
	DARK_MODE,
	DEFAULT_THEME,
	LIGHT_MODE,
} from "@constants/constants.ts";
import { expressiveCodeConfig } from "@/config";
import type { LIGHT_DARK_MODE } from "@/types/config";

declare global {
	interface Window {
		bgAlreadyLoaded?: boolean;
	}
}

export function getDefaultHue(): number {
	const fallback = "250";
	const configCarrier = document.getElementById("config-carrier");
	return Number.parseInt(configCarrier?.dataset.hue || fallback, 10);
}

export function getHue(): number {
	const stored = localStorage.getItem("hue");
	return stored ? Number.parseInt(stored, 10) : getDefaultHue();
}

export function setHue(hue: number): void {
	localStorage.setItem("hue", String(hue));
	const r = document.querySelector(":root") as HTMLElement;
	if (!r) {
		return;
	}
	r.style.setProperty("--hue", String(hue));
}

export function getDefaultBlur(): number {
	const fallback = "5";
	const configCarrier = document.getElementById("config-carrier");
	return Number.parseInt(configCarrier?.dataset.blur || fallback, 10);
}

export function getBlur(): number {
	const stored = localStorage.getItem("blur");
	return stored ? Number.parseInt(stored, 10) : getDefaultBlur();
}

export function setBlur(blur: number): void {
	localStorage.setItem("blur", String(blur));
	const bgImg = document.getElementById("background-image");
	if (bgImg) {
		if (blur === 0) {
			bgImg.style.removeProperty("filter");
		} else {
			bgImg.style.filter = `blur(${blur}px)`;
		}
	}
}

export function applyThemeToDocument(theme: LIGHT_DARK_MODE) {
	switch (theme) {
		case LIGHT_MODE:
			document.documentElement.classList.remove("dark");
			break;
		case DARK_MODE:
			document.documentElement.classList.add("dark");
			break;
		case AUTO_MODE:
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
			break;
	}

	// Set the theme for Expressive Code
	document.documentElement.setAttribute(
		"data-theme",
		expressiveCodeConfig.theme,
	);
}

export function setTheme(theme: LIGHT_DARK_MODE): void {
	localStorage.setItem("theme", theme);
	applyThemeToDocument(theme);
}

export function getStoredTheme(): LIGHT_DARK_MODE {
	return (localStorage.getItem("theme") as LIGHT_DARK_MODE) || DEFAULT_THEME;
}

export function getDefaultRandomBg(): boolean {
	return true;
}

export function getRandomBg(): boolean {
	const stored = localStorage.getItem("randomBg");
	return stored !== null ? stored === "true" : getDefaultRandomBg();
}

export function getDefaultBgSrc(): string {
	const configCarrier = document.getElementById("config-carrier");
	return configCarrier?.dataset.bgSrc || "";
}

export function setRandomBg(enabled: boolean): void {
	localStorage.setItem("randomBg", String(enabled));
	const bgImg = document.getElementById(
		"background-image",
	) as HTMLImageElement | null;
	if (bgImg) {
		if (enabled) {
			bgImg.src = `https://api.sretna.cn/api/pc.php?t=${Date.now()}`;
			window.bgAlreadyLoaded = true;
		} else {
			const defaultBgSrc = getDefaultBgSrc();
			if (defaultBgSrc) {
				bgImg.src = defaultBgSrc;
			}
			window.bgAlreadyLoaded = false;
		}
	}
}

export function refreshRandomBg(): void {
	const bgImg = document.getElementById(
		"background-image",
	) as HTMLImageElement | null;
	if (bgImg && getRandomBg()) {
		bgImg.src = `https://api.sretna.cn/api/pc.php?t=${Date.now()}`;
		window.bgAlreadyLoaded = true;
	}
}
