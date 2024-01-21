const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    // window.deferredPrompt = event;
    // butInstall.classList.toggle('hidden', false);
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    butInstall.textContent = 'Install!'
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
     return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    // butInstall.classList.toggle('hidden', true)
    butInstall.textContent('hidden', true)
});

//Event listener to clear the prompt when installed
window.addEventListener('appinstalled', (event) => {
    console.log('appinstalled', event);
});
