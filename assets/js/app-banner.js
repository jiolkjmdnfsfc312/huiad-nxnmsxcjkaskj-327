let deferredPrompt;
        let btnAdd = document.querySelector(".app-banner");
        let close = document.querySelector(".close");
        window.addEventListener('beforeinstallprompt', (e) => {
          // Prevent Chrome 67 and earlier from automatically showing the prompt
          e.preventDefault();
          // Stash the event so it can be triggered later.
          deferredPrompt = e;
           // Update UI notify the user they can add to home screen
           btnAdd.style.display = 'block';
        });
        
        close.addEventListener('click', (e) => {
          // hide our user interface
          btnAdd.style.display = 'none';
          // Show the prompt
          deferredPrompt.prompt();
          // Wait for the user to respond to the prompt
          deferredPrompt.userChoice
            .then((choiceResult) => {
              if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
              } else {
                console.log('User dismissed the A2HS prompt');
              }
              deferredPrompt = null;
            });
        });