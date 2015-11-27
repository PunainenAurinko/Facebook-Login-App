angular.module('starter.services', [])

.factory('FacebookService', function ($auth, $http, $ionicPopup) {
    // Might use a resouce here that returns a JSON array

    // Some fake testing data
    var facebookApiURL = 'https://graph.facebook.com/v2.2'

    return {

        me: function () {

            if ($auth.isAuthenticated()) {

                return $http.get(facebookApiURL + '/me', {

                    params: {

                        access_token: $auth.getToken(),
                        fields: 'name, picture, cover, gender, id, link, age_range, timezone',
                        format: 'json'

                    }

                });

            } else {

                $ionicPopup.alert({

                    title: 'Error',
                    content: 'User not authorized'

                });

            }

        },

        friends: function (userId) {

            if ($auth.isAuthenticated() && userId) {

                return $http.get(facebookApiURL + '/' + userId + '/friends', {

                    params: {

                        access_token: $auth.getToken()

                    }

                });

            } else {

                $ionicPopup.alert({

                    title: 'Error',
                    content: (userId) ?  'User not authorized' : 'User unknown'

                });
            }

        }
    };

});