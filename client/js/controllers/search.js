angular
    .module('spotifyctrl', [])
    .controller('spotifyController', function($scope, spotifyservice) {

        $scope.searchArtist = () => {
            spotifyservice.search.get({

                artist: $scope.artist
            }, (response) => {
                 
                //console.log(response)
                $scope.albumDetails =null
                $scope.display = response
            })
        }

            $scope.showAlbum = (artid) => {
            spotifyservice.detai.get({
                id: artid

               
            }, (response) => {
                //console.log(response)

                $scope.display=null
                $scope.albumDetails = response
                console.log(response)
            })
        }


         $scope.showname = (ids) => {
            spotifyservice.det.get({
                num: ids

               
            }, (response) => {
               // console.log(response)

                $scope.display=null
                $scope.name = response
            })
        }


    })