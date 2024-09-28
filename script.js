document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const now = new Date();
        const options = {hour: 'numeric', minute: 'numeric', hour12: true};
        const timeString = now.toLocaleString('en-US', options);
        document.getElementById('userTime').textContent = timeString;
    }

    function updateBatteryIcon(level) {
        if (level > 75) {
            batteryIcon.src = 'battery/battery4.png';
        } else if (level > 50) {
            batteryIcon.src = 'battery/battery3.png';
        } else if (level > 25) {
            batteryIcon.src = 'battery/battery2.png';
        } else {
            batteryIcon.src = 'battery/battery1.png';
        }
    }

    const batteryIcon = document.getElementById('batteryIcon');

    if ('getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
            const batteryLevel = battery.level * 100; 
            updateBatteryIcon(batteryLevel);

           
            battery.addEventListener('levelchange', function() {
                updateBatteryIcon(battery.level * 100);
            });

            battery.addEventListener('chargingchange', function() {
                console.log('Charging: ', battery.charging);
            });
        });
    } else {
        console.warn('Battery Status API is not supported on this device.');
    }


    updateTime();
    setInterval(updateTime, 60000);
});



document.addEventListener("DOMContentLoaded", function() {
    const dropdownSelect = document.querySelector('.dropdown-select');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const subjectInput = document.querySelector('.subject-input');
    const messageInput = document.querySelector('.message-input');
    const sendButton = document.getElementById('sendButton');

  
    dropdownSelect.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

  
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            const email = this.getAttribute('data-email');
            dropdownSelect.textContent = email;
            dropdownMenu.style.display = 'none';
        });
    });

   
    document.addEventListener('click', function(event) {
        if (!dropdownSelect.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    sendButton.addEventListener('click', function() {
        this.src = 'send2.png';
        setTimeout(() => {
            this.src = 'send3.png';
        }, 2000);
    });
});

document.querySelectorAll('.grid__item').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        const link = this.querySelector('a') ? this.querySelector('a').href : this.href;
        const iconSrc = this.querySelector('img').src; 

        
        const overlay = document.getElementById('overlay');
        const overlayIcon = document.getElementById('overlayIcon');
        overlayIcon.src = iconSrc; 
        overlay.classList.add('active'); 

       
        setTimeout(() => {
            window.location.href = link; 
        }, 600); 
    });
});
