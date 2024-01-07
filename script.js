/* Code in JS

// let inputCurrency = document.querySelector("#currency1");
// let inputCurrencyAmount = document.querySelector("#enterCurrency");
// let outputCurrency = document.querySelector("#currency2");
// let outputCurrencyAmount = document.querySelector("#convertedCurrency");

// function convertCurrency() {
//     if (inputCurrency.value === "ruppee") {
//         if (outputCurrency.value === "dollar") {
//             outputCurrencyAmount.value = inputCurrencyAmount.value * 0.012;
//         } else if (outputCurrency.value === "yen") {
//             outputCurrencyAmount.value = inputCurrencyAmount.value * 1.74;
//         }
//     }else if (inputCurrency.value === "dollar") {
//         if (outputCurrency.value === "ruppee") {
//             outputCurrencyAmount.value = inputCurrencyAmount.value * 83.19;
//         } else if (outputCurrency.value === "yen") {
//             outputCurrencyAmount.value = inputCurrencyAmount.value * 144.64;
//         }
//     }else if (inputCurrency.value === "yen") {
//         if (outputCurrency.value === "dollar") {
//             outputCurrencyAmount.value = inputCurrencyAmount.value * 0.0069;
//         } else if (outputCurrency.value === "ruppee") {
//             outputCurrencyAmount.value = inputCurrencyAmount.value * 0.58;
//         }
//     }
// }


*/


// Code in Jquery

let $inputCurrency = $("#currency1");
let $inputCurrencyAmount = $("#enterCurrency");
let $outputCurrency = $("#currency2");
let $outputCurrencyAmount = $("#convertedCurrency");

$(document).ready(
    $("#currencyConvertor").click(() => {
        if ($inputCurrency.val() === "ruppee") {
            if ($outputCurrency.val() === "dollar") {
                $outputCurrencyAmount.prop("value", $inputCurrencyAmount.val() * 0.012);
            } else if ($outputCurrency.val() === "yen") {
                $outputCurrencyAmount.prop("value", $inputCurrencyAmount.val() * 1.74);
            }
        } else if ($inputCurrency.val() === "dollar") {
            if ($outputCurrency.val() === "ruppee") {
                $outputCurrencyAmount.prop("value", $inputCurrencyAmount.val() * 83.19);
            } else if ($outputCurrency.val() === "yen") {
                $outputCurrencyAmount.prop("value", $inputCurrencyAmount.val() * 144.64);
            }
        } else if ($inputCurrency.val() === "yen") {
            if ($outputCurrency.val() === "dollar") {
                $outputCurrencyAmount.prop("value", $inputCurrencyAmount.val() * 0.0069);
            } else if ($outputCurrency.val() === "ruppee") {
                $outputCurrencyAmount.prop("value", $inputCurrencyAmount.val() * 0.58);
            }
        }
    })
)