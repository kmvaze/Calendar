import React, { Component } from 'react';
import urlBase64ToUint8Array from '../helpers/notification';
import AppNavBar from '../components/AppNavBar';

class Notification extends Component {

    requestPermission = () => {
        console.log('In request Permisiion');
         // Ask user if they provide permissions for showing notifications.
        // Browser does it through notifications api
        window.Notification.requestPermission(function (permission) {
            console.log('In notification. requestpermission');
            if (permission === 'granted') {
                console.log('Permisiion already granted');
                var regSW;

                // Get the already registered service worker  
                navigator.serviceWorker.ready.then(function (registeredSW) {
                    console.log('Service Worker Ready');
                    regSW = registeredSW;
                    // Get any existing subscriptions
                    return registeredSW.pushManager.getSubscription().then(function (sub) {
                        // If no existing subscriptions, then create a subscription
                        if (sub == null) {
                            // Application public key generated using web push VAPID authentication method to provide authentication
                            // information which will be used in subscription workflow
                            var vapidKey = 'BGFleorSoAY4BLA_zDacl_gDe6FPLk96KRvlDRu9llS7jxJDEYO2JCHihSdovBCO1Ik6F1cfKmqhKdqHnFESzrM';
                            // Create a new subscription
                            return regSW.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: urlBase64ToUint8Array(vapidKey) });
                        } else {
                            // If there is an subscription, return the subscription
                            return sub;
                        }
                    }).then(function (createdSubscription) {
                        console.log("Subscription created", createdSubscription);
                        // Store the subscription in the DB
                        return fetch('https://kendra-pwa-app.firebaseio.com/subscriptions.json', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            },
                            body: JSON.stringify(createdSubscription)
                        })
                    }).then(function(response){
                        // Show successfully subscribed notification to user
                        if(response) {
                            var options = {
                                body: 'Subscribed to Swami Madhavnath Bodh Prasarak Mandal notifications',
                                vibrate: [100, 50, 100],
                                lang: 'en-US' // Support marathi at a later point
                            };
                            // Show the notification window 
                            regSW.showNotification('Subscribed successfully', options);
                            // Hide the enable notification link since user permission is granted
                            //document.querySelector('#enableNotifications').setAttribute('hidden', true);
                        }
                    })
                });
            }
        });
    }
    
    
    render() {
        return (
            <p onClick={this.requestPermission}>Subscribe to Notifications</p>
        );
    }
}

export default Notification