var form = document.forms.myForm;
form.myFile.addEventListener('change', function (e) {
    var result = e.target.files;
    // console.log(result);

    var result = e.target.files[0];

    //FileReaderのインスタンスを作成する
    var reader = new FileReader();

    //読み込んだファイルの中身を取得する
    reader.readAsText(result);

    //ファイルの中身を取得後に処理を行う
    reader.addEventListener('load', function () {

        var f1 = reader.result;
        var f2 = f1.replace(/>/g, '>\n');
        var f3 = f2.replace(/<path d=/g, '');
        var f4 = f3.replace(/"/g, '');
        var f5 = f4.replace(/,/g, ' ');
        var f8 = f5.replace(/M/g, 'M ');
        var f9 = f8.replace(/=/g, ' = ');
        var f6 = f9.split(/\n/);
        var f7 = f6[1].split(/\s/);
        var f10 = f6[0].split(/\s/);

        console.log(f10[9]);
        console.log(f10[12]);
        console.log(f7);

        var num = f7.length - 10;
        console.log(num);

        var size_width = Number(f10[9]);
        var size_height = Number(f10[12]);
        let reduce = 1;

        if ($('input[name="direction"]:checked').attr('id') === 'horizontal') {
            if ($('input[name="size"]:checked').attr('id') === 'size_A4') {
                var text = '<svg id="svg_draw_area" width="1039.5" height="735" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="-1500 -1500 3000 3000">\n';
                var width = 1039.5;
                var height = 735;
            }
            else if ($('input[name="size"]:checked').attr('id') === 'size_B4') {
                var text = '<svg id="svg_draw_area" width="1274" height="899.5" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 1500 1500">\n';
                var width = 1274;
                var height = 899.5;
            }
            else {
                var text = '<svg id="svg_draw_area" width="1470" height="1039.5" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 1500 1500">\n';
                var width = 1470;
                var height = 1039.5;
            }
        }
        else {
            if ($('input[name="size"]:checked').attr('id') === 'size_A4') {
                var text = '<svg id="svg_draw_area" width="735" height="1039.5" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 1500 1500">\n';
                var width = 735;
                var height = 1039.5;
            }
            else if ($('input[name="size"]:checked').attr('id') === 'size_B4') {
                var text = '<svg id="svg_draw_area" width="899.5" height="1274" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 1500 1500">\n';
                var width = 899.5;
                var height = 1274;
            }
            else {
                var text = '<svg id="svg_draw_area" width="1039.5" height="1274" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 1500 1500">\n';
                var width = 1039.5;
                var height = 1274;
            }
        }

        console.log(width);
        console.log(height);

        if (size_width > size_height) {
            while (size_width >= width) {
                size_width = Number(f10[9]);
                reduce += 0.2;
                size_width = size_width / reduce;
                console.log(reduce);
            }
            console.log(size_width);
            var trans_x = size_width / 2;
            console.log(trans_x);
            var trans_y = size_height / reduce / 2;
        } else {
            while (size_height >= height) {
                seize_height = Number(f10[12]);
                reduce += 0.2;
                size_height = size_height / reduce;;
                console.log(reduce);
            }
            var trans_x = size_width / 2;
            var trans_y = size_height / reduce / 2;
        }

        var id_text1 = '<path id="SvgjsPath';
        var id_num = 1;
        var id_text2 = '" d="';
        var id_text3 = '" fill="none" stroke="black" stroke-width="3.0" stroke-linejoin="round" class="connected path"></path>\n';

        // console.log(text);
        // console.log(id_text1);
        // console.log(id_num);
        // console.log(id_text2);
        // console.log(id_text3);

        var count = 0;
        for (i = 0; i < num; i++) {
            if (f7[i].indexOf('M') !== -1) {
                count += 1;
            }
        }

        var text2 = Array(count);
        text2.fill(0);
        var ctmp = 0;
        var id_text = Array(count);
        id_text.fill(0);

        let k = 0;

        for (let i = 0; i < num; i++) {
            id_text[k] = id_text1 + String(id_num) + id_text2;
            // console.log(String(id_text[k]));
            if (f7[i].indexOf('M') !== -1) {
                ctmp = String(f7[i]) + ' ' + String(f7[i + 1] / reduce - trans_x) + ' ' + String(f7[i + 2] / reduce - trans_y);
                // console.log(String(ctmp));
                text2[k] = String(id_text[k]) + String(ctmp);
                // console.log(String(text2[k]));
                i += 3;
                for (let j = i; j < num; j++) {
                    if (f7[j].indexOf('C') !== -1) {
                        ctmp = String(f7[j]) + ' ' + String(f7[j + 1] / reduce - trans_x) + ' ' + String(f7[j + 2] / reduce - trans_y) + ' ' + String(f7[j + 3] / reduce - trans_x) + ' ' + String(f7[j + 4] / reduce - trans_y) + ' ' + String(f7[j + 5] / reduce - trans_x) + ' ' + String(f7[j + 6] / reduce - trans_y);
                        // console.log(String(ctmp));
                        text2[k] = String(text2[k]) + ' ' + String(ctmp);
                        // console.log(String(text2[k]));
                        j += 6;
                        // console.log(f7[j]);
                    }
                    if (f7[j].indexOf('L') !== -1) {
                        ctmp = String(f7[j]) + ' ' + String(f7[j + 1] / reduce - trans_x) + ' ' + String(f7[j + 2] / reduce - trans_y) + ' ' + String(f7[j + 3] / reduce - trans_x) + ' ' + String(f7[j + 4] / reduce - trans_y);
                        // console.log(String(ctmp));
                        text2[k] = String(text2[k]) + ' ' + String(ctmp);
                        // console.log(String(text2[k]));
                        j += 4;
                        // console.log(f7[j]);
                    }
                    if (f7[j].indexOf('M') !== -1) {
                        text2[k] = String(text2[k]) + ' ' + String(id_text3) + '\n';
                        // console.log(String(text2[k]));
                        id_num += 1;
                        i = j - 1;
                        k += 1;
                        break;
                    }
                }
            }
        }
        console.log("BREAK!")

        // console.log(String(text2));

        var text3 = text + '\n' + String(text2) + ' ' + String(id_text3) + '\n' + '</svg>';
        var text4 = text3.replace(/,/g, '');
        // form.output.textContent = text4;

        let str = text4;
        let ary = str.split(''); // 配列形式に変換（後述のBlobで全要素出力）
        let blob = new Blob(ary, { type: "text/plan" }); // テキスト形式でBlob定義
        let link = document.createElement('a'); // HTMLのaタグを作成
        link.href = URL.createObjectURL(blob); // aタグのhref属性を作成
        link.download = "svg" + (new Date()).toLocaleTimeString() + ".svg"; // aタグのdownload属性を作成
        link.click(); // 定義したaタグをクリック（実行）

        text = 0;
        f1 = 0;
        f2 = 0;
        f3 = 0;
        f4 = 0;
        f5 = 0;
        f6 = 0;
        f7 = 0;
        f8 = 0;
        num = 0;
        trans_x = 0;
        trans_y = 0;
        text2.fill(0);
        id_text.fill(0);
        ctmp = 0;
    })
});