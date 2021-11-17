/*
 Description

 You are given a positive integer number. This represents the sales made that day in your department store.
 The payables department however, needs this printed out in English.
 NOTE: The correct spelling of 40 is Forty. (NOT Fourty)

 Input
 Your program should read lines of text from standard input. Each line contains a positive integer.

 Output
 For each set of input print a single line to standard output which is the english textual representation of that integer.
 The output should be unspaced and in CamelCased. Always assume plural quantities.
 You can also assume that the numbers are < 1000000000 (1 billion).
 In case of ambiguities eg. 2200 could be TwoThousandTwoHundredDollars or TwentyTwoHundredDollars,
 always choose the representation with the larger base i.e. TwoThousandTwoHundredDollars.

 */

(() => {
    const numberToTextMap = new Map([
        [0, ""], [1, "One"], [2, "Two"], [3, "Three"], [4, "Four"], [5, "Five"],
        [6, "Six"], [7, "Seven"], [8, "Eight"], [9, "Nine"], [10, "Ten"],
        [11, "Eleven"], [12, "Twelve"], [13, "Thirteen"], [14, "Fourteen"],
        [15, "Fifteen"], [16, "Sixteen"], [17, "Seventeen"], [18, "Eighteen"],
        [19, "Nineteen"], [20, "Twenty"], [30, "Thirty"], [40, "Forty"],
        [50, "Fifty"], [60, "Sixty"], [70, "Seventy"], [80, "Eighty"],
        [90, "Ninety"]
    ]);

    const ONE_HUNDRED = 100,
        ONE_THOUSAND = 1000,
        ONE_MILLION = 1000000;

    let textDollars = (linesOfText) => {
        // separate lines of text into an array of string
        let numStringArr = linesOfText.match(/[^\r\n]+/g);

        numStringArr.forEach((numString) => {
            let parsedNum = Number.parseInt(numString);

            console.log(helper(parsedNum) + "Dollars");
        });
    };

    let helper = (num) => {
        let result = "", remain, temp;

        if (num === 0) {
            return "Zero";
        }

        if (num < 20) {
            return numberToTextMap.get(num);
        }

        if (num < ONE_HUNDRED) {
            remain = num % 10;
            temp = num - remain;

            return numberToTextMap.get(temp) + helper(remain);
        }

        if (num < ONE_THOUSAND) {
            remain = num % ONE_HUNDRED;
            temp = (num - remain) / ONE_HUNDRED;

            return numberToTextMap.get(temp) + "Hundred" + helper(remain);
        }

        if (num < ONE_MILLION) {
            remain = num % ONE_THOUSAND;
            temp = (num - remain) / ONE_THOUSAND;

            return helper(temp) + "Thousand" + helper(remain);
        }

        remain = num % ONE_MILLION;
        temp = (num - remain) / ONE_MILLION;
        return helper(temp) + "Million" + helper(remain);
    };

    // Run tests
    textDollars("3 \n 466 \n 1234 \n 10 \n 21");
})();