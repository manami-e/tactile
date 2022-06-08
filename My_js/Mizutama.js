// $(document).ready(function () {
//     $("#Button1").click(function () {
//         var inputText = Array(2);
//         inputText.fill(0);

//         inputText = $(".textBox").map(function (index, el) {
//             return $(this).val();
//         });

//         var yoko = inputText[0];
//         var tate = inputText[1];

//         var showtext = Array(2);
//         for (i = 0; i < inputText.length; i++) {
//             showtext[i] = inputText[i] + "<br/>";
//         }
//         $("#output1").html(showtext[0]);
//         $("#output2").html(showtext[1]);

//         let polkadot_pattern = 0;
//         console.log(polkadot_pattern);

//         polkadot_pattern = draw.pattern(yoko * SVG_RATIO, tate * SVG_RATIO, function (add) { //ドットの中心間距離
//             console.log(yoko);
//             console.log(tate);
//             add.rect(10 * SVG_RATIO, 10 * SVG_RATIO).attr({ //下地が白
//                 'fill': '#fff'
//             })
//             add.circle(0.5 * SVG_RATIO).attr({ //ドットの直径
//                 'cx': 1 * SVG_RATIO,
//                 'cy': 1 * SVG_RATIO,
//                 'fill': '#000'
//             })
//         })
//         polkadot_pattern.attr({ //ここが更新されない？
//             'id': 'polkadot-texture'
//         }).addClass('pattern')
//     })
// })


//   水玉模様（白色）
// let polkadot_pattern_05 = draw.pattern(2 * SVG_RATIO, 2 * SVG_RATIO, function (add) {
//     add.rect(2 * SVG_RATIO, 2 * SVG_RATIO).attr({
//         'fill': '#fff'
//     })
//     add.circle(0.5 * SVG_RATIO).attr({
//         'cx': 1 * SVG_RATIO,
//         'cy': 1 * SVG_RATIO,
//         'fill': '#000'
//     })
// })
// polkadot_pattern.attr({
//     'id': 'polkadot-texture'
// }).addClass('pattern')

// let polkadot_pattern_08 = draw.pattern(2 * SVG_RATIO, 2 * SVG_RATIO, function (add) {
//     add.rect(2 * SVG_RATIO, 2 * SVG_RATIO).attr({
//         'fill': '#fff'
//     })
//     add.circle(0.8 * SVG_RATIO).attr({
//         'cx': 1 * SVG_RATIO,
//         'cy': 1 * SVG_RATIO,
//         'fill': '#000'
//     })
// })
// polkadot_pattern.attr({
//     'id': 'polkadot-texture'
// }).addClass('pattern')

// let polkadot_pattern_4_05 = draw.pattern(4 * SVG_RATIO, 4 * SVG_RATIO, function (add) {
//     add.rect(2 * SVG_RATIO, 2 * SVG_RATIO).attr({
//         'fill': '#fff'
//     })
//     add.circle(0.5 * SVG_RATIO).attr({
//         'cx': 1 * SVG_RATIO,
//         'cy': 1 * SVG_RATIO,
//         'fill': '#000'
//     })
// })
// polkadot_pattern.attr({
//     'id': 'polkadot-texture'
// }).addClass('pattern')

// let polkadot_pattern_4_08 = draw.pattern(4 * SVG_RATIO, 4 * SVG_RATIO, function (add) {
//     add.rect(2 * SVG_RATIO, 2 * SVG_RATIO).attr({
//         'fill': '#fff'
//     })
//     add.circle(0.8 * SVG_RATIO).attr({
//         'cx': 1 * SVG_RATIO,
//         'cy': 1 * SVG_RATIO,
//         'fill': '#000'
//     })
// })
// polkadot_pattern.attr({
//     'id': 'polkadot-texture'
// }).addClass('pattern')