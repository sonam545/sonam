function findLCS() {
    var X = document.getElementById("string1").value;
    var Y = document.getElementById("string2").value;
  
    var m = X.length;
    var n = Y.length;
  
    var lcs_lengths = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  
    for (var i = 1; i <= m; i++) {
      for (var j = 1; j <= n; j++) {
        if (X[i - 1] == Y[j - 1]) {
          lcs_lengths[i][j] = lcs_lengths[i - 1][j - 1] + 1;
        } else {
          lcs_lengths[i][j] = Math.max(lcs_lengths[i - 1][j], lcs_lengths[i][j - 1]);
        }
      }
    }
  
    var lcs = [];
    var i = m, j = n;
    while (i > 0 && j > 0) {
      if (X[i - 1] == Y[j - 1]) {
        lcs.push(X[i - 1]);
        i--;
        j--;
      } else if (lcs_lengths[i - 1][j] > lcs_lengths[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
  
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "<p>Longest Common Subsequence: " + lcs.reverse().join('') + "</p>";
  }
  