/**
 * Created by session1 on 10/22/15.
 */
var main = function() {
    $('#submit').click(function() {
        var foodName = document.getElementById('food').value;
        var buyDate = document.getElementById('buy').value;
        var expDate = document.getElementById('expire').value;
        var foodDesc = document.getElementById('desc').value;
        var foodTable = document.getElementById('foodTable');
        if (foodName == "" || buyDate == "" || expDate == "" || foodDesc == "") {
        }
        else {
            var row = foodTable.insertRow(1);
            var cell0 = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);
            var cell4 = row.insertCell(4);
            cell0.innerHTML = foodName;
            cell1.innerHTML = buyDate;
            cell2.innerHTML = expDate;
            cell3.innerHTML = foodDesc;
            var expirationDate = Date.parse(expDate);
            var today = new Date();
            var unixToday = Date.parse(today);
            document.getElementById('inputForm').reset();
            if (unixToday > expirationDate) {
                row.style.backgroundColor = "#FF2023";
                cell2.innerHTML = expDate + " (Today)";
            }
            else if (unixToday > expirationDate - 86400000) {
                row.style.backgroundColor = "#FF6D3C";
                cell2.innerHTML = expDate + " (Tomorrow)";
            }
            else if (unixToday > expirationDate - 172800000) {
                row.style.backgroundColor = "#FFB932";
                cell2.innerHTML = expDate + " (Two Days)";
            }
            else if (unixToday > expirationDate - 259200000) {
                row.style.backgroundColor = "#FFFA3F";
                cell2.innerHTML = expDate + " (Three Days)";
            }
        }

    });
};
$(document).ready(main);