/*
   [[[[[[[[[[[[[[[      ]]]]]]]]]]]]]]]
   [:::::[ CODED BY MrAbdelaziz ]:::::] 
   [:::::[ Github:MrAbdelaziz   ]:::::] 
   [[[[[[[[[[[[[[[      ]]]]]]]]]]]]]]] 
*/   


 function isWhatsAppInstalled() {
      return new Promise((resolve) => {

        const iframe = document.createElement('iframe');

        iframe.style.display = 'none';
        iframe.src = 'whatsapp://send?text=test';
        iframe.sandbox = 'allow-same-origin allow-scripts allow-top-navigation';

        document.body.appendChild(iframe);

        setTimeout(() => {
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
          }
          resolve(false); // WhatsApp is not installed or didn't open
        }, 1000);

        window.addEventListener('blur', () => {
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
          }

          resolve(true); // WhatsApp is installed and opened
        });
      });
    }

    // Usage:
    isWhatsAppInstalled()
      .then((result) => {
        if (result) {
          console.log('WhatsApp is installed');
        } else {
          console.log('WhatsApp is not installed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
