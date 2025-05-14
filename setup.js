async function tryClosePopups(page, log = false) {
	const selectors = ["#bundlePop", '#popupBack', '#windowCloser', "#menuPopHider"].map(sel => page.locator(sel))
	await selectors.forEach(async (sel) => {
		if (sel.getAttribute("onclick")) {
			const clck = await sel.getAttribute("onclick")
			if (clck !== null) {
				if (log) console.log("attempting to run " + `window.${clck}`)
				await page.evaluate(`window.${clck}`).catch(e => console.log(e))
			}
		}
	})
}
