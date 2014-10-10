// Generated by CoffeeScript 1.7.1
(function() {
  window.opacity = 0.9;
  window.config = 
    {
      'desktop':
      {
        'widthv': '410px',
        'heightv': '320px',
        'scalev': 0.7
      },
      'mobile':
      {
        'widthv': '510px',
        'heightv': '420px',
        'scalev': 0.86
      }
    };
  var $, jrMap;
  window.j=jQuery;
  jrMap = (function() {
    jrMap.html = null;
    jrMap.config = null;
    function jrMap(pathsinit) {
      var p;
      var ww = (window.width <= '601px') ? window.config.mobile.widthv : window.config.desktop.widthv;
      var hh = (window.width <= '601px') ? window.config.mobile.heightv : window.config.desktop.heightv;
      var ss = (window.width <= '601px') ? window.config.mobile.scalev : window.config.desktop.scalev;
      this.html = '<svg version="1.1" height="'+ hh +'" width="'+ ww +'" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative;"><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs>';
      this.html += (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = pathsinit.length; _i < _len; _i++) {
          p = pathsinit[_i];
          _results.push('<path fill="#bfc19c" stroke="#000000" title="'+ p.name +'" data-name="'+ p.name +'" d="' + p.path + '" stroke-width="0" stroke-opacity="1" id="' + p.id + '" transform="scale(' + ((window.width <= '601px') ? window.config.mobile.scalev : window.config.desktop.scalev) +')" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1; cursor: pointer; opacity: 0.4;"></path>');
        }
        return _results;
      })();
      this.html += '</svg>';
      return this.html;
    }
    jrMap.prototype.onClick = function(e) {
      _el=$(this);udl='../wp-content/themes/jaenando/mini-comarca.php?cname='+_el.attr("id");
      $('#more').load(udl,function(){$('#comarca article header').bigtext();$('#comarca h1').bigtext();});
      $(this).attr('class', 'active').attr('fill', '#73880A').animate({opacity: .9}, 500).siblings().attr('fill', '#bfc19c').animate({opacity: 0.9 }, 500).attr('class', '');
      window.location = 'http://' + window.location.hostname + window.location.pathname + "#" +_el.attr("id") ;
    }
    jrMap.prototype.onHoverIn = function(e) {
      if ($(this).attr('class') !== 'active') {
        $(this).attr('fill', '#73880A').animate({opacity: .8 }, 500);
      }
    };
    jrMap.prototype.onHoverOut = function() {
      if ($(this).attr('class') !== 'active') {
        return $(this).attr('fill', '#bfc19c').animate({
          opacity: .7
        }, 500);
      }
    };
    jrMap.prototype.onResize = function() {
      if(window.width <= '601px'){
        $('path').attr('transform','scale=('+window.config.mobile.scalev+')');
        $('svg').attr('width',window.config.mobile.widthv).attr('height',window.config.mobile.heightv);
      }
      else{
        $('path').attr('transform','scale=('+window.config.desktop.scalev+')');
        $('svg').attr('width',window.config.desktop.widthv).attr('height',window.config.desktop.heightv);
      }
    };
    return jrMap;
  })();
  $ = jQuery;
  $(function() {
    var jaenandomap;
    this.jaenandopaths = [{path: "M 475.57 0.00 L 476.52 0.00 C 478.45 1.68 480.52 3.20 482.85 4.27 C 486.20 5.60 487.57 9.60 491.12 10.58 C 495.20 11.88 498.98 13.90 503.00 15.32 C 510.52 11.85 518.40 8.38 526.87 8.51 C 531.06 9.23 534.47 12.22 537.31 15.22 C 537.01 17.61 535.56 19.68 534.99 22.01 C 535.58 26.66 538.81 31.19 536.86 35.96 C 535.51 39.63 534.29 44.25 537.92 47.11 C 544.99 54.61 556.28 50.55 564.68 55.24 C 563.69 59.11 562.62 63.06 562.80 67.09 C 563.29 69.84 565.68 72.03 565.50 74.95 C 565.80 81.54 562.40 88.47 565.01 94.82 C 568.85 96.84 573.34 97.03 577.26 98.85 C 578.08 99.89 578.50 101.18 579.00 102.39 L 579.00 109.57 C 578.40 115.31 578.29 121.71 573.83 126.00 C 575.03 127.89 577.01 129.63 576.77 132.09 C 576.63 135.93 574.25 139.19 572.25 142.31 C 569.06 146.72 565.75 151.04 562.73 155.57 C 561.07 158.28 558.03 159.56 555.93 161.83 C 553.49 165.45 551.91 169.66 548.85 172.87 C 546.16 176.11 541.95 177.27 538.53 179.51 C 535.05 181.77 531.19 183.33 527.44 185.07 C 530.04 191.05 529.46 197.68 529.05 204.01 C 528.75 207.61 527.17 211.10 524.74 213.74 C 522.73 215.17 520.34 215.90 518.28 217.24 C 514.45 219.71 511.73 223.59 507.73 225.83 C 503.73 223.55 498.98 220.75 494.42 223.43 C 487.64 228.86 484.09 237.96 476.22 242.07 C 473.74 239.92 473.25 236.48 472.18 233.56 C 470.81 233.63 469.44 233.70 468.08 233.77 C 464.78 228.35 461.91 222.68 460.48 216.46 C 455.19 212.82 450.05 208.93 445.66 204.20 C 444.31 206.33 443.08 208.60 441.18 210.31 C 438.86 208.89 436.52 207.23 435.11 204.85 C 434.16 199.77 434.14 194.37 435.27 189.31 C 439.25 184.34 444.68 180.68 448.59 175.59 C 454.67 169.01 456.93 160.20 460.06 152.06 C 461.47 147.98 464.95 145.29 467.76 142.21 C 467.09 139.86 466.10 137.51 466.20 135.03 C 466.91 132.70 468.11 130.56 469.24 128.40 C 466.46 128.38 463.67 128.49 460.91 128.12 C 458.07 127.46 455.94 124.91 452.91 124.80 C 445.30 124.37 437.61 125.63 430.05 124.24 C 425.28 123.42 420.97 120.61 416.02 120.70 C 410.34 120.40 405.23 123.20 399.95 124.81 C 400.47 120.94 401.01 117.07 401.52 113.20 C 404.25 112.94 406.99 112.69 409.74 112.46 C 409.71 110.60 409.70 108.75 409.69 106.90 C 415.44 102.00 418.57 94.82 420.65 87.72 C 420.97 87.28 421.62 86.41 421.95 85.97 C 421.55 81.44 421.97 76.88 423.13 72.48 C 425.95 71.46 428.92 70.28 430.65 67.68 C 433.59 64.14 433.61 59.34 434.02 54.99 C 434.29 50.00 437.70 45.89 438.20 40.93 C 438.97 37.45 438.55 33.57 440.21 30.37 C 450.08 21.19 462.52 15.34 472.88 6.77 C 474.42 4.87 474.92 2.32 475.57 0.00 Z", id: "sierrasegura", name: "Sierra de Segura"}, {path: " M 285.85 24.04 C 293.18 22.81 300.83 20.28 308.18 22.82 C 312.37 24.15 314.62 28.73 318.98 29.69 C 327.07 31.54 335.31 32.64 343.55 33.65 C 350.40 34.54 356.87 37.83 363.82 37.82 C 370.15 33.03 375.43 26.74 382.71 23.24 C 388.69 32.08 395.34 40.45 402.17 48.64 C 407.92 45.85 404.77 38.96 406.25 34.24 C 409.07 31.30 413.10 29.44 414.63 25.37 C 420.33 25.33 426.25 24.53 431.77 26.30 C 434.20 27.24 436.93 28.46 438.10 30.94 C 437.87 36.88 437.11 42.95 434.41 48.32 C 431.49 54.08 433.98 61.35 429.82 66.64 C 428.20 69.43 425.04 70.48 422.12 71.28 C 420.78 76.08 420.38 81.05 420.16 86.00 C 419.90 89.40 417.50 92.00 416.30 95.07 C 415.37 97.20 414.76 99.52 413.38 101.43 C 411.88 103.19 409.81 104.33 408.18 105.96 C 408.25 107.68 408.54 109.40 408.78 111.11 C 406.87 111.23 404.95 111.61 403.05 111.33 C 400.65 110.66 398.49 109.16 395.97 108.95 C 392.85 109.33 390.03 110.86 386.94 111.38 C 384.52 111.54 382.11 111.16 379.70 110.98 C 380.13 117.97 383.28 124.35 386.93 130.19 C 383.85 131.55 380.67 132.87 378.12 135.13 C 375.68 137.05 373.56 139.65 370.44 140.47 C 366.34 141.73 361.66 141.46 358.02 144.00 C 353.26 147.42 348.21 150.49 342.89 152.94 C 337.33 154.07 331.57 154.03 325.99 155.13 C 323.11 155.25 321.77 158.15 319.68 159.67 C 316.63 160.54 313.41 160.04 310.31 159.86 C 309.49 158.66 308.68 157.45 307.87 156.25 C 304.36 159.34 299.81 160.99 295.16 161.11 C 293.61 155.45 292.54 148.09 286.54 145.41 C 282.39 145.47 279.05 148.97 277.64 152.66 C 276.21 156.30 274.80 159.97 272.80 163.34 C 270.00 162.52 267.19 160.67 264.22 161.19 C 261.44 163.04 259.80 166.05 257.59 168.48 C 254.24 172.47 249.12 174.37 244.18 175.52 C 242.59 174.32 240.95 173.20 239.27 172.13 C 238.59 173.37 237.92 174.61 237.25 175.86 C 235.07 175.93 232.99 175.36 231.14 174.21 C 233.62 171.02 237.11 168.88 239.90 166.02 C 240.89 163.53 239.71 160.84 238.11 158.91 C 234.46 153.99 227.74 154.13 222.55 151.85 C 224.08 149.44 226.19 147.01 225.99 143.96 C 225.96 140.80 222.95 138.27 223.86 135.00 C 223.72 131.37 227.55 130.05 229.51 127.65 C 231.36 123.62 230.26 118.69 232.92 114.95 C 234.82 112.05 236.11 108.81 237.84 105.82 C 239.30 104.79 241.39 105.22 243.11 104.85 C 243.52 103.55 243.94 102.24 244.36 100.94 C 247.08 100.24 249.79 99.47 252.50 98.71 C 252.40 95.14 253.35 91.72 254.52 88.39 C 252.72 85.37 249.77 83.20 248.13 80.08 C 250.39 76.86 248.86 72.78 250.40 69.38 C 252.19 65.72 256.86 66.64 260.22 66.32 C 265.32 65.84 269.37 69.46 274.07 70.69 C 278.06 71.52 282.60 72.71 286.29 70.32 C 291.63 67.08 298.10 68.43 303.95 67.17 C 307.14 66.46 311.27 66.28 312.93 62.97 C 314.39 60.52 313.48 57.61 313.04 55.02 C 311.93 51.33 314.49 47.73 313.73 44.04 C 312.27 40.73 308.85 38.96 306.89 36.02 C 306.85 32.10 309.90 27.44 306.96 24.03 C 304.01 23.40 300.88 23.55 298.00 24.41 C 296.24 25.41 295.01 27.08 293.58 28.47 C 291.41 26.47 288.50 27.09 285.84 27.32 C 285.84 26.50 285.85 24.86 285.85 24.04 Z", id: "condado", name: "Condado"}, {path: "M 298.46 25.38 C 300.63 24.76 302.93 24.95 305.17 24.88 C 305.65 28.62 304.61 32.30 304.58 36.02 C 305.98 39.55 310.08 41.37 311.39 45.03 C 311.61 48.38 309.05 51.59 310.31 54.95 C 311.21 57.96 312.04 62.02 308.98 64.11 C 303.04 66.92 296.23 66.41 289.86 67.26 C 285.72 67.64 282.41 71.40 278.08 70.53 C 272.87 70.37 268.62 67.15 263.89 65.51 C 259.25 65.18 253.90 64.19 249.72 66.68 C 246.36 70.84 247.15 76.77 245.53 81.68 C 247.47 83.93 250.68 85.34 251.63 88.29 C 251.32 91.42 250.61 94.51 250.46 97.66 C 247.93 98.39 245.31 98.88 242.84 99.80 C 241.96 100.87 241.88 102.38 241.39 103.64 C 239.63 103.82 237.88 104.00 236.13 104.18 C 234.50 107.78 232.68 111.29 230.58 114.64 C 228.17 118.28 228.93 122.88 227.92 126.95 C 226.47 128.81 223.95 129.48 222.45 131.28 C 221.82 133.13 221.55 135.10 221.58 137.06 C 222.00 140.10 224.39 142.77 223.83 145.95 C 223.36 148.51 218.73 148.87 220.29 151.95 C 224.02 155.09 229.26 154.66 233.51 156.65 C 236.37 158.59 238.84 162.19 237.92 165.77 C 235.57 167.85 232.96 169.62 230.48 171.54 C 228.15 173.54 224.41 172.87 222.48 175.44 C 220.80 177.51 218.76 179.44 217.75 181.95 C 217.51 185.83 219.24 190.31 216.63 193.71 C 213.90 194.84 210.84 194.43 208.01 195.09 C 205.27 197.65 203.61 201.49 199.98 202.99 C 196.33 204.44 192.97 206.71 189.03 207.32 C 183.61 208.24 180.50 213.47 175.65 215.56 C 172.86 215.91 170.06 215.25 167.28 215.50 C 164.77 216.01 162.50 217.25 160.15 218.21 C 157.18 216.32 153.74 215.47 150.24 215.48 C 148.96 212.64 148.74 209.52 148.56 206.45 C 146.88 206.17 145.15 206.08 143.57 205.43 C 142.81 203.92 143.12 202.15 142.94 200.52 C 142.36 200.67 141.22 200.96 140.65 201.11 C 140.91 198.67 141.22 196.24 141.86 193.87 C 138.15 193.70 134.44 193.67 130.74 193.79 C 130.90 188.98 135.32 186.09 136.81 181.82 C 136.57 178.44 132.87 177.15 130.52 175.40 C 127.73 173.99 129.63 170.35 129.10 167.92 C 126.49 166.10 123.21 165.27 120.98 162.92 C 119.64 158.93 121.60 154.84 122.34 150.92 C 128.78 151.39 134.96 153.96 141.50 153.20 C 141.18 148.86 138.34 145.65 135.59 142.57 C 134.85 137.94 134.05 133.32 132.60 128.85 C 137.49 121.76 142.55 114.49 144.59 105.98 C 145.56 102.24 144.16 98.47 143.26 94.86 C 141.69 88.96 138.81 83.45 134.70 78.94 C 133.42 74.58 133.27 69.78 133.31 65.24 C 135.13 62.47 138.13 60.78 140.15 58.18 C 142.88 54.58 141.67 49.14 144.99 45.93 C 148.99 43.86 153.59 43.17 158.05 42.88 C 163.01 42.43 167.29 45.28 171.68 47.10 C 172.41 45.81 173.14 44.51 173.87 43.22 C 181.22 44.54 187.78 48.34 195.02 50.07 C 202.38 52.36 211.12 56.32 218.25 51.30 C 221.76 45.74 220.31 38.85 220.67 32.64 C 225.41 32.06 229.71 34.20 233.84 36.20 C 234.35 39.99 233.85 44.06 235.48 47.61 C 236.70 50.07 239.80 49.58 242.04 50.11 C 247.74 50.69 253.16 53.49 258.98 52.79 C 263.19 52.07 267.34 50.40 270.37 47.31 C 272.92 44.78 276.15 43.19 279.11 41.23 C 281.58 39.68 282.68 36.89 284.37 34.65 C 286.70 33.89 289.12 33.36 291.31 32.18 C 289.40 32.48 287.52 32.86 285.65 33.29 C 285.69 31.31 285.73 29.32 285.77 27.33 C 288.09 27.75 290.33 28.53 292.63 29.02 C 294.86 28.31 296.29 26.20 298.46 25.38 Z", id: "sierramorena", name: "Sierra Morena"}, {path: "M 4.99 54.98 C 5.54 52.62 8.12 51.69 9.80 50.24 C 18.59 52.18 27.26 54.64 35.97 56.92 C 43.85 59.03 52.09 58.91 60.06 60.54 C 65.33 61.76 70.74 60.40 76.04 61.24 C 81.75 62.05 87.18 64.36 92.98 64.55 C 98.33 64.75 103.68 64.94 109.02 65.14 C 116.75 65.50 124.16 62.93 131.76 62.06 C 132.08 67.04 132.09 72.08 133.06 76.99 C 133.52 79.76 135.63 81.77 137.18 83.97 C 139.86 87.42 140.93 91.74 142.22 95.83 C 143.12 99.21 144.45 102.82 143.36 106.32 C 140.74 114.39 136.21 121.67 131.27 128.51 C 132.69 133.49 133.96 138.53 134.38 143.72 C 137.03 146.04 139.34 148.78 140.56 152.14 C 134.06 152.50 127.94 149.63 121.45 150.12 C 120.52 154.40 118.42 158.88 119.71 163.28 C 121.71 165.98 125.15 167.00 127.57 169.24 C 127.91 171.32 127.91 173.44 128.31 175.51 C 130.70 177.66 134.82 178.45 135.52 182.03 C 134.18 185.00 131.43 187.05 130.09 190.00 C 129.97 191.66 130.08 193.33 130.13 195.00 C 133.42 195.07 136.71 195.09 140.00 195.08 C 139.88 197.11 139.70 199.13 139.47 201.16 C 140.32 201.28 142.02 201.54 142.87 201.67 C 142.22 203.67 142.30 206.12 140.64 207.63 C 139.25 209.26 137.34 210.55 136.51 212.58 C 135.52 216.16 136.15 219.96 135.48 223.59 C 133.62 225.63 130.65 226.75 129.54 229.41 C 129.17 232.19 129.97 234.98 129.66 237.77 C 129.15 240.44 127.95 242.90 126.97 245.41 C 122.66 244.10 118.34 242.85 114.03 241.58 C 114.66 239.90 115.30 238.24 115.93 236.57 C 114.49 236.24 113.05 235.94 111.62 235.60 C 111.86 233.28 111.97 230.95 112.06 228.63 C 106.92 230.84 102.34 234.12 97.32 236.58 C 96.94 239.36 98.57 242.18 98.19 245.03 C 97.88 247.30 97.14 249.48 96.47 251.67 C 95.32 251.73 94.18 251.79 93.04 251.86 C 89.79 256.88 85.94 262.07 79.98 263.97 C 71.88 266.39 63.29 264.79 55.00 265.90 C 54.94 262.37 55.31 258.78 54.64 255.29 C 50.01 248.69 43.62 243.45 36.82 239.20 C 34.81 237.81 32.32 237.57 29.97 238.04 C 21.16 239.40 12.92 243.07 4.21 244.92 C 7.04 238.68 6.88 231.72 6.88 225.02 C 6.87 218.46 3.58 212.51 0.00 207.23 L 0.00 205.35 C 0.27 203.92 0.60 202.49 0.91 201.07 C 2.58 200.89 4.25 200.72 5.92 200.54 C 5.90 198.69 5.87 196.84 5.85 194.99 C 8.10 194.19 10.33 193.31 12.54 192.40 C 11.50 189.25 10.78 186.02 10.18 182.77 C 11.69 182.83 13.20 182.86 14.71 182.84 C 16.22 180.12 17.17 177.14 18.30 174.25 C 19.46 174.13 20.61 174.02 21.77 173.91 C 21.47 171.75 21.17 169.59 20.88 167.43 C 26.03 165.38 28.78 160.35 32.77 156.83 C 34.54 154.95 36.82 153.35 37.87 150.94 C 37.90 146.73 37.78 142.50 37.42 138.31 C 35.53 134.81 31.43 133.01 29.75 129.32 C 27.66 124.87 28.34 119.81 28.18 115.04 C 26.47 113.67 24.65 112.41 23.21 110.74 C 22.59 103.89 23.72 96.99 23.94 90.13 C 22.00 89.60 19.17 90.08 18.47 87.64 C 15.56 83.16 16.34 77.73 17.02 72.75 C 13.82 72.63 10.62 72.54 7.41 72.49 C 5.88 66.82 3.63 60.92 4.99 54.98 Z", id: "campina", name: "Campiña"}, {path: "M 390.86 111.74 C 393.76 110.16 397.07 110.28 400.25 110.60 C 400.05 114.78 399.08 118.86 398.66 123.01 C 398.38 124.41 399.83 125.66 401.16 125.65 C 404.32 125.95 406.80 123.58 409.60 122.55 C 414.85 120.92 420.56 121.84 425.36 124.40 C 433.93 127.06 443.12 126.08 451.95 125.66 C 454.86 125.37 456.62 127.97 458.93 129.20 C 461.60 129.53 464.30 129.39 467.00 129.40 C 466.10 131.23 465.22 133.08 464.60 135.02 C 465.06 137.94 465.95 140.79 466.15 143.76 C 463.59 145.22 460.96 146.94 459.71 149.73 C 456.81 155.68 455.49 162.29 452.24 168.07 C 447.94 176.17 440.75 182.12 433.91 187.97 C 432.87 192.49 433.65 197.37 433.08 202.01 C 430.92 202.60 428.77 203.19 426.62 203.79 C 423.77 199.87 420.20 195.69 415.03 195.22 C 412.66 194.42 411.39 196.79 409.89 198.10 C 408.50 197.18 407.16 196.16 405.63 195.48 C 399.66 194.71 393.69 195.83 387.94 197.39 C 384.46 195.69 380.40 191.53 376.48 194.69 C 373.87 196.74 370.54 196.25 367.47 196.58 C 365.13 197.58 363.04 199.06 360.88 200.38 C 358.98 193.44 359.26 185.83 355.58 179.46 C 352.76 174.17 348.81 169.61 344.58 165.41 C 341.42 162.49 340.49 156.20 344.52 153.62 C 348.59 151.05 353.02 149.01 357.58 147.45 C 358.07 146.19 358.56 144.94 359.05 143.68 C 362.75 143.74 366.58 143.61 369.91 141.78 C 373.91 139.59 378.38 137.72 381.20 133.95 C 382.66 133.85 384.14 133.82 385.60 133.59 C 386.71 132.03 388.49 129.93 387.11 128.00 C 384.19 123.23 381.42 118.17 381.22 112.42 C 384.43 112.65 387.87 113.38 390.86 111.74 Z", id: "lasvillas", name: "Las Villas"}, {path: "M 281.72 148.73 C 283.46 147.34 286.41 145.69 288.24 147.84 C 291.71 151.77 292.74 157.16 294.16 162.07 C 297.79 161.79 301.52 161.50 304.82 159.79 C 305.96 159.47 307.50 158.03 308.45 159.51 C 310.58 162.75 314.73 161.47 317.95 161.21 C 321.23 161.21 322.77 157.95 325.30 156.46 C 330.28 155.48 335.39 155.21 340.40 154.39 C 340.93 158.17 340.52 162.60 343.54 165.46 C 349.95 172.01 355.76 179.79 357.47 188.99 C 358.32 193.28 359.24 197.60 359.27 201.99 C 357.71 204.13 355.34 205.53 353.36 207.27 C 353.09 213.11 352.96 219.26 349.63 224.32 L 348.64 223.84 C 348.43 224.19 348.03 224.89 347.83 225.24 C 347.70 225.36 347.43 225.61 347.30 225.74 C 341.64 226.36 337.18 230.12 332.06 232.23 C 328.84 233.33 328.17 237.09 326.72 239.77 C 329.75 241.40 333.45 243.49 332.59 247.58 C 335.66 250.99 335.79 255.78 336.10 260.11 C 336.31 263.26 335.04 266.24 334.20 269.22 C 336.54 270.16 338.76 272.14 336.93 274.77 C 331.16 279.04 324.16 282.23 316.84 281.99 C 316.17 275.93 316.91 269.36 314.08 263.76 C 310.26 258.11 306.47 252.16 300.92 248.04 C 296.03 246.04 290.25 243.86 285.11 246.24 C 277.86 249.70 268.17 245.34 265.55 237.88 C 263.41 238.81 261.15 239.65 259.49 241.36 C 259.81 245.69 260.65 249.99 260.34 254.35 C 255.92 254.60 251.44 254.15 247.08 254.95 C 243.78 256.57 243.50 260.93 241.00 263.27 C 234.31 265.59 227.00 264.18 220.33 266.52 C 218.12 265.89 217.68 262.60 218.62 260.67 C 220.85 255.01 223.90 249.34 223.38 243.04 C 223.54 237.48 219.86 233.07 217.09 228.62 C 213.55 229.38 210.02 230.13 206.47 230.81 C 205.45 229.22 204.43 227.63 203.41 226.04 C 202.03 228.02 201.02 230.39 199.09 231.93 C 195.34 231.81 190.69 233.34 187.84 230.11 C 185.60 228.13 182.61 227.41 180.10 225.86 C 176.67 223.70 173.62 220.87 171.55 217.36 C 173.55 217.04 175.61 216.90 177.56 216.31 C 181.35 214.30 184.34 211.07 188.10 209.01 C 190.39 208.04 193.08 208.46 195.26 207.18 C 197.20 206.09 199.17 205.05 201.23 204.19 C 205.20 202.87 206.72 198.45 210.09 196.32 C 212.62 195.54 215.31 195.68 217.93 195.63 C 221.28 191.43 219.39 185.94 220.18 181.12 C 221.76 178.68 223.77 176.50 226.07 174.73 C 229.15 173.99 231.89 176.14 234.84 176.62 C 236.38 176.27 238.83 176.23 238.92 174.09 C 240.72 174.98 242.48 176.01 244.42 176.59 C 247.62 176.20 250.67 174.88 253.58 173.54 C 258.33 171.29 260.07 165.85 263.98 162.65 C 267.26 161.54 270.42 164.30 273.77 163.71 C 277.77 159.49 277.61 152.85 281.72 148.73 Z", id: "laloma", name: "La Loma"}, {path: "M 375.59 196.63 C 377.43 195.85 379.44 194.11 381.47 195.43 C 384.36 196.38 386.97 199.28 390.21 198.30 C 395.04 197.24 399.97 195.86 404.96 196.50 C 406.74 197.52 408.18 199.06 410.03 199.99 C 411.41 198.63 412.66 197.15 414.06 195.81 C 419.03 196.76 422.74 200.69 425.40 204.76 C 427.89 204.56 430.38 203.90 432.88 204.03 C 433.80 206.80 435.67 208.81 438.55 209.57 C 438.69 210.93 438.83 212.30 438.98 213.67 C 442.07 212.03 443.89 209.01 445.84 206.25 C 450.09 209.95 454.22 213.83 458.97 216.91 C 461.63 218.41 459.18 222.01 460.86 224.17 C 463.06 227.65 465.40 231.05 467.34 234.68 C 468.83 234.89 470.32 235.09 471.82 235.29 C 472.29 238.07 473.93 241.32 471.87 243.83 C 469.47 247.53 467.71 251.61 465.25 255.26 C 463.60 257.82 460.63 259.77 460.71 263.13 C 459.77 274.29 451.68 282.71 445.16 291.12 C 441.94 294.96 442.23 300.19 441.83 304.89 C 438.74 306.13 434.95 307.00 433.37 310.28 C 431.38 313.58 432.54 317.53 433.07 321.07 C 434.19 326.31 433.01 331.77 434.38 336.97 C 435.65 337.73 437.14 337.91 438.54 338.35 C 437.87 339.67 437.50 341.23 436.27 342.17 C 428.87 348.19 419.41 350.69 411.24 355.33 C 408.92 359.65 407.65 364.63 408.52 369.54 C 401.79 367.89 395.75 363.99 388.96 362.75 C 384.30 364.58 381.09 369.15 376.08 370.46 C 373.10 371.98 370.47 369.31 367.92 368.14 C 364.38 366.04 360.13 364.84 357.37 361.66 C 355.43 358.25 354.70 354.32 353.61 350.59 C 352.30 345.96 353.07 341.12 352.49 336.42 C 351.08 330.29 347.08 325.22 343.09 320.53 C 346.77 315.45 350.96 310.73 354.23 305.37 C 355.17 304.05 355.26 302.14 354.20 300.88 C 351.92 297.55 349.39 294.38 346.68 291.38 C 343.84 287.83 338.66 289.06 335.03 286.98 C 333.25 285.57 332.89 283.09 332.68 280.97 C 333.14 278.04 336.37 276.94 338.44 275.27 C 338.56 273.51 338.68 271.75 338.80 270.00 C 337.74 269.62 336.68 269.25 335.62 268.88 C 338.26 262.88 336.98 256.33 336.01 250.11 C 334.37 245.84 331.88 241.78 328.40 238.75 C 329.59 236.30 330.86 233.61 333.66 232.70 C 338.02 230.02 343.26 228.84 347.30 225.74 C 347.43 225.61 347.70 225.36 347.83 225.24 C 348.28 225.01 349.18 224.55 349.63 224.32 C 350.86 223.01 352.16 221.74 353.19 220.25 C 353.94 217.97 353.81 215.52 354.06 213.16 C 354.54 212.77 355.49 212.00 355.96 211.62 C 355.44 210.38 354.91 209.15 354.40 207.93 C 357.88 204.91 361.15 201.63 364.94 198.99 C 368.06 196.68 372.31 198.52 375.59 196.63 Z", id: "cazorla", name: "Cazorla"}, {path: "M 138.29 212.32 C 140.23 208.85 144.40 206.92 148.26 206.88 C 149.26 209.42 146.03 212.38 148.21 214.47 C 149.18 215.50 149.09 217.06 149.49 218.36 C 155.56 219.72 161.77 219.84 167.96 220.06 C 172.33 222.12 175.21 226.32 179.38 228.71 C 182.64 230.57 186.11 232.06 189.61 233.41 C 194.98 235.32 200.49 232.77 205.95 232.98 C 208.98 233.03 212.00 232.63 215.04 232.56 C 219.17 235.80 221.76 241.56 220.51 246.86 C 219.88 252.23 216.10 256.66 215.80 262.08 C 216.01 267.64 219.59 272.41 220.03 277.94 C 219.77 282.57 216.45 286.37 216.00 290.98 C 215.26 295.70 216.46 300.39 217.39 305.00 C 210.95 305.20 204.45 304.54 198.04 305.31 C 192.65 307.52 190.29 313.35 185.99 316.94 C 183.11 319.99 178.53 322.32 178.02 326.90 C 177.80 332.14 182.82 335.30 184.98 339.61 C 182.86 344.56 180.74 349.92 176.63 353.54 C 171.47 354.78 166.22 355.94 160.90 356.24 C 155.92 356.42 151.82 353.04 147.08 352.11 C 142.43 351.41 137.77 353.15 133.13 352.33 C 129.73 351.80 126.33 351.22 122.91 350.89 C 123.36 355.10 124.06 359.32 125.69 363.25 C 126.27 365.12 127.39 366.99 127.09 369.01 C 126.22 371.81 124.85 374.42 123.80 377.15 C 115.36 376.10 107.32 373.23 99.13 371.05 C 95.26 369.87 90.84 369.22 88.03 366.00 C 84.85 362.46 81.37 359.05 76.86 357.27 C 73.18 355.41 68.02 355.17 66.12 350.92 C 64.01 345.57 67.08 340.21 67.96 334.97 C 67.12 331.33 64.48 328.44 62.53 325.35 C 58.52 328.36 55.07 332.18 50.64 334.60 C 46.90 335.91 42.69 335.70 38.93 334.54 C 34.13 332.81 32.55 327.28 28.53 324.53 C 24.32 321.93 19.25 321.27 14.95 318.92 C 15.29 314.45 16.75 310.06 19.07 306.23 C 20.58 303.71 22.71 301.58 23.98 298.92 C 24.27 296.63 22.41 294.73 20.55 293.74 C 14.32 291.23 7.56 290.63 1.00 289.45 C 1.01 285.90 1.28 282.30 0.01 278.91 C 3.87 269.97 0.46 259.86 3.62 250.72 C 5.23 248.33 8.38 247.87 10.88 246.85 C 18.07 244.64 25.23 241.36 32.91 241.72 C 37.65 243.90 42.29 246.47 46.67 249.31 C 49.89 254.16 52.36 259.50 54.08 265.07 C 55.30 269.19 60.64 268.62 64.02 268.92 C 71.75 268.78 80.73 269.46 86.90 263.90 C 89.97 260.44 92.51 256.44 94.14 252.10 C 94.80 252.07 96.12 252.01 96.78 251.98 C 97.05 250.00 98.39 248.52 99.43 246.92 C 99.90 243.66 98.78 240.34 99.48 237.11 C 103.63 235.11 107.20 232.22 110.98 229.64 C 111.01 232.02 110.97 234.39 111.05 236.77 C 112.25 236.90 113.46 237.03 114.67 237.16 C 114.41 238.74 114.12 240.32 113.81 241.91 C 118.15 244.07 122.94 245.11 127.54 246.53 C 129.66 243.83 130.16 240.03 131.99 237.06 C 131.50 234.75 130.75 232.42 131.02 230.04 C 131.92 227.34 134.76 226.17 136.93 224.68 C 137.04 220.54 136.73 216.24 138.29 212.32 Z", id: "jaen", name: "Jaén"}, {path: "M 261.20 243.00 C 261.00 241.01 263.39 240.80 264.64 239.90 C 267.02 244.58 272.26 246.51 276.83 248.36 C 281.17 249.84 285.22 247.33 289.30 246.30 C 295.79 246.45 302.56 249.09 306.35 254.59 C 308.77 258.17 311.70 261.43 313.81 265.21 C 315.26 271.02 315.13 277.09 315.94 283.02 C 321.11 283.04 326.34 282.55 331.02 280.18 C 331.91 282.94 332.78 285.70 333.59 288.48 C 337.28 289.22 341.36 289.26 344.63 291.34 C 348.33 294.85 351.35 299.01 354.38 303.10 C 350.55 309.18 346.16 314.88 341.11 319.99 C 344.93 325.34 349.72 330.37 351.31 336.97 C 352.11 341.32 351.41 345.81 352.24 350.17 C 352.78 352.96 353.69 355.67 354.32 358.45 C 350.95 356.56 347.96 354.00 344.36 352.54 C 340.65 351.10 336.69 352.50 332.95 353.13 C 328.95 354.09 324.79 353.98 320.75 354.71 C 318.84 358.03 316.70 361.19 314.13 364.03 C 311.28 367.31 311.23 373.02 306.69 374.66 C 300.96 376.67 295.04 378.12 289.41 380.44 C 282.49 383.18 274.40 385.04 267.37 381.62 C 261.85 379.01 259.55 372.54 253.95 370.07 C 250.08 368.24 246.37 366.12 242.95 363.54 C 239.45 365.28 235.91 367.38 233.71 370.72 C 232.83 372.73 233.02 375.08 232.02 377.03 C 225.30 382.39 218.69 387.97 211.14 392.17 C 202.42 398.61 190.98 399.04 181.89 404.75 C 178.05 407.62 175.02 411.57 170.63 413.66 C 166.73 415.53 162.57 416.75 158.42 417.92 C 158.28 415.60 158.14 413.29 157.99 410.98 C 162.04 407.36 166.79 404.32 169.69 399.61 C 173.88 392.96 178.40 386.34 180.48 378.66 C 182.04 372.99 185.55 367.18 183.69 361.17 C 181.18 359.19 176.12 359.94 175.18 356.46 C 177.16 355.06 179.54 354.01 180.74 351.76 C 183.25 347.54 186.40 343.79 189.68 340.16 C 186.95 337.64 183.66 335.47 182.07 331.98 C 180.97 329.74 179.81 326.79 181.65 324.60 C 183.57 322.45 186.16 321.07 188.35 319.22 C 192.04 316.27 193.90 311.65 197.56 308.68 C 206.66 305.71 216.02 309.12 225.26 309.03 C 221.67 304.76 217.51 299.93 218.26 293.91 C 218.02 287.19 224.97 281.82 222.44 275.05 C 221.96 273.05 221.40 271.08 220.85 269.11 C 221.95 268.17 222.92 267.01 224.24 266.37 C 230.13 265.85 236.42 266.73 241.90 264.00 C 244.37 261.95 244.90 258.43 247.06 256.12 C 251.60 255.44 256.22 256.08 260.78 255.54 C 262.24 251.75 260.59 247.11 261.20 243.00 Z", id: "sierramagina", name: "Sierra Magina"}, {path: "M 61.15 327.73 C 62.83 329.78 64.72 331.73 65.90 334.13 C 65.56 339.70 62.30 344.96 63.36 350.68 C 67.93 355.11 73.74 357.84 79.34 360.69 C 84.44 363.42 86.90 369.71 92.73 371.26 C 103.42 374.19 114.01 378.04 125.19 378.58 C 126.87 374.56 129.71 370.26 128.26 365.74 C 127.00 361.52 125.78 357.27 124.96 352.93 C 131.60 354.10 138.31 354.25 145.02 353.91 C 151.74 353.61 157.20 360.63 163.95 357.94 C 170.60 355.85 177.17 359.35 182.98 362.23 C 182.98 367.72 180.77 372.96 179.28 378.19 C 176.81 386.60 171.88 393.93 167.24 401.26 C 164.97 405.03 160.72 406.70 157.55 409.52 C 154.07 413.21 152.44 418.19 151.13 422.98 C 149.63 421.71 148.16 420.41 146.71 419.10 C 146.57 424.51 148.49 430.45 145.44 435.40 C 142.14 441.21 139.86 447.66 135.70 452.95 C 133.58 453.71 131.21 453.14 128.99 453.27 C 123.03 453.02 117.41 455.39 111.55 456.00 L 104.36 456.00 C 99.63 455.20 94.78 454.03 90.81 451.22 C 87.03 448.53 84.99 444.21 81.80 440.96 C 81.46 441.05 80.77 441.23 80.43 441.33 C 81.06 437.79 78.25 434.93 76.94 431.88 C 77.61 431.22 78.28 430.57 78.96 429.92 C 78.10 429.46 77.24 429.00 76.38 428.55 C 75.82 426.60 75.86 424.33 74.65 422.65 C 71.03 420.32 66.63 419.91 62.74 418.25 C 61.36 417.15 60.28 415.74 59.11 414.42 C 60.32 412.96 61.54 411.50 62.79 410.07 C 60.82 408.54 59.21 406.62 59.05 404.02 C 57.90 403.62 56.73 403.32 55.64 402.80 C 54.92 400.07 55.58 396.74 53.33 394.64 C 50.39 391.52 48.64 387.38 45.16 384.77 C 41.83 382.20 38.60 379.44 36.03 376.10 C 33.08 372.48 34.73 367.00 31.53 363.51 C 28.21 359.31 21.96 364.33 18.37 360.60 C 17.25 357.68 14.97 353.51 17.84 350.94 C 22.81 345.75 27.61 340.20 33.95 336.62 C 39.97 338.07 46.61 340.21 52.62 337.60 C 55.98 334.82 58.04 330.78 61.15 327.73 Z", id: "sierrasur", name: "Sierra Sur"} ]; jaenandomap = new jrMap(this.jaenandopaths);
    $('#mapa').html(jaenandomap.html);
    $('path').hover(jaenandomap.onHoverIn, jaenandomap.onHoverOut).click(jaenandomap.onClick).tooltipster({animation: 'fade', delay: 200, theme: 'tooltipster-default', touchDevices: false, trigger: 'hover',trigger: 'click'});
    $('window').resize(jaenandomap.onResize);
    if (window.location.hash) $(window.location.hash).trigger('click');
    $('#comarca article header').bigtext();
  });
}).call(this);