app.controller('poolController', function ($scope) {
        $scope.playerMap = {
            'Ethan': {
                wins: 12,
                total: 14
            },
            'Aaron': {
                wins: 8,
                total: 16
            },
            'Bob': {
                wins: 6,
                total: 15
            }

        };
        $scope.game = {
            players: {
                p1: {},
                p2: {}
            }
        };

        $scope.startGame = function () {
            $scope.game.start = true
            $scope.game.players.p1 = $scope.player1;
            $scope.game.players.p2 = $scope.player2;
            if ($scope.players.$error.required || $scope.players.$error.compare) {
                $scope.errors = true;
            } else {
                $scope.startedGame = true;
            }
        };

        $scope.checkWinner = function (result) {
            $scope.game.result = result;
            $scope.leaderboard = angular.fromJson(sessionStorage.leaderboard);
            for (key in $scope.game.result) {
                var playerName = $scope.game.result[key].name;
                var existingPlayer = $scope.leaderboard[playerName];
                if (existingPlayer) {
                    if ($scope.game.result[key].won == true) {
                        $scope.leaderboard[playerName].wins++;
                        $scope.leaderboard[playerName].total++;
                    } else {
                        $scope.leaderboard[playerName].total++;
                    }
                } else {

                    $scope.leaderboard[playerName] = {};
                    if ($scope.game.result[key].won == true) {
                        console.log('here')
                        $scope.leaderboard[playerName].total = 1;
                        $scope.leaderboard[playerName].wins = 1;
                    } else {
                        $scope.leaderboard[playerName].total = 1;
                        $scope.leaderboard[playerName].wins = 0;
                    }
                }

            }
            sessionStorage.leaderboard = angular.toJson($scope.leaderboard);

            $scope.startedGame = false;
        };



        $scope.createHistory = function () {
            if (sessionStorage.leaderboard) {
                $scope.leaderboard = angular.fromJson(sessionStorage.leaderboard);
            } else {
                sessionStorage.leaderboard = angular.toJson($scope.playerMap);
                $scope.leaderboard = angular.fromJson(sessionStorage.leaderboard);
                console.log($scope.leaderboard)
            }
        };
        $scope.createHistory();


    }
);