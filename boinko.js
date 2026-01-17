function checkAdsRoot() {
    const bait = document.createElement("iframe");
    bait.src = "https://ads.root/ad.php";
    bait.style.width = "1px";
    bait.style.height = "1px";
    bait.style.position = "absolute";
    bait.style.left = "-9999px";
    bait.style.border = "none";
    document.body.appendChild(bait);

    setTimeout(() => {
        // If iframe was removed or has zero size, adblock likely blocked it
        const blocked = !document.body.contains(bait) || bait.offsetHeight === 0 || bait.offsetWidth === 0;
        if (blocked) {
            const banner = document.createElement("div");
            banner.style.cssText = `
                position: fixed;
                bottom: 1rem;
                left: 50%;
                transform: translateX(-50%);
                background: #cba6f7;
                color: #1e1e2e;
                padding: 0.8rem 1.2rem;
                border-radius: 8px;
                font-family: monospace;
                z-index: 9999;
            `;
            banner.textContent = "⚠️ Please add @@||ads.root^ to your adblocker to support Nyanet ads :3";
            document.body.appendChild(banner);
        }
        bait.remove();
    }, 150);
}

window.addEventListener("load", checkAdsRoot);