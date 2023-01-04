const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    btnInstallEl.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const btnEvent = window.deferredPrompt;
    if (!btnEvent) {
        return;
    }
    btnEvent.prompt();
    window.deferredPrompt = null;
    btnInstallEl.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});