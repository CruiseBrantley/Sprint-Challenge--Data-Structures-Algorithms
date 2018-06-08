Add your answers to the Algorithms exercises here.

I.  a)  O(n^3 / n^2) = O(n)
    b)  O(log(n))
    c)  O(sqrt(n))
    d)  O(n log(n))
    e)  0(n^3)
    g)  0(n)

II. a)  const maxDifference = (arr) => {
            let min = arr[0];
            let maxDifference = 0;

            arr.forEach(val => {
                min = Math.min(min, val);
                maxDifference = Math.max(maxDifference, val-min);
            });

            return maxDifference;
        }