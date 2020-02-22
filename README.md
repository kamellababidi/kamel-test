## Installation to run
cd project directory, and run:

`yarn && yarn start`
  
## Testing
to run the testing 
`yarn test`

## Problem Solution

I used Array.from to get the  `width` of the array and the `height` of the array and then create every row in the array separately.

determine the stop condition of my recursion function which is if the width and height less than or equal to zero.

then checking the height if it less than 2 draw the last row

then I have 2 returns after then the main one which will have the recursion after subtracting the padding after adding 2 to it to count the edges.
the the second return is happen only to draw the last box inside the array.


### The Big O 

the big O of this solution is O(n)

### Screen shots 

1.  `Width: 20, Height:40, padding: 6)`

![](https://lh3.googleusercontent.com/QmwcjSKo9bmjIohy8TcKbxU4w-PL1mQUpNnE5Gey422bUrE8lo9ghRnB4ZO5bRVdHet3wsPISYOhmQ=s500)

2.  `(Width: 60, Height:60, padding: 10)`

![](https://lh3.googleusercontent.com/qX4C23dp9LGFNUF53IZ6JmQA2OcJhFp8EwprwuamopsSUENT8odO1JQX1LGAmMGxgpAEISq1TAyNzg=s600)

4.  `(Width: 80, Height:100, padding: 20)`

![](https://lh3.googleusercontent.com/WgT8WJ89i1tTRXUyISyRahAx6ZNCJD_BJ8skDSgqfvR5rqewbhV_xtY82dmj5f0MvCe3nYaCuC4pRQ=s720)
