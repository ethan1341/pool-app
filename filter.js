app.filter('orderByWins', function () {
    return function (items, field) {
        var filtered = [];
        var count = 0;
        angular.forEach(items, function (item) {
            var name = Object.keys(items)[count];
            item.name = name;
            count++;
            filtered.push(item);
        });
        filtered.sort(function (a, b) {
            return (a[field] > b[field] ? 1 : -1);
        });
        console.log(filtered);
        return filtered.reverse();
    };
});

